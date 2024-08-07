import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../reducer/authSlice";
function Header({ soluong, setShowCart }) {
	const auth = useSelector(state=>state.auth);
	const dispatch= useDispatch();
	const navigate = useNavigate();
	const onShowCartHandler = () => {
		setShowCart(true);
	
    
		
	};
	function Logout (){
		dispatch(logout());
		navigate("/login");
		console.log(auth.user);

	}
	return (
		<>
			<div id="undefined-sticky-wrapper" class="sticky-wrapper" style={{ height: "80px" }}><header class="header_area sticky-header" >
				<div class="main_menu">
					<nav class="navbar navbar-expand-lg navbar-light main_box">
						<div class="container">

							<a class="navbar-brand logo_h" href="index.html"><img src="" alt=""></img> {auth.isAuthenticated?auth.user.account_name:""}    </a>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<a class="icon-bar" href="ShopCategory"><span class="icon-bar"></span></a>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
								<ul class="nav navbar-nav menu_nav ml-auto">
									<NavLink class="nav-item" className="nav-link active" to="/" > Trang chủ</NavLink>
									<li className="nav-item submenu dropdown">
  <NavLink to="/ShopCategory" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
    Cửa Hàng
  </NavLink>
  <ul className="dropdown-menu">
    <li className="nav-item">
      <NavLink to="/ShopCategory" className="nav-link">
        Chi Tiết Sản Phẩm
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/ProductCheckout" className="nav-link">
        Trang Thanh Toán
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/ShoppingCart" className="nav-link">
        Giỏ Hàng
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/Confirmation" className="nav-link">
        Thông Tin Đơn Hàng
      </NavLink>
    </li>
  </ul>
</li>

									<li class="nav-item submenu dropdown">
										<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tin Tức</a>
										<ul class="dropdown-menu" >
											<li class="nav-item"><NavLink to="/Blog " className="nav-link active">Tin Tức</NavLink></li>
											<li class="nav-item"><NavLink to="/BlogDetail " className="nav-link active">Chi Tiết Tin Tức</NavLink></li>
										</ul>
									</li>

									<li class="nav-item"><NavLink to="/Contact " className="nav-link active">Liên Hệ</NavLink></li>
								</ul>
								<ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
                <NavLink to="/ShoppingCart" className="cart">
                    <span className="ti-bag" ></span>
                    <span className="soluong">
                       
                    </span>
                </NavLink>
            </li>
			<li className="nav-item">
    <NavLink to="/wishlistCart" className="search">
        <span className="lnr lnr-magnifier" id="search"></span>
    </NavLink>
</li>

            <li className="nav-item">
                <NavLink to="/Login" className="cart">
                    <span className="ti-bag"></span>
                </NavLink>
            </li>

			
            <li className="nav-item"  onClick={Logout}>
                <NavLink  className="logout">
                    <span className="ti-bag"  ></span>
                </NavLink>
            </li>
        </ul>
							</div>
						</div>
					</nav>
				</div>
				<div class="search_input" id="search_input_box" style={{ display: "none" }}>
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