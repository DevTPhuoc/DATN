import { NavLink } from "react-router-dom";

function ShopCategory() {
	
	return (
		<>
			<section class="banner-area organic-breadcrumb">
				<div class="container">
					<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
						<div class="col-first">
							<h1>Shop Category page</h1>
							<nav class="d-flex align-items-center">
								<a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
								<a href="#">Shop<span class="lnr lnr-arrow-right"></span></a>
								<a href="category.html">Fashon Category</a>
							</nav>
						</div>
					</div>
				</div>
			</section>


			<div class="container">
				<div class="row">
					<div class="col-xl-3 col-lg-4 col-md-5">
						<div class="sidebar-categories">
							<div class="head">Browse Categories</div>
							<ul class="main-categories">

							</ul>
						</div>
						<div class="sidebar-filter mt-50">
							<div class="top-filter-head">Product Filters</div>
							<div class="common-filter">
								<div class="head">Brands</div>
								<form action="#">
									<ul>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="apple" name="brand" /><label for="apple">Apple<span>(29)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="asus" name="brand" /><label for="asus">Asus<span>(29)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="gionee" name="brand" /><label for="gionee">Gionee<span>(19)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="micromax" name="brand" /><label for="micromax">Micromax<span>(19)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="samsung" name="brand" /><label for="samsung">Samsung<span>(19)</span></label></li>
									</ul>
								</form>
							</div>
							<div class="common-filter">
								<div class="head">Color</div>
								<form action="#">
									<ul>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="black" name="color" /><label for="black">Black<span>(29)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="balckleather" name="color" /><label for="balckleather">Black
											Leather<span>(29)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="blackred" name="color" /><label for="blackred">Black
											with red<span>(19)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="gold" name="color" /><label for="gold">Gold<span>(19)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="spacegrey" name="color" /><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
									</ul>
								</form>
							</div>
							<div class="common-filter">
								
								<div class="head">Price</div>
								<div class="price-range-area">
									<div id="price-range" class="noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-origin" style={{ left: '10%' }}><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="50.0" aria-valuenow="10.0" aria-valuetext="500.00" style={{ zIndex: 5 }}></div></div><div class="noUi-connect" style={{ left: '10%', right: '50%' }}></div><div class="noUi-origin" style={{ left: '50%' }}><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="10.0" aria-valuemax="100.0" aria-valuenow="50.0" aria-valuetext="4000.00" style={{ zIndex: 6 }}></div></div></div></div>
									<div class="value-wrapper d-flex">
										<div class="price">Price:</div>
										<span>$</span>
										<div id="lower-value">500.00</div>
										<div class="to">to</div>
										<span>$</span>
										<div id="upper-value">4000.00</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-lg-8 col-md-7">
						<div class="filter-bar d-flex flex-wrap align-items-center">
							<div class="sorting">
								<select style={{ display: 'none' }}>
									<option value="1">Default sorting</option>
									<option value="1">Default sorting</option>
									<option value="1">Default sorting</option>
								</select><div class="nice-select" tabindex="0"><span class="current">Default sorting</span><ul class="list"><li data-value="1" class="option selected">Default sorting</li><li data-value="1" class="option">Default sorting</li><li data-value="1" class="option">Default sorting</li></ul></div>
							</div>

						</div>

						<section class="lattest-product-area pb-40 category-list">
							<div class="row">
								<div class="col-lg-4 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p1.jpg" alt="" />
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
								<div class="col-lg-4 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p2.jpg" alt="" />
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
								<div class="col-lg-4 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p3.jpg" alt="" />
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
								<div class="col-lg-4 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p4.jpg" alt="" />
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
								<div class="col-lg-4 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p5.jpg" alt="" />
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
								<div class="col-lg-4 col-md-6">
									<div class="single-product">
										<img class="img-fluid" src="img/product/p6.jpg" alt="" />
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
						</section>

						<div class="filter-bar d-flex flex-wrap align-items-center">
							<div class="sorting mr-auto">
								<select style={{ display: 'none' }}>
									<option value="1">Show 12</option>
									<option value="1">Show 12</option>
									<option value="1">Show 12</option>
								</select><div class="nice-select" tabindex="0"><span class="current">Show 12</span><ul class="list"><li data-value="1" class="option selected">Show 12</li><li data-value="1" class="option">Show 12</li><li data-value="1" class="option">Show 12</li></ul></div>
							</div>
							<div class="pagination">
								<a href="#" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
								<a href="#" class="active">1</a>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#" class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
								<a href="#">6</a>
								<a href="#" class="next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>


			<section class="related-product-area section_gap">
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
export default ShopCategory;