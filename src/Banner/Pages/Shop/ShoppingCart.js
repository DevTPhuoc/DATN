import { NavLink } from "react-router-dom";
import { products } from "../../../data/product";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { reactHooksModule } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
import { setCartItems } from "../../../actions/cartActions";
import { increaseQuantity, decreaseQuantity } from "../../../actions/cartActions";


function ShoppingCart() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [delCart, setDelCart] = useState([]);
    useEffect(() => {
        fetchdelCart();
    }, []);
    const fetchdelCart = async () => {

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/Get-cart/${auth.user.id}`);
            setDelCart(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);

        }
        const removeCart = async (itemId) => {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/delCart/${itemId}`);
                const updatedCart = delCart.filter(item => item.id !== itemId);
                setDelCart(updatedCart);
            } catch (error) {
                console.error('Error removing item from cart:', error);


            }


        };

    }
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        // Lấy thông tin giỏ hàng từ API (nếu cần)
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/Get-cart/${auth.user.id}`);
                const { data } = response.data;
                // Cập nhật Redux store với danh sách sản phẩm trong giỏ hàng
                dispatch(setCartItems(data)); // Gọi action để cập nhật Redux store
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems(); // Gọi hàm lấy danh sách sản phẩm trong giỏ hàng khi component được tạo
        console.log(fetchCartItems());
    }, [auth.user, dispatch]);

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    const totalPrice = calculateTotalPrice(cartItems);

    const handleIncreaseQuantity = async (itemId) => {
        try {
            let itemadd = cartItems.find((item) => item.id === itemId);
            itemadd.quantity = itemadd.quantity + 1

            // Cập nhật state với phản hồi từ API
            setCartItems(cartItems.map((item) => item.id === itemId ? itemadd : item));
            console.log(itemadd);
        } catch (error) {
            console.error('Error increasing quantity:', error);
        }
    };


    const handleDecreaseQuantity = async (itemId) => {
        try {
            let itemadd = cartItems.find((item) => item.id === itemId);
            if (itemadd.quantity - 1 >= 1) {
                itemadd.quantity = itemadd.quantity - 1
                setCartItems(cartItems.map((item) => item.id === itemId ? itemadd : item));

            }



            // Cập nhật state với phản hồi từ API


        } catch (error) {
            console.error('Error decreasing quantity:', error);
        }
    };
    const handleChangquantity = async (itemId) => {
        try {
            let itemadd = cartItems.find((item) => item.id === itemId);

            const response = await axios.post(`http://127.0.0.1:8000/api/edit-Cart/${itemadd.id}`, itemadd);
            console.log(response);

            const { data } = response.data;

        } catch (error) {

        }

    };
    const removeCart = async (itemId) => {
        // Cập nhật trạng thái cục bộ ngay lập tức
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);

        // Hiển thị thông báo thành công tạm thời
        toast.success('Đã xóa sản phẩm khỏi giỏ hàng.');

        try {
            // Gọi API để xóa sản phẩm khỏi giỏ hàng
            await axios.delete(`http://127.0.0.1:8000/api/delCart/${itemId}`);

            // Cập nhật Redux store sau khi xóa thành công
        } catch (error) {
            console.error('Error removing item from cart:', error);

            // Hiển thị thông báo lỗi nếu API gọi thất bại
            toast.error('Xóa sản phẩm khỏi giỏ hàng thất bại.');

            // Phục hồi trạng thái cục bộ (nếu cần thiết)
            setCartItems(cartItems);
        }
    };



    const renderCartItems = cartItems.map(item => (
        <tr key={item.id} className="single-cart-item">
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
            <td><button onClick={() => handleChangquantity(item.id)}> Xác nhận </button></td>
            <td>
                <h5 className="price">{formatCurrency(item.price)}</h5>
            </td>
            <td>
                <div className="actions">
                    <button onClick={() => removeCart(item.id)}> Xóa </button>
                </div>
            </td>
        </tr>
    ));
    return (
        <>


            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Giỏ Hàng</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Giỏ Hàng</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sản Phẩm</th>
                                        <th scope="col">Số Lượng</th>
                                        <th scope="col">Chức Năng</th>
                                        <th scope="col">Giá</th>
                                        <th scope="col">Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderCartItems}
                                    <tr className="bottom_button">
                                        <td>
                                            <a className="gray_btn" href="ShoppingCart">Cập Nhật Giỏ Hàng</a>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="cupon_text d-flex align-items-center">
                                                <input type="text" placeholder="Coupon Code" />
                                                <a className="primary-btn" href="#">Apply</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Tổng Hóa Đơn</h5>
                                        </td>
                                        <td>
                                            <h5>{formatCurrency(totalPrice)}</h5>
                                        </td>
                                    </tr>
                                    <tr className="out_button_area">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex align-items-center">
                                                <a className="primary-btn" href="ShopCategory">Tiếp tục mua sắm</a>
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
export default ShoppingCart;
function formatCurrency(price) {
    // Chuyển đổi giá từ dạng số sang dạng tiền tệ VND
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    return formatter.format(price);
}