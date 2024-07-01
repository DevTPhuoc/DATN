import { NavLink } from "react-router-dom";

function Confirmation(){
    return(

        <>
        <section class="banner-area organic-breadcrumb">
		<div class="container">
			<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div class="col-first">
					<h1>Thông Tin Đơn Hàng</h1>
					<nav class="d-flex align-items-center">
						<a href="index.html">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
						<a href="category.html">Thông Tin Đơn Hàng</a>
					</nav>
				</div>
			</div>
		</div>
	</section>

    <section class="order_details section_gap">
		<div class="container">
			<h3 class="title_confirmation">Cảm ơn. Đơn đặt hàng của bạn đã được nhận;</h3>
			<div class="row order_d_inner">
				<div class="col-lg-4">
					<div class="details_item">
						
						<h4>Thông Tin Đặt Hàng</h4>
						<ul class="list">
							<li><a href="#"><span>Mã Đơn Hàng</span> : 60235</a></li>
							<li><a href="#"><span>Thời Gian</span>   : Los Angeles</a></li>
							<li><a href="#"><span>Tổng Tiền</span>   : 7.5000.000 VND</a></li>
							<li><a href="#"><span>Phương Thức Thanh Toán</span> : Ngân Hàng</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="details_item">
						<h4>Thông Tin Khách Hàng</h4>
						<ul class="list">
							<li><a href="#"><span>Street</span> : 56/8</a></li>
							<li><a href="#"><span>City</span> : Los Angeles</a></li>
							<li><a href="#"><span>Country</span> : United States</a></li>
							<li><a href="#"><span>Postcode </span> : 36952</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="details_item">
						<h4>Địa Chỉ Nhận Hàng</h4>
						<ul class="list">
							<li><a href="#"><span>Street</span> : 56/8</a></li>
							<li><a href="#"><span>City</span> : Los Angeles</a></li>
							<li><a href="#"><span>Country</span> : United States</a></li>
							<li><a href="#"><span>Postcode </span> : 36952</a></li>
						</ul>
					</div>
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