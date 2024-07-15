import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login, logout } from "../../../reducer/authSlice";
import toast from "react-hot-toast";
import lg from '../../../img/login.jpg';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const onChangeUserName = (e) => {
        setAccountName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/Get-user', {
                account_name: accountName,
                password: password
            });
            const { data } = res.data;
            dispatch(login(data));
            localStorage.setItem('token', data.token); // Assuming 'token' is part of your login response
            navigate("/home");
        } catch (error) {
            setMessage(error.response.data.message || 'Error occurred');
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        toast.success('Đăng xuất thành công!');
        navigate("/login");
    };

    return (
        <>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Đăng Nhập</h1>
                            <nav className="d-flex align-items-center">
                                <a href="/">Trang Chủ<span className="lnr lnr-arrow-right"></span></a>
                                <a href="/">Đăng Nhập</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src={lg} alt="" />
                                <div className="hover">
                                    <h4>Đăng Nhập Để Mua Hàng Tại Shop Chúng Tôi.</h4>
                                    <p>Đây là trang đăng nhập tại cửa hàng Karma Shop của Chúng Tôi.</p>
                                    <a className="primary-btn" href="/signup">Đăng Ký Ngay</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                {message && <p>{message}</p>}
                                <h3>Đăng Nhập</h3>
                                <form className="row login_form" onSubmit={handleLogin} noValidate>
                                    <div className="col-md-12 form-group">
                                        <input value={accountName} onChange={onChangeUserName} type="text" className="form-control" id="name" name="account_name" placeholder="Username" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input value={password} onChange={onChangePassword} type="password" className="form-control" id="password" name="password" placeholder="Password" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account">
                                            <input type="checkbox" id="f-option2" name="selector" />
                                            <label htmlFor="f-option2">Ghi nhớ đăng nhập</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" className="primary-btn">Đăng Nhập</button>
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
