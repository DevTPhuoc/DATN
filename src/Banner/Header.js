import { NavLink } from "react-router-dom";

function Header(){
 return (
<>
<div id="undefined-sticky-wrapper" class="sticky-wrapper" style={{height: "80px"}}><header class="header_area sticky-header" >
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light main_box">
				<div class="container">
				
					<a class="navbar-brand logo_h" href="index.html"><img src="../img/logo.png" alt=""></img></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
			
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav ml-auto">
							<li class="nav-item active"><NavLink to="/home" className="nav-link active"> Home</NavLink></li>
							<li class="nav-item submenu dropdown">
								<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
								<ul class="dropdown-menu">
									<li class="nav-item"><NavLink to="/ShopCategory "  className="nav-link active">Shop Category</NavLink></li>
									<li class="nav-item"><NavLink to="/ProductDetail "  className="nav-link active">Product Detail</NavLink></li>
									<li class="nav-item"><NavLink to="/ProductCheckout "  className="nav-link active">Product Checkout</NavLink></li>
									<li class="nav-item"><NavLink to="/ShoppingCart "  className="nav-link active">Shopping Cart</NavLink></li>
									<li class="nav-item"><NavLink to="/Confirmation "  className="nav-link active">Confirmation</NavLink></li>
								</ul>
							</li>
							<li class="nav-item submenu dropdown">
								<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
								<ul class="dropdown-menu" >
									<li class="nav-item"><NavLink to="/Blog "  className="nav-link active">Blog</NavLink></li>
									<li class="nav-item"><NavLink to="/BlogDetail "  className="nav-link active">Blog Detail</NavLink></li>
								</ul>
							</li>
							<li class="nav-item submenu dropdown">
								<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
								<ul class="dropdown-menu" >
									<li class="nav-item"><NavLink to="/Login "  className="nav-link active">Login</NavLink></li>
									<li class="nav-item"><NavLink to="/Tracking "  className="nav-link active">Tracking</NavLink></li>
									
								</ul>
							</li>
							<li class="nav-item"><NavLink to="/Contact "  className="nav-link active">Contact</NavLink></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="nav-item"><a href="#" class="cart"><span class="ti-bag"></span></a></li>
							<li class="nav-item">
								<button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div class="search_input" id="search_input_box" style={{display: "none"}}>
			<div class="container">
				<form class="d-flex justify-content-between">
					<input type="text" class="form-control" id="search_input" placeholder="Search Here"></input>
					<button type="submit" class="btn"></button>
					<span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
				</form>
			</div>
		</div>
	</header></div>
	<script src="./js/vendor/bootstrap.min.js"></script>
	<script src="./js/jquery.ajaxchimp.min.js"></script>
</>
	
 );
}
export default Header;