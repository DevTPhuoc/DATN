import { NavLink } from "react-router-dom";
import lg from '../../../img/login.jpg';
import axios from 'axios';
function Login() {
	
	return (
		<>
			<section class="banner-area organic-breadcrumb">
				<div class="container">
					<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
						<div class="col-first">
							<h1>Đăng Nhập</h1>
							<nav class="d-flex align-items-center">
								<a href="">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
								<a href="">Đăng Nhập</a>
							</nav>
						</div>
					</div>
				</div>
			</section>

			<section class="login_box_area section_gap">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="login_box_img">
								<img class="img-fluid" src={lg} alt="" />
								<div class="hover">
									<h4>Đăng Nhập Để Mua Hàng Tại Shop Chúng Tôi.</h4>
									<p>Đây là trang đăng nhập tại cửa hàng Karma Shop của Chúng Tôi.</p>
									<a class="primary-btn" href="SignIn">Đăng Ký Ngay</a>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="login_form_inner">
								<h3>Đăng Nhập</h3>
								<form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div class="col-md-12 form-group">
										<input type="text" class="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
									</div>
									<div class="col-md-12 form-group">
										<input type="text" class="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
										
									</div>
									<div class="col-md-12 form-group">
										<div class="creat_account">
											<input type="checkbox" id="f-option2" name="selector" />
											<label for="f-option2">Ghi nhớ đăng nhập </label>
										</div>
									</div>
									<div class="col-md-12 form-group">
										<button type="submit" value="submit" class="primary-btn">Đăng Nhập</button>
										
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Login;