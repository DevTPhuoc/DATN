import { NavLink } from "react-router-dom";
function ProductDetail() {
	return (
		<>
			<section class="banner-area organic-breadcrumb">
				<div class="container">
					<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
						<div class="col-first">
							<h1>Chi tiết sản phẩm</h1>
							<nav class="d-flex align-items-center">
								<a href="index.html">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
								<a href="#">Cửa Hàng<span class="lnr lnr-arrow-right"></span></a>
								<a href="single-product.html">Chi tiết sản phẩm</a>
							</nav>
						</div>
					</div>
				</div>
			</section>


			<div class="product_image_area">
		<div class="container">
			<div class="row s_product_inner">
				<div class="col-lg-6">
					<div class="s_Product_carousel">
						<div class="single-prd-item">
							<img class="img-fluid" src="img/category/s-p1.jpg" alt=""/>
						</div>

					</div>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
						<h3>Giày Vàng</h3>
						<h2>2.500.000 VND</h2>	
						<ul class="list">
							<li><a class="active" href="#"><span>Category</span> : Household</a></li>
							<li><a href="#"><span>Availibility</span> : In Stock</a></li>
							
						</ul>
						<p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
							something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.</p>
						<div class="product_count">
							<label for="qty">Số Lượng:</label>
							<input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty"/>
							<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
							 class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
							<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
							 class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
						</div>
						<div class="card_area d-flex align-items-center">
							<a class="primary-btn" href="#">Thêm Vào Giỏ Hàng</a>
							<a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

			<section class="product_description_area">
				<div class="container">
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item">
							<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
						
						
						
						<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
							<div class="row">
								<div class="col-lg-6">
									<div class="comment_list">
										<div class="review_item">
											<div class="media">
												<div class="d-flex">
													<img src="img/product/review-1.png" alt="" />
												</div>
												<div class="media-body">
													<h4>Blake Ruiz</h4>
													<h5>12th Feb, 2018 at 05:56 pm</h5>
													<a class="reply_btn" href="#">Reply</a>
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
												commodo</p>
										</div>
										<div class="review_item reply">
											<div class="media">
												<div class="d-flex">
													<img src="img/product/review-2.png" alt="" />
												</div>
												<div class="media-body">
													<h4>Blake Ruiz</h4>
													<h5>12th Feb, 2018 at 05:56 pm</h5>
													<a class="reply_btn" href="#">Reply</a>
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
												commodo</p>
										</div>
										<div class="review_item">
											<div class="media">
												<div class="d-flex">
													<img src="img/product/review-3.png" alt="" />
												</div>
												<div class="media-body">
													<h4>Blake Ruiz</h4>
													<h5>12th Feb, 2018 at 05:56 pm</h5>
													<a class="reply_btn" href="#">Reply</a>
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
												commodo</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="review_box">
										<h4>Post a comment</h4>
										<form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" id="name" name="name" placeholder="Your Full name" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="email" class="form-control" id="email" name="email" placeholder="Email Address" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" id="number" name="number" placeholder="Phone Number" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea class="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12 text-right">
												<button type="submit" value="submit" class="btn primary-btn">Submit Now</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
							<div class="row">
								<div class="col-lg-6">
									<div class="row total_rate">
										<div class="col-6">
											<div class="box_total">
												<h5>Tổng Đánh Giá</h5>
												<h4>4.0</h4>
												<h6>(03 Reviews)</h6>
											</div>
										</div>
										<div class="col-6">
											<div class="rating_list">
												<h3>Based on 3 Reviews</h3>
												<ul class="list">
													<li><a href="#">5 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
													<li><a href="#">4 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
													<li><a href="#">3 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
													<li><a href="#">2 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
													<li><a href="#">1 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="review_list">
										<div class="review_item">
											<div class="media">
												<div class="d-flex">
													<img src="img/product/review-2.png" alt="" />
												</div>
												<div class="media-body">
													<h4>Blake Ruiz</h4>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
												commodo</p>
										</div>
										<div class="review_item">
											<div class="media">
												<div class="d-flex">
													<img src="img/product/review-3.png" alt="" />
												</div>
												<div class="media-body">
													<h4>Blake Ruiz</h4>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
												commodo</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="review_box">
										<h4>Add a Review</h4>
										<p>Your Rating:</p>
										<ul class="list">
											<li><a href="#"><i class="fa fa-star"></i></a></li>
											<li><a href="#"><i class="fa fa-star"></i></a></li>
											<li><a href="#"><i class="fa fa-star"></i></a></li>
											<li><a href="#"><i class="fa fa-star"></i></a></li>
											<li><a href="#"><i class="fa fa-star"></i></a></li>
										</ul>
										<p>Outstanding</p>
										<form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" id="name" name="name" placeholder="Your Full name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full name'" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="email" class="form-control" id="email" name="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" id="number" name="number" placeholder="Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea class="form-control" name="message" id="message" rows="1" placeholder="Review" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Review'"></textarea>
												</div>
											</div>
											<div class="col-md-12 text-right">
												<button type="submit" value="submit" class="primary-btn">Submit Now</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="related-product-area section_gap_bottom">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-6 text-center">
							<div class="section-title">
								<h1>Deals of the Week</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
									magna aliqua.</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-9">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r1.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r2.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r3.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r5.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r6.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r7.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r9.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r10.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r11.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="ctg-right">
								<a href="#" target="_blank">
									<img class="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
export default ProductDetail;