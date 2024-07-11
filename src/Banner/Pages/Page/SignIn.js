import React, { useState } from 'react';

import { useParams, useSearchParams } from "react-router-dom";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'
import lg from '../../../img/login.jpg';


function Register(){
    const navigate = useNavigate()
	const [accountName,setAccountName] = useState('')
	const [password,setPassword] = useState('')
	const [email,setEmail] = useState('')
	const [fullname,setFullname] = useState('')
	const [phone,setPhone] = useState('')
	const [address,setAdress] = useState('')


	const onChangeUserName = (e) => {
		setAccountName(e.target.value);
	}
	const onChangePassword = (e) => {
		setPassword(e.target.value);
		
		}
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
			
			}
	const onChangeFullname = (e) => {
		setFullname(e.target.value);
				
			}
	const onChangePhone = (e) => {
		setPhone(e.target.value);
				
				}
	const onChangeAdress = (e) => {
		setAdress(e.target.value);
					
	}
    const handleRegister = async(e) => {
		e.preventDefault();
     if(!accountName||!password ) {

      return toast.error('Please enter full fill')
     }
 
    
      const res= await axios.post(`http://127.0.0.1:8000/api/register`,{
       
      
		account_name : accountName,password : password  , email:email,fullname:fullname,phone:phone,address:address
		
		
    } );
	navigate("/Login")

    const {data}= await res;
 
    if(data.message==='Register successful'  )
    {
    toast.success('Register successful')
    setAccountName('');
    setPassword('');

    }
    else
    {
      toast.error('bi sai r ma')
    }
    };
    return (
        <>
        <section class="banner-area organic-breadcrumb">
		<div class="container">
			<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div class="col-first">
					<h1>Đăng Nhập/Đăng Ký</h1>
					<nav class="d-flex align-items-center">
						<a href="index.html">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
						<a href="category.html">Đăng Nhập/Đăng Ký</a>
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
						<img class="img-fluid" src={lg} alt=""/>
                      
						<div class="hover">
							<h4>Đăng Ký Để Mua Hàng Tại Shop Chúng Tôi.</h4>
							<p>Đây là trang đăng ký tại cửa hàng Karma Shop của Chúng Tôi.</p>
							<a class="primary-btn" >Xin Chào Bạn</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Đăng Ký</h3>
						<form class="row login_form" onSubmit={handleRegister} id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<input  type="accountName"  value={accountName} onChange={onChangeUserName}  class="form-control" id="accountName" name="accountName" placeholder="accountName" />
							</div>
							<div class="col-md-12 form-group">
								<input   value={password} onChange={onChangePassword} type="password" class="form-control" id="password" name="password" placeholder="Password" />
							</div>
							<div class="col-md-12 form-group">
                      <input value={email} onChange={onChangeEmail} type="email" id="email" name="email"  class="form-control"   placeholder="email"/>
                       </div> 

                      <div class="col-md-12 form-group">
       						 <input value={fullname} onChange={onChangeFullname} type="text" id="fullname" name="fullname"     class="form-control"  placeholder="fullname"/>
                                    </div>
									<div class="col-md-12 form-group">
                      
                             <input value={phone} onChange={onChangePhone}  type="phone" id="phone" name="phone"  class="form-control"  placeholder="phone"/>
                           </div >
						   <div class="col-md-12 form-group">
                      <input value={address} onChange={onChangeAdress} id="address" name="address" rows="4"  class="form-control"  placeholder="address"></input>
                    </div>
   

							
							<div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" name="selector"/>
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn">Đăng Ký</button>
								
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
export default Register;