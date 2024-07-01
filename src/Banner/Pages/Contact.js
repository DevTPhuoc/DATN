import { NavLink } from "react-router-dom";
function Contact(){
    return (
<>
<section class="banner-area organic-breadcrumb">
		<div class="container">
			<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div class="col-first">
					<h1>Liên Hệ Chúng Tôi</h1>
					<nav class="d-flex align-items-center">
						<a href="index.html">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
						<a href="category.html">Liên Hệ</a>
					</nav>
				</div>
			</div>
		</div>
	</section>


    <section class="contact_area section_gap_bottom">
		<div class="container">
		<div id="mapBox" class="mapBox" data-lat="10.799600" data-lon="106.652700" data-zoom="13" data-info="84 Nguyễn Bá Tuyển, Phường 12, Quận Tân Bình, TP Hồ Chí Minh"
			 data-mlat="10.799600" data-mlon="106.652700">
			</div>
			<div class="row">
				<div class="col-lg-3">
					<div class="contact_info">
						<div class="info_item">
							<i class="lnr lnr-home"></i>
							<h6>Thành Phố Hồ Chí Minh</h6>
							<p>65 Huỳnh Thúc Kháng, Quận 1</p>
						</div>
						<div class="info_item">
							<i class="lnr lnr-phone-handset"></i>
							<h6><a href="#">0374829452</a></h6>
							<p>8 giờ sáng đến 7 giờ tối</p>
						</div>
						<div class="info_item">
							<i class="lnr lnr-envelope"></i>
							<h6><a href="#">karmashop@gmail.com</a></h6>
							<p>Gửi cho chúng tôi thắc mắc bất cứ lúc nào</p>
						</div>
					</div>
				</div>
				<div class="col-lg-9">
					<form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
						<div class="col-md-6">
							<div class="form-group">
								<input type="text" class="form-control" id="name" name="name" placeholder="Tên của bạn" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'"/>
							</div>
							<div class="form-group">
								<input type="email" class="form-control" id="email" name="email" placeholder="Email của bạn" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'"/>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" id="subject" name="subject" placeholder="Nội Dung" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'"/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<textarea class="form-control" name="message" id="message" rows="1" placeholder="Lời nhắn" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"></textarea>
							</div>
						</div>
						<div class="col-md-12 text-right">
							<button type="submit" value="submit" class="primary-btn">Gửi thắc mắc</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
    

</>

    );
}
export default Contact;