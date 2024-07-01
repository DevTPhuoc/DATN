import { NavLink } from "react-router-dom";
function ProductCheckout() {
    return (<>
        <section class="banner-area organic-breadcrumb">
            <div class="container">
                <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div class="col-first">
                        <h1>Checkout</h1>
                        <nav class="d-flex align-items-center">
                            <a href="index.html">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
                            <a href="single-product.html">Checkout</a>
                        </nav>
                    </div>
                </div>
            </div>
        </section>


        <section class="checkout_area section_gap">
            <div class="container">
               
                <div class="billing_details">
                    <div class="row">
                        <div class="col-lg-8">
                            <h3>Chi Tiết Thanh Toán</h3>
                            <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                                <div class="col-md-6 form-group p_star">
                                    <input type="text" class="form-control" id="first" name="name" />
                                    <span class="placeholder" data-placeholder="Họ"></span>
                                </div>
                                <div class="col-md-6 form-group p_star">
                                    <input type="text" class="form-control" id="last" name="name" />
                                    <span class="placeholder" data-placeholder="Tên"></span>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" class="form-control" id="company" name="company" placeholder="Tên Đầy Đủ" />
                                </div>
                                <div class="col-md-6 form-group p_star">
                                    <input type="text" class="form-control" id="number" name="number" />
                                    <span class="placeholder" data-placeholder="Số Điện Thoại"></span>
                                </div>
                                <div class="col-md-6 form-group p_star">
                                    <input type="text" class="form-control" id="email" name="compemailany" />
                                    <span class="placeholder" data-placeholder="Email"></span>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <select class="country_select" style={{ display: 'none' }}>
                                        <option value="1">Country</option>
                                        <option value="2">Country</option>
                                        <option value="4">Country</option>
                                    </select><div class="nice-select country_select" tabindex="0"><span class="current">Thành Phố</span><ul class="list"><li data-value="1" class="option selected">Country</li><li data-value="2" class="option">Country</li><li data-value="4" class="option">Country</li></ul></div>
                                </div>
                               
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="add2" name="add2" />
                                    <span class="placeholder" data-placeholder="Huyện / Thị Xã"></span>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="city" name="city" />
                                    <span class="placeholder" data-placeholder="Đường / Số nhà"></span>
                                </div>
                               
                               
                               
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="order_box">
                                <h2>Đơn Hàng Của Bạn</h2>
                                <ul class="list">
                                    <li><a href="#">Sản Phẩm <span>Tổng Cộng</span></a></li>
                                    <li><a href="#">Fresh Blackberry <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                    <li><a href="#">Fresh Tomatoes <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                    <li><a href="#">Fresh Brocoli <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                </ul>
                                <ul class="list list_2">
                                    <li><a href="#">Subtotal <span>$2160.00</span></a></li>
                                    <li><a href="#">Shipping <span>Flat rate: $50.00</span></a></li>
                                    <li><a href="#">Tổng Cộng <span>$2210.00</span></a></li>
                                </ul>
                                <div class="payment_item">
                                    <div class="radion_btn">
                                        <input type="radio" id="f-option5" name="selector" />
                                        <label for="f-option5">Phương Thức Thanh Toán</label>
                                        <div class="check"></div>
                                    </div>
                                    <p>Ngân Hàng.</p>
                                </div>
                                <div class="payment_item active">
                                    <div class="radion_btn">
                                        <input type="radio" id="f-option6" name="selector" />
                                        <label for="f-option6">Paypal </label>
                                        <img src="img/product/card.jpg" alt="" />
                                        <div class="check"></div>
                                    </div>
                                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
                                        account.</p>
                                </div>
                                <div class="creat_account">
                                    <input type="checkbox" id="f-option4" name="selector" />
                                    <label for="f-option4">Tôi đã dọc và chấp hành </label>
                                    <a href="#">Điều khoản và điều kiện</a>
                                </div>
                                <a class="primary-btn" href="Confirmation">Đồng Ý Thanh Toán</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>);

}
export default ProductCheckout;