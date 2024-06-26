import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';
import bg from '../../img/banner/banner-img.png'
import c1 from '../../img/category/c1.jpg'
import { products } from '../../data/product';
import { NavLink } from "react-router-dom";
function Home() {
	const [selectedCategory, setCategory] = useState(null);
	const [isShowModal, setShowModal] = useState(false);
	const [selectedProduct, setProduct] = useState(null);
	const [cart, setCart] = useState([]);
	const [isShowCart, setShowCart] = useState(false);

	const onClickCategoryHandler = (cat_id) => {
		setCategory(cat_id);
	};

	const onClickProductHandler = (product) => {
		setProduct(product);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	const onAddtoCartHandler = (product) => {
		if (cart.indexOf(product) !== -1) return null;
		const arr = [...cart];
		product.amount = 1;
		arr.push(product);
		setCart([...arr]);
	};

	useEffect(() => {
		console.log(cart);
	});
	const containerStyle = {
		position: 'absolute',
		right: '-500px	',
		top: '200px',
	};
	let filteredProducts = [...products];
	if (selectedCategory != null) {
		filteredProducts = products.filter(
			(product) => product.category_id == selectedCategory
		);
	}
	return (
		<>
			<div class="col-lg-7 subbg">
				<div class="banner-img">
					<img src={bg} alt="phuoc" style={containerStyle} />
				</div>
			</div>
			<section class="banner-area">
				<div class="container">
					<div class="row fullscreen align-items-center justify-content-start" style={{ height: "975px" }}>
						<div class="col-lg-12">
							<div class="active-banner-slider owl-carousel owl-theme owl-loaded">


								<div class="owl-stage-outer"><div class="owl-stage" style={{ transform: 'translate3d(-2220px, 0px, 0px)' }}><div class="owl-item cloned" style={{ width: '1110px', marginRight: '0px' }}><div class="row single-slide align-items-center d-flex">
									<div class="col-lg-5 col-md-6">
										<div class="banner-content">
											<h1>Nike New <br /> Collection!</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
											<div class="add-bag d-flex align-items-center">
												<a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
												<span class="add-text text-uppercase">Add to Bag</span>
											</div>
										</div>
									</div>


								</div></div><div class="owl-item cloned" style={{ width: '1110px', marginRight: '0px' }}><div class="row single-slide">
									<div class="col-lg-5">
										<div class="banner-content">
											<h1>Nike New <br />Collection!</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
											<div class="add-bag d-flex align-items-center">
												<a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
												<span class="add-text text-uppercase">Add to Bag</span>
											</div>
										</div>
									</div>
									
									<div class="col-lg-7">
										<div class="banner-img">
											<img class="img-fluid" src="img/banner/banner-img.png" alt=""></img>
										</div>
									</div>
								</div>
							</div>
								<div class="owl-item" style={{ width: '1110px', marginRight: '0px' }}><div class="row single-slide">
									<div class="col-lg-5">
										<div class="banner-content">
											<h1>Nike New <br />Collection!</h1>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
											<div class="add-bag d-flex align-items-center">
												<a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
												<span class="add-text text-uppercase">Add to Bag</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="owl-controls"><div class="owl-nav"><div class="owl-prev"><img src="img/banner/prev.png"></img></div>
					<div class="owl-next" ><img src="img/banner/next.png"></img></div></div><div class="owl-dots" style={{ display: "none" }}></div></div></div>
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
								<p>Free Shipping on all order</p>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="single-features">
								<div class="f-icon">
									<img src="img/features/f-icon2.png" alt=""></img>
								</div>
								<h6>Chính sách hoàn trả</h6>
								<p>Free Shipping on all order</p>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="single-features">
								<div class="f-icon">
									<img src="img/features/f-icon3.png" alt=""></img>
								</div>
								<h6>Hỗ trợ 24/7</h6>
								<p>Free Shipping on all order</p>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="single-features">
								<div class="f-icon">
									<img src="img/features/f-icon4.png" alt=""></img>
								</div>
								<h6>Thanh toán an toàn</h6>
								<p>Free Shipping on all order</p>
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
											{products.map((item) =>
												<div className='abc'>
													<div class="price">
														<h6></h6>
														
														<h6>{item.name}</h6>
														<h6 class="l-through">{item.price}</h6>
													</div>
												</div>)}
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

								</div>

								<div class="col-lg-3 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p8.jpg" alt=""></img>
										<div class="product-details">
											<h6>addidas New Hammer sole
												for Sports person</h6>
											<div class="price">
												<h6>$150.00</h6>
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
								</div>

								<div class="col-lg-3 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p3.jpg" alt=""></img>
										<div class="product-details">
											<h6>addidas New Hammer sole
												for Sports person</h6>
											<div class="price">
												<h6>$150.00</h6>
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
								</div>

								<div class="col-lg-3 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p5.jpg" alt=""></img>
										<div class="product-details">
											<h6>addidas New Hammer sole
												for Sports person</h6>
											<div class="price">
												<h6>$150.00</h6>
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
								</div>

								<div class="col-lg-3 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
										<div class="product-details">
											<h6>addidas New Hammer sole
												for Sports person</h6>
											<div class="price">
												<h6>$150.00</h6>
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
								</div>

								<div class="col-lg-3 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p4.jpg" alt=""></img>
										<div class="product-details">
											<h6>addidas New Hammer sole
												for Sports person</h6>
											<div class="price">
												<h6>$150.00</h6>
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
								</div>

								<div class="col-lg-3 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
										<div class="product-details">
											<h6>addidas New Hammer sole
												for Sports person</h6>
											<div class="price">
												<h6>$150.00</h6>
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
								</div>

								<div class="col-lg-3 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p8.jpg" alt=""></img>
										<div class="product-details">
											<h6>addidas New Hammer sole
												for Sports person</h6>
											<div class="price">
												<h6>$150.00</h6>
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
								</div>
							</div>
						</div>
					</div></div><div class="owl-item active" ><div class="single-product-slider">
					</div>
				</div>
			</section>
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
											<h1 class="days">150</h1>
											<span class="smalltext">Days</span>
										</div>
										<div class="col clockinner clockinner1">
											<h1 class="hours">23</h1>
											<span class="smalltext">Hours</span>
										</div>
										<div class="col clockinner clockinner1">
											<h1 class="minutes">47</h1>
											<span class="smalltext">Mins</span>
										</div>
										<div class="col clockinner clockinner1">
											<h1 class="seconds">59</h1>
											<span class="smalltext">Secs</span>
										</div>
									</div>
								</div>
							</div>
							<a href="" class="primary-btn">Shop Now</a>
						</div>
						<div class="col-lg-6 no-padding exclusive-right">
							<div class="active-exclusive-product-slider">

								<div class="single-exclusive-slider">
									<img class="img-fluid" src="img/product/e-p1.png" alt="" />
									<div class="product-details">
										<div class="price">
											<h6>$150.00</h6>
											<h6 class="l-through">$210.00</h6>
										</div>
										<h4>addidas New Hammer sole
											for Sports person</h4>
										<div class="add-bag d-flex align-items-center justify-content-center">
											<a class="add-btn" href=""><span class="ti-bag"></span></a>
											<span class="add-text text-uppercase">Add to Bag</span>
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
						<a class="col single-img" href="">
							<img class="img-fluid d-block mx-auto" src="img/brand/1.png" alt="" />
						</a>
						<a class="col single-img" href="#">
							<img class="img-fluid d-block mx-auto" src="img/brand/2.png" alt="" />
						</a>
						<a class="col single-img" href="#">
							<img class="img-fluid d-block mx-auto" src="img/brand/3.png" alt="" />
						</a>
						<a class="col single-img" href="#">
							<img class="img-fluid d-block mx-auto" src="img/brand/4.png" alt="" />
						</a>
						<a class="col single-img" href="#">
							<img class="img-fluid d-block mx-auto" src="img/brand/5.png" alt="" />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
export default Home;