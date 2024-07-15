import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';
import bg from '../../img/banner/banner-img.png';
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import { NavLink } from "react-router-dom";

function Home() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const countdownDate = new Date('2024-07-20T23:59:59').getTime();

		const updateCountdown = () => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

			setDays(daysLeft);
			setHours(hoursLeft);
			setMinutes(minutesLeft);
			setSeconds(secondsLeft);
		};

		const countdownInterval = setInterval(updateCountdown, 1000);
		return () => clearInterval(countdownInterval);
	}, []);

	const [sanPham, setSanPham] = useState([]);

	useEffect(() => {
		const getAllProducts = async () => {
			try {
				const response = await axios.get('http://127.0.0.1:8000/api/new-arrivals');
				const data = response.data;
				setSanPham(data ? data : []);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		getAllProducts();
	}, []);

	const dsSanPham = sanPham?.map(product => (
		<div className="col-lg-4 col-md-6" key={product.id}>
			<div className="single-product">
				<img className="product-image img-fluid" src={`http://127.0.0.1:8000/img/add/${product.image_name}`} alt={product.name} />
				<div className="product-details">
					<h6>{product.name}</h6>
					<div className="price">
						<h6>{product.selling_price}</h6>
					</div>
					<div className="prd-bottom">
						<div className="social-info">
							<span className="ti-bag"></span>
							<p className="hover-text">Thêm vào giỏ hàng</p>
							<ToastContainer />
						</div>
						<a href="#" className="social-info">
							<span className="lnr lnr-heart"></span>
							<p className="hover-text">Yêu thích</p>
						</a>
						{/* <a href="#" className="social-info">
							<span className="lnr lnr-sync"></span>
							<p className="hover-text">So sánh</p>
						</a> */}
						<NavLink to={`/ProductDetail/${product.id}`} className="social-info">
							<span className="lnr lnr-sync"></span>
							<p className="hover-text">Xem chi tiết</p>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<>
			<section className="banner-area">
				<div className="container">
					<div className="row fullscreen align-items-center justify-content-start" style={{ height: "975px" }}>
						<div className="col-lg-12">
							<div className="item">
								<div className="row single-slide align-items-center d-flex">
									<div className="col-lg-5 col-md-6">
										<div className="banner-content">
											<h1>Sản Phẩm Mới Của Nike!</h1>
											<p>Chào mừng bạn đến với KARMASHOP. Chúng tôi cam kết cung cấp những sản phẩm giày chất lượng cao nhất.</p>
											<div className="add-bag d-flex align-items-center">
												 {/* <a className="add-btn" href="#"><span className="lnr lnr-cross"></span></a> 
												 <span className="add-text text-uppercase">Thêm Vào Giỏ Hàng</span>  */}
												
											</div>
										</div>
									</div>
									<div className="col-lg-7">
										<div className="banner-img">
											<img className="img-fluid" src={bg} alt="Banner Image" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="features-area section_gap">
				<div class="container">
					<div class="row features-inner">

						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="single-features">
								<div class="f-icon">
									<img src="img/features/f-icon1.png" alt=""></img>
								</div>
								<h6>Giao Hàng Miễn Phí</h6>

							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="single-features">
								<div class="f-icon">
									<img src="img/features/f-icon2.png" alt=""></img>
								</div>
								<h6>Chính sách hoàn trả</h6>

							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="single-features">
								<div class="f-icon">
									<img src="img/features/f-icon3.png" alt=""></img>
								</div>
								<h6>Hỗ trợ 24/7</h6>

							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="single-features">
								<div class="f-icon">
									<img src="img/features/f-icon4.png" alt=""></img>
								</div>
								<h6>Thanh toán an toàn</h6>

							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="category-area">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8 col-md-12">
							<div class="row">
								<div class="col-lg-8 col-md-8">
									<div class="single-deal">
										<div class="overlay"></div>
										<img class="img-fluid w-100" src="img/category/c1.jpg" alt=""></img>
										<a href="img/category/c1.jpg" class="img-pop-up" target="_blank">
											<div class="deal-details">
												<h6 class="deal-title">Giày Dành Cho Thể Thao</h6>
											</div>
										</a>
									</div>
								</div>
								<div class="col-lg-4 col-md-4">
									<div class="single-deal">
										<div class="overlay"></div>
										<img class="img-fluid w-100" src="img/category/c2.jpg" alt=""></img>
										<a href="img/category/c2.jpg" class="img-pop-up" target="_blank">
											<div class="deal-details">
												<h6 class="deal-title">Giày Dành Cho Thể Thao</h6>
											</div>
										</a>
									</div>
								</div>
								<div class="col-lg-4 col-md-4">
									<div class="single-deal">
										<div class="overlay"></div>
										<img class="img-fluid w-100" src="img/category/c3.jpg" alt=""></img>
										<a href="img/category/c3.jpg" class="img-pop-up" target="_blank">
											<div class="deal-details">
												<h6 class="deal-title">Giày Dành Cho Thể Thao</h6>
											</div>
										</a>
									</div>
								</div>
								<div class="col-lg-8 col-md-8">
									<div class="single-deal">
										<div class="overlay"></div>
										<img class="img-fluid w-100" src="img/category/c4.jpg" alt=""></img>
										<a href="img/category/c4.jpg" class="img-pop-up" target="_blank">
											<div class="deal-details">
												<h6 class="deal-title">Giày Dành Cho Thể Thao</h6>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-deal">
								<div class="overlay"></div>
								<img class="img-fluid w-100" src="img/category/c5.jpg" alt=""></img>
								<a href="img/category/c5.jpg" class="img-pop-up" target="_blank">
									<div class="deal-details">
										<h6 class="deal-title">	</h6>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Sản Phẩm sắp ra mắt  */}
			<section class="owl-carousel active-product-area section_gap owl-theme owl-loaded">
				<div class="spsapramat owl-stage-outer">
					<div class="single-product-slider owl-stage">
						<div class="container">
							<div class="row justify-content-center">
								<div class="col-lg-12 text-center">
									<div className="section-title">
										<h1>Sản phẩm vừa được ra mắt</h1>
										<p>Khám phá ngay những sản phẩm mới nhất với những tính năng và thiết kế độc đáo.</p>
									</div>

								</div>
							</div>
							<div class="row owl-stage">
								{dsSanPham}
<<<<<<< HEAD


							

								
								
 					</div>

=======
							</div>
>>>>>>> 33d2feb49b50bd111549d71786326c34100f80e9
						</div>
					</div>
				</div>
				<div class="owl-item active" ><div class="single-product-slider"></div>
				</div>
			</section>

			{/* Thời gian sale */}
			<section class="exclusive-deal-area">
				<div class="container-fluid">
					<div class="row justify-content-center align-items-center">
						<div class="col-lg-6 no-padding exclusive-left">
							<div class="row clock_sec clockdiv" id="clockdiv">
								<div class="col-lg-12">
									<h1>Ưu đãi hấp dẫn độc quyền sắp kết thúc!</h1>
									<p>Những người cực kỳ yêu thích hệ thống thân thiện với môi trường.</p>
								</div>
								<div class="col-lg-12">
									<div class="row clock-wrap">
										<div class="col clockinner1 clockinner">
											<h1 className="days">{days}</h1>
											<span class="smalltext">Ngày</span>
										</div>
										<div class="col clockinner clockinner1">
											<h1 className="hours">{hours}</h1>
											<span class="smalltext">Giờ</span>
										</div>
										<div class="col clockinner clockinner1">
											<h1 className="minutes">{minutes}</h1>
											<span class="smalltext">Phút</span>
										</div>
										<div class="col clockinner clockinner1">
											<h1 className="seconds">{seconds}</h1>
											<span class="smalltext">Giây</span>
										</div>
									</div>
								</div>
							</div>
							<a href="ShopCategory" class="primary-btn">Cửa Hàng</a>
						</div>
						<div class="col-lg-6 no-padding exclusive-right">
							<div class="active-exclusive-product-slider">
								<div class="single-exclusive-slider">
									<img class="img-fluid" src="img/product/e-p1.png" alt="" />
									<div class="product-details">
										<div class="price">
											<h6>5.500.000 VND</h6>
											<h6 class="l-through">5.990.000</h6>
										</div>
										<h4>ĐẾ GIÀY ADDIDAS HAMMER MỚI DÀNH CHO NGƯỜI CHƠI THỂ THAO</h4>
										<div class="add-bag d-flex align-items-center justify-content-center">
											{/* <a class="add-btn" href=""><span class="ti-bag"></span></a> */}
											<a href="ShopCategory" class="primary-btn">Cửa Hàng</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Cho Đẹp  */}
			<section class="brand-area section_gap">
				<div class="container">
					<div class="row">

						<img class="img-fluid d-block mx-auto" src="img/brand/1.png" alt="" />


						<img class="img-fluid d-block mx-auto" src="img/brand/2.png" alt="" />


						<img class="img-fluid d-block mx-auto" src="img/brand/3.png" alt="" />


						<img class="img-fluid d-block mx-auto" src="img/brand/4.png" alt="" />


						<img class="img-fluid d-block mx-auto" src="img/brand/5.png" alt="" />

					</div>
				</div>
			</section>

		</>
	);
}

export default Home;
