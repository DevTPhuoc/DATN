import { NavLink } from "react-router-dom";
import lg from '../../../img/login.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../reducer/authSlice";
import { logout } from "../../../reducer/authSlice";
import toast from "react-hot-toast";




function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [accountName,setAccountName] = useState('')
	const [password,setPassword] = useState('')

	const [message, setMessage] = useState('');
	console.log(message)

	const onChangeUserName = (e) => {
setAccountName(e.target.value);


}
const onChangePassword = (e) => {
	setPassword(e.target.value);
	
	
	}
async function   handleLogin(e) {	
	e.preventDefault();

	try {
	const res= await axios.post('http://127.0.0.1:8000/api/Get-user',{account_name : accountName,password : password}) 
    const {data}=res.data;
	console.log(data);
	dispatch(login(data));
	navigate("/home"); 


	} catch (e) {setMessage(e.response.data.message || 'Error occurred')}
      
      

}
const handleLogout = () => {
    // Xóa token hoặc thông tin xác thực khỏi local storage
    localStorage.removeItem('token');

    // Dispatch action để xóa thông tin người dùng khỏi Redux
    dispatch(logout());

    // Hiển thị thông báo
    toast.success('Đăng xuất thành công!');

    // Chuyển hướng người dùng đến trang đăng nhập
  };

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
								{message&& <p> {
									message
								}
									
									</p>}
								<h3>Đăng Nhập</h3>
								<form class="row login_form" onSubmit={handleLogin} action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div class="col-md-12 form-group">
										<input value={accountName} onChange={onChangeUserName} type="text" class="form-control" id="name" name="account_name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
									</div>
									<div class="col-md-12 form-group">
										<input  value={password} onChange={onChangePassword} type="password" class="form-control" id="name" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
										
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