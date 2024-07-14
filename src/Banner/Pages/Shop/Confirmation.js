import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { useState, useEffect } from "react";

function Confirmation() {
    const auth = useSelector((state) => state.auth);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/get-order/${auth?.user?.id}`);
                const { data } = response.data;
                // Cập nhật state với danh sách sản phẩm trong giỏ hàng
               
                    setCartItems(response.data);
             	 // Nếu không phải là mảng, gán giá trị rỗng
                
            } catch (error) {
                console.error("Error fetching cart items:", error);
                setCartItems([]); // Nếu gặp lỗi, gán giá trị rỗng
            }
        };
	
        if (auth?.user && auth?.user?.id) {
            fetchCartItems();
        }
    }, [auth?.user?.id]);
	const renderStatus = (role) => {
		if (role === -1) {
			return <p>Đã hủy</p>;
		} else if (role === 0) {
			return <p>Chờ xác nhận</p>;
		} 
		else if (role === 1) {
			return <p>Đã xác nhận</p>;
		}
		 else if (role === 2) {
			return <p>Đang giao</p>;
		} 
		
		else {
			return <p>Trạng thái không xác định</p>; // Xử lý trường hợp khác (nếu cần)
		}
	};
	const cancelOrder = async (orderId) => {
		try {
			const response = await axios.post(`http://127.0.0.1:8000/api/cancel-order/${orderId}`);
			if (response.data.status === 'success') {
				toast.success(response.data.message);
				// Update cart items after successful cancellation
				
			
	setCartItems(cartItems.filter(item => item.id !== orderId));
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.error("Error cancelling order:", error);
			toast.
	  
	error('Failed to cancel order');
		}
	};
	const dsCart = cartItems.map(cart => (
        <tr key={cart.id} className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3 text-sm">{cart.fullname}</td>
            <td className="px-4 py-3 text-sm">{cart.order_code}</td>
            <td className="px-4 py-3 text-sm">{cart.shippingAddress}</td>
            <td className="px-4 py-3 text-sm">{renderStatus(cart.role)}</td>
            <td className="px-4 py-3 text-sm">{cart.created_at}</td>
            <td className="px-4 py-3 text-sm">{cart.phone}</td>
            <td className="px-4 py-3 text-sm">{cart.totalPrice}</td>
            <td className="px-4 py-3 text-sm">
                {cart.role !== 2 && (
                    <button onClick={() => cancelOrder(cart.id)}>Hủy đơn hàng</button>
                )}
            </td>
        </tr>
    ));
    console.log(dsCart);
    return (
        <>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Thông Tin Đơn Hàng</h1>
                            <nav className="d-flex align-items-center">
                                <a href="index.html">Trang Chủ<span className="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Thông Tin Đơn Hàng</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>


    <section class="order_details section_gap">
		<div class="container">
			<h3 class="title_confirmation">Cảm ơn. Đơn đặt hàng của bạn đã được nhận; 	
			</h3>
			<div class="row order_d_inner">
				<div class="col-lg-4">
					<div class="details_item">
						
						<h4>Thông Tin Đặt Hàng</h4>
						
						<tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-5 py-3">Tên người đặt</th>
                        <th className="px-5 py-3">Mã đơn hàng</th>
                        <th className="px-5 py-3">Địa chỉ giao hàng</th>
                        <th className="px-5 py-3">Trạng Thái</th>
                        <th className="px-5 py-3">Ngày đặt hàng</th>
                        <th className="px-5 py-3">Số điện thoại</th>
                        <th className="px-5 py-3">Đơn giá</th>
						<th className="px-5 py-3">Chức Năng</th>
                    </tr>
						                                {dsCart}
					</div>
				</div>
				
				<div class="col-lg-4">
				</div>
			</div>
			<div class="order_details_table">
				<h2>Chi Tiết Đặt Hàng</h2>
				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Sản Phẩm</th>
								<th scope="col">Ảnh</th>
								<th scope="col">Số Lượng</th>
								<th scope="col">Tổng Cộng</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>Pixelstore fresh Blackberry</p>
								</td>
								<td>
									<h5>Ảnh </h5>
								</td>
								<td>
									<p>2</p>
								</td>
								<td>
									<p>$720.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Pixelstore fresh Blackberry</p>
								</td>
								<td>
									<h5>Ảnh</h5>
								</td>
								<td>
									<p>2</p>
								</td>
								<td>
									<p>$720.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Pixelstore fresh Blackberry</p>
								</td>
								<td>
									<h5>Ảnh</h5>
								</td>
								<td>
									<p>2</p>
								</td>
								<td>
									<p>$720.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<h4>Tổng giá sản phẩm</h4>
								</td>
								<td>
									<h5></h5>
								</td>
								<td>
									<p>$2160.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<h4>Phí Vận Chuyển</h4>
								</td>
								<td>
									<h5></h5>
								</td>
								<td>
									<p>Flat rate: $50.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<h4>Tổng giá Đơn Hàng</h4>
								</td>
								<td>
									<h5></h5>
								</td>
								<td>
									<p>$2210.00</p>
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
export default Confirmation;