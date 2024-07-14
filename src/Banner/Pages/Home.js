import 'tailwindcss/tailwind.css';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from 'react';
import bg from '../../img/banner/banner-img.png'
import c1 from '../../img/category/c1.jpg'
import { products } from '../../data/product';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

function Home() {

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const countdownDate = new Date('2024-07-20T23:59:59').getTime(); // Thay đổi ngày kết thúc ưu đãi ở đây

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

		// Xóa interval khi component unmount để tránh rò rỉ bộ nhớ
		return () => clearInterval(countdownInterval);
	}, []);
	const containerStyle = {
		position: 'absolute',
		right: '-500px	',
		top: '200px',
	};

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = ['path/to/image1.jpg', 'path/to/image2.jpg', 'path/to/image3.jpg'];
	const intervalTime = 5000; // Thời gian chuyển đổi, ví dụ sau 5 giây

	useEffect(() => {
		const interval = setInterval(() => {
			// Tăng chỉ số hình ảnh hiện tại, vòng lại khi đến hết mảng
			setCurrentImageIndex(current => (current + 1) % images.length);
		}, intervalTime);

		return () => clearInterval(interval);
	}, []);



	const [sanPham, setSanPham] = useState([]);

	useEffect(() => {
		const getAllProducts = async () => {
			try {
				const response = await axios.get('http://127.0.0.1:8000/api/new-arrivals');
				const data = response.data; // response.data chính là mảng sản phẩm từ API
				setSanPham(data ? data : []);
				console.log(data); // In ra dữ liệu lấy được từ API để kiểm tra

			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		getAllProducts(); // Gọi hàm lấy dữ liệu khi component được render
		console.log(getAllProducts());
	}, []); // Tham số rỗng [] để chỉ chạy useEffect một lần sau khi component mount

	const dsSanPham = sanPham?.map(product =>


		<div className="col-lg-4 col-md-6">
			<div className="single-product">
				<img className="product-image img-fluid" src={`http://127.0.0.1:8000/img/add/${product.image_name}`} alt={product.name} />
				<div className="product-details">
					<h6>{product.name}</h6>
					<div className="price">
						<h6>{/* Thêm các chi tiết giá khác nếu cần */}</h6>
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
						<a href="#" className="social-info">
							<span className="lnr lnr-sync"></span>
							<p className="hover-text">So sánh</p>
						</a>
						<NavLink to={`/ProductDetail/${product.id}`} className="social-info">
							<span className="lnr lnr-sync"></span>
							<p className="hover-text">Xem chi tiết</p>
						</NavLink>
					</div>
				</div>
			</div>
		</div>





	)


	return (
		<>

			<section className="banner-area">
				<div className="container">
					<div className="row fullscreen align-items-center justify-content-start" style={{ height: "975px" }}>
						<div className="col-lg-12">
							{/* <OwlCarousel
							className="owl-theme"
							items={1}
							loop
							nav
							autoplay
							autoplayTimeout={3000}
							autoplayHoverPause
							> */}
							<div className="item">
								<div className="row single-slide align-items-center d-flex">
									<div className="col-lg-5 col-md-6">
										<div className="banner-content">
											<h1>Sản Phẩm Mới Của Nike!</h1>
											<p>Chào mừng bạn đến với KARMASHOP Chúng tôi cam kết cung cấp những sản phẩm giày chất lượng cao nhất với mức giá hợp lý nhất.
												Tại đây, bạn sẽ tìm thấy những mẫu giày phong cách, đa dạng và phù hợp với mọi nhu cầu của bạn.</p>
											<div className="add-bag d-flex align-items-center">
												<a className="add-btn" href="#"><span className="lnr lnr-cross"></span></a>
												<span className="add-text text-uppercase">Add to Bag</span>
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

							{/* </OwlCarousel> */}
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

			<section class="owl-carousel active-product-area section_gap owl-theme owl-loaded">

				<div class="spmoinhat">
					<div class="owl-stage" >
						<div class="owl-item cloned" >
							<div class="single-product-slider">
								<div class="container">
									<div class="row justify-content-center">
										<div class="col-lg-6 text-center">
											<div class="section-title">

											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div class="spsapramat">
					<div class="single-product-slider">
						<div class="container">
							<div class="row justify-content-center">
								<div class="col-lg-6 text-center">
									<div class="section-title">
										<h1>Sản phẩm sắp ra mắt</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
											dolore
											magna aliqua.</p>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-3 col-md-6">


									<div class="single-product">
										<img class="img-fluid" src="img/product/p6.jpg" alt=""></img>
										<div class="product-details">

											<div className='abc'>
												<div class="price">
													<h6></h6>

													<h6></h6>
													<h6 class="l-through"></h6>
												</div>
											</div>
											<h6>addidas New Hammer sole
												for Sports person</h6>
											<div class="price">
												<h6></h6>
												<h6 class="l-through">$210.00</h6>
											</div>
											<div class="prd-bottom">

												<a href="" class="social-info">
													<span class="ti-bag"></span>
													<p class="hover-text">add to bag</p>
												</a>
												<a href="" class="social-info">
													<span class="lnr lnr-heart"></span>
													<p class="hover-text">Wishlist</p>
												</a>
												<a href="" class="social-info">
													<span class="lnr lnr-sync"></span>
													<p class="hover-text">compare</p>
												</a>
												<a href="" class="social-info">
													<span class="lnr lnr-move"></span>
													<p class="hover-text">view more</p>
												</a>
											</div>
										</div>


									</div>


									{dsSanPham}






								</div>

							</div>
						</div></div><div class="owl-item active" ><div class="single-product-slider">
						</div>
					</div>
			</section>
			<section className="exclusive-deal-area">
				<div className="container-fluid">
					<div className="row justify-content-center align-items-center">
						<div className="col-lg-6 no-padding exclusive-left">
							<div className="row clock_sec clockdiv" id="clockdiv">
								<div className="col-lg-12">
									<h1>Ưu đãi hấp dẫn độc quyền sắp kết thúc!</h1>
									<p>Những người cực kỳ yêu thích hệ thống thân thiện với môi trường.</p>
								</div>
								<div className="col-lg-12">
									<div className="row clock-wrap">
										<div className="col clockinner1 clockinner">
											<h1 className="days">{days}</h1>
											<span className="smalltext">Ngày</span>
										</div>
										<div className="col clockinner clockinner1">
											<h1 className="hours">{hours}</h1>
											<span className="smalltext">Giờ</span>
										</div>
										<div className="col clockinner clockinner1">
											<h1 className="minutes">{minutes}</h1>
											<span className="smalltext">Phút</span>
										</div>
										<div className="col clockinner clockinner1">
											<h1 className="seconds">{seconds}</h1>
											<span className="smalltext">Giây</span>
										</div>
									</div>
								</div>
							</div>
							<a href="ShopCategory" className="primary-btn">Cửa Hàng</a>
						</div>
						<div className="col-lg-6 no-padding exclusive-right">
							<div className="active-exclusive-product-slider">
								<div className="single-exclusive-slider">
									<img className="img-fluid" src="img/product/e-p1.png" alt="" />
									<div className="product-details">
										<div className="price">
											<h6>$150.00</h6>
											<h6 className="l-through">$210.00</h6>
										</div>
										<h4>addidas New Hammer sole for Sports person</h4>
										<div className="add-bag d-flex align-items-center justify-content-center">
											<a className="add-btn" href=""><span className="ti-bag"></span></a>
											<span className="add-text text-uppercase">Add to Bag</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

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
