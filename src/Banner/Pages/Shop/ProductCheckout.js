import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { useState, useEffect } from "react";


function ProductCheckout() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [dataToSend, setDataToSend] = useState({
        user_id: '',
        fullname: '',
        phone: '',
        email: '',
        shippingAddress: '',
    });

    useEffect(() => {
        if (auth?.user && auth?.user?.id) {
            setDataToSend(prevState => ({
                ...prevState,
                user_id: auth.user.id
            }));
        }
    }, [auth.user]);

    const getValue = (e, name) => {
        setDataToSend(prevState => ({
            ...prevState,
            [name]: e.target.value
        }));
    };

    const confirmPayment = async (itemId) => {
        console.log('Data to send:', dataToSend);
       
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/create-order`, dataToSend);

            setPaymentInfo(response.data);

            // Clear the cart after successful payment
            // await axios.delete(`http://127.0.0.1:8000/api/delCart/${itemId}`);


            toast.success('Thanh toán thành công!');
        } catch (error) {
            console.error('Error confirming payment:', error);
            toast.error('Thanh toán thất bại. Vui lòng thử lại.');
        }
    };
    const handleConfirmPayment = () => {
        // Assuming you have an itemId to pass
        const itemId = auth.user.id; // Replace this with the correct itemId if needed
        confirmPayment(itemId);
    };

    const [paymentInfo, setPaymentInfo] = useState(null);
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        console.log();

        const fetchCartItems = async () => {
            if(auth.user==null)
                
                {
                return    navigate('/login');
                
             
            }
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/Get-cart/${auth.user.id}`);
                const { data } = response.data;
                setOrderDetails(data);

            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    const dsOrder = orderDetails?.map(cart =>
        <div key={cart.id}>
            <ul className="list">
                <li>
                    <a href="#">{cart.product_name} <span className="middle">{cart.quantity}</span> <span className="last">{cart.totalPrice}</span></a>
                </li>
            </ul>
        </div>
    );

    return (
        <>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Checkout</h1>
                            <nav className="d-flex align-items-center">
                                <a href="index.html">Trang Chủ<span className="lnr lnr-arrow-right"></span></a>
                                <a href="single-product.html">Checkout</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="checkout_area section_gap">
                <div className="container">
                    <div className="billing_details">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3>Chi Tiết Thanh Toán</h3>
                                <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" placeholder="Tên Đầy Đủ" onChange={(e) => getValue(e, 'fullname')} />
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input type="text" className="form-control" placeholder="Số Điện Thoại" onChange={(e) => getValue(e, 'phone')} />
                                        <span className="placeholder"></span>
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input type="text" className="form-control" placeholder="Email" onChange={(e) => getValue(e, 'email')} />
                                        <span className="placeholder"></span>
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input type="text" className="form-control" placeholder="Địa Chỉ Giao Hàng" onChange={(e) => getValue(e, 'shippingAddress')} />
                                        <span className="placeholder"></span>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="order_box">
                                    <h2>Đơn Hàng Của Bạn</h2>
                                    <ul className="list">
                                        <li><a href="#">Sản Phẩm <span>Tổng Cộng</span></a></li>
                                        {dsOrder}
                                    </ul>
                                    <div className="payment_item">
                                        <div className="radion_btn">
                                            <input type="radio" id="f-option5" name="selector" />
                                            <label htmlFor="f-option5">Phương Thức Thanh Toán</label>
                                            <div className="check"></div>
                                        </div>
                                        <p>Thanh toán bằng tiền mặt</p>
                                    </div>
                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option4" name="selector" />
                                        <label htmlFor="f-option4">Tôi đã đọc và chấp hành </label>
                                        <a href="#">Điều khoản và điều kiện</a>
                                    </div>
                                    <NavLink className="primary-btn" to="/Confirmation" onClick={() => confirmPayment()}>Đồng Ý Thanh Toán</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductCheckout;
