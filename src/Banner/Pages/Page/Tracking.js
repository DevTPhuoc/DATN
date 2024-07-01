import { NavLink } from "react-router-dom";
function Tracking(){
return(
    <>
    <section class="banner-area organic-breadcrumb">
        <div class="container">
            <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div class="col-first">
                    <h1>Theo Dõi Đơn Hàng</h1>
                    <nav class="d-flex align-items-center">
                        <a href="index.html">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
                        <a href="category.html">Theo Dõi Đơn Hàng</a>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <section class="tracking_box_area section_gap">
        <div class="container">
            <div class="tracking_box_inner">
                <p>Để theo dõi đơn hàng của bạn, vui lòng nhập Mã Đơn Hàng của bạn vào ô bên dưới và nhấn nút "Theo dõi".
                     Điều này đã được trao cho bạn trên biên nhận và trong email xác nhận mà lẽ ra bạn phải nhận được.</p>
                <form class="row tracking_form" action="#" method="post" novalidate="novalidate">
                    <div class="col-md-12 form-group">
                        <input type="text" class="form-control" id="order" name="order" placeholder="Nhập mã đơn hàng" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Order ID'"/>
                    </div>
                    
                    <div class="col-md-12 form-group">
                        <button type="submit" value="submit" class="primary-btn">Theo Dõi</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
);

}
export default Tracking;