import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductCheckout() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [dataToSend, setDataToSend] = useState({
        user_id: '',
        fullname: '',
        phone: '',
        email: '',
        shippingAddress: '',
    });

    const [errors, setErrors] = useState({
        fullname: '',
        phone: '',
        email: '',
        shippingAddress: '',
    });

    useEffect(() => {
        if (auth?.user && auth?.user?.id) {
            setDataToSend((prevState) => ({
                ...prevState,
                user_id: auth.user.id
            }));
        }
    }, [auth.user]);

    const getValue = (e, name) => {
        setDataToSend((prevState) => ({
            ...prevState,
            [name]: e.target.value
        }));
    };

    const validateForm = () => {
        let isValid = true;
        let errors = {};
        // Ràng buộc họ tên
        if (!dataToSend.fullname) {
            errors.fullname = 'Vui lòng nhập tên đầy đủ.';
            isValid = false;
        } else if (!/^[a-zA-Z\s]*$/.test(dataToSend.fullname)) {
            errors.fullname = 'Tên chỉ được chứa các ký tự chữ.';
            isValid = false;
        }
        // Ràng buộc số điện thoại
        if (!dataToSend.phone) {
            errors.phone = 'Vui lòng nhập số điện thoại.';
            isValid = false;
        } else if (dataToSend.phone.length !== 10) {
            errors.phone = 'Số điện thoại phải gồm 10 số.';
            isValid = false;
        }
        //Ràng buộc email
        if (!dataToSend.email) {
            errors.email = 'Vui lòng nhập email.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(dataToSend.email)) {
            errors.email = 'Email không hợp lệ.';
            isValid = false;
        }
        //Ràng buộc địa chỉ
        if (!dataToSend.shippingAddress) {
            errors.shippingAddress = 'Vui lòng nhập địa chỉ giao hàng.';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const confirmPayment = async (itemId) => {
        if (!validateForm()) {
            toast.error('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        console.log('Data to send:', dataToSend);

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/create-order`, dataToSend);
            setPaymentInfo(response.data);

            // Clear the cart after successful payment
            // await axios.delete(`http://127.0.0.1:8000/api/delCart/${itemId}`);

            toast.success('Đơn hàng đã đặt thành công!');
            navigate('/Confirmation');
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
        const fetchCartItems = async () => {
            if (auth.user == null) {
                navigate('/login');
                return;
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
    }, [auth.user, navigate]);

    const dsOrder = orderDetails?.map(cart => (
        <li key={cart.id} className="order-item">
            <span className="product-name">{cart.product_name}</span>
            <span className="middle">{cart.quantity}</span>
            <span className="last">{cart.totalPrice}</span>
        </li>
    ));

    return (
        <>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Thủ tục thanh toán</h1>
                            <nav className="d-flex align-items-center">
                                <a href="index.html">Trang Chủ<span className="lnr lnr-arrow-right"></span></a>
                                <a href="single-product.html">Thủ tục thanh toán</a>
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Tên Đầy Đủ"
                                            value={dataToSend.fullname}
                                            onChange={(e) => getValue(e, 'fullname')}
                                        />
                                        {errors.fullname && <p className="text-danger">{errors.fullname}</p>}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Số Điện Thoại"
                                            value={dataToSend.phone}
                                            onChange={(e) => getValue(e, 'phone')}
                                        />
                                        {errors.phone && <p className="text-danger">{errors.phone}</p>}
                                        <span className="placeholder"></span>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email"
                                            value={dataToSend.email}
                                            onChange={(e) => getValue(e, 'email')}
                                        />
                                        {errors.email && <p className="text-danger">{errors.email}</p>}
                                        <span className="placeholder"></span>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Địa Chỉ Giao Hàng"
                                            value={dataToSend.shippingAddress}
                                            onChange={(e) => getValue(e, 'shippingAddress')}
                                        />
                                        {errors.shippingAddress && <p className="text-danger">{errors.shippingAddress}</p>}
                                        <span className="placeholder"></span>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="order_box">
                                    <h2>Đơn Hàng Của Bạn</h2>
                                    <ul className="list">
                                        <li><a href="#">Sản Phẩm <span>Số Lượng</span></a></li>
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
                                    <button className="primary-btn" onClick={handleConfirmPayment}>Đồng Ý Thanh Toán</button>
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
