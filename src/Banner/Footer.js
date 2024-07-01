import { NavLink } from "react-router-dom";
import i1 from '../img/i1.jpg';
function Footer() {
	return (
		<>
			<div class="tong">
				<div class="container">
					<div class="row">
						<div class="col-lg-3  col-md-6 col-sm-6">
							<div class="single-footer-widget">
								<h6>About Us</h6>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
									magna aliqua.
								</p>
							</div>
						</div>
						<div class="col-lg-4  col-md-6 col-sm-6">
							<div class="single-footer-widget">
								<h5>Karma Shop</h5>
								<p>Hãy đến với fampage của chúng tôi.</p>
								<div class="" id="mc_embed_signup">
									<form target="_blank" novalidate="true" action="https://www.youtube.com/watch?v=gqcHOOK6py0" method="get" class="form-inline">
										<div class="d-flex flex-row">
											<input class="form-control" name="EMAIL" placeholder="Trịnh Văn Tuấn" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required="" type="email" />
											<button class="click-btn btn btn-default"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
											<div style={{ position: "absolute", left: "-5000px" }}>
												<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
											</div>
										</div>
										<div class="info"></div>
									</form>
								</div>
							</div>
						</div>
						<div class="col-lg-3  col-md-6 col-sm-6">
							<div class="single-footer-widget mail-chimp">
								<h6 class="mb-20">Instragram Feed</h6>
								<ul class="instafeed d-flex flex-wrap">
									<li><img src="img/i1.jpg" alt=""></img></li>
									<li><img src="img/i2.jpg" alt=""></img></li>
									<li><img src="img/i3.jpg" alt=""></img></li>
									<li><img src="img/i4.jpg" alt=""></img></li>
									<li><img src="img/i5.jpg" alt=""></img></li>
									<li><img src="img/i6.jpg" alt=""></img></li>
									<li><img src="img/i7.jpg" alt=""></img></li>
									<li><img src="img/i8.jpg" alt=""></img></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-2 col-md-6 col-sm-6">
							<div class="single-footer-widget">
								<h6>Follow Us</h6>
								<p>Let us be social</p>
								<div class="footer-social d-flex align-items-center">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-dribbble"></i></a>
									<a href="#"><i class="fa fa-behance"></i></a>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
		</>
	);
}
export default Footer;