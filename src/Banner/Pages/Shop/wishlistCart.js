import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function Wishlist() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        fetchWishlistItems();
    }, [auth.user]);

    const fetchWishlistItems = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/Get-wishlist/${auth.user.id}`);
            const { data } = response.data;
            setWishlistItems(data); // Cập nhật state local
            dispatch(setWishlistItems(data)); // Cập nhật state global qua Redux
        } catch (error) {
            console.error('Error fetching wishlist items:', error);
        }
    };

    const handleRemoveFromWishlist = async (itemId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/delWishlist/${itemId}`);
            const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);
            setWishlistItems(updatedWishlist); // Cập nhật state local
            toast.success('Đã xóa sản phẩm khỏi danh sách yêu thích.');
        } catch (error) {
            console.error('Error removing item from wishlist:', error);
            toast.error('Xóa sản phẩm khỏi danh sách yêu thích thất bại.');
        }
    };

    const handleIncreaseQuantity = async (itemId) => {
        try {
            const updatedWishlist = wishlistItems.map(item => {
                if (item.id === itemId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setWishlistItems(updatedWishlist); // Cập nhật state local
        } catch (error) {
            console.error('Error increasing quantity:', error);
        }
    };

    const handleDecreaseQuantity = async (itemId) => {
        try {
            const updatedWishlist = wishlistItems.map(item => {
                if (item.id === itemId && item.quantity - 1 >= 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            setWishlistItems(updatedWishlist); // Cập nhật state local
        } catch (error) {
            console.error('Error decreasing quantity:', error);
        }
    };

    const renderWishlistItems = wishlistItems.map(item => (
        <tr key={item.id}>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src={`http://127.0.0.1:8000/img/add/${item?.image_name}`} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    </div>
                    <div className="media-body">
                        <p>{item.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className="product_count">
                    <input type="text" name="qty" id={`qty-${item.id}`} maxLength="12" value={item.quantity} title="Quantity:" className="input-text qty" readOnly />
                    <button onClick={() => handleIncreaseQuantity(item.id)} className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
                    <button onClick={() => handleDecreaseQuantity(item.id)} className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
                </div>
            </td>
            <td>
                <button onClick={() => handleRemoveFromWishlist(item.id)}> Xóa </button>
            </td>
        </tr>
    ));

    return (
        <>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Wishlist</h1>
                            <nav className="d-flex align-items-center">
                                <a href="index.html">Home<span className="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Wishlist</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wishlist_area">
                <div className="container">
                    <div className="wishlist_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderWishlistItems}
                                    <tr className="bottom_button">
                                        <td>
                                            <NavLink className="gray_btn" to="/ShopCategory">Tiếp tục mua sắm</NavLink>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex align-items-center">
                                                <NavLink className="primary-btn" to="/ProductCheckout">Trang Thanh Toán</NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Wishlist;
