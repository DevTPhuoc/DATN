import { NavLink } from "react-router-dom";


function Blog() {
    return (
        <>
            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Tin Tức</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Trang Chủ<span class="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Tin Tức</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>


            <section class="blog_categorie_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="categories_post">
                                <img src="img/blog/cat-post/cat-post-3.jpg" alt="post" />
                                <div class="categories_details">
                                    <div class="categories_text">
                                        <a href="blog-details.html">
                                            <h5>Đời Sống Xã Hội</h5>
                                        </a>
                                        <div class="border_line"></div>
                                        <p>Cùng nhau tận hướng cuộc sống xã hội</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="categories_post">
                                <img src="img/blog/cat-post/cat-post-2.jpg" alt="post" />
                                <div class="categories_details">
                                    <div class="categories_text">
                                        <a href="blog-details.html">
                                            <h5>Kinh Doanh</h5>
                                        </a>
                                        <div class="border_line"></div>
                                        <p>Hãy là một phần của kinh doanh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="categories_post">
                                <img src="img/blog/cat-post/cat-post-1.jpg" alt="post" />
                                <div class="categories_details">
                                    <div class="categories_text">
                                        <a href="blog-details.html">
                                            <h5>Đồ Ăn</h5>
                                        </a>
                                        <div class="border_line"></div>
                                        <p>Hãy để thức ăn được hoàn thành</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="blog_left_sidebar">
                                {/* <!-- Bài viết 1: Đời sống xã hội --> */}
                                <article class="row blog_item">
                                    <div class="col-md-3">
                                        <div class="blog_info text-right">
                                            <div class="post_tag">
                                                <a class="active" href="#">Kinh Doanh</a>
                                            </div>
                                            <ul class="blog_meta list">
                                                <li><a href="#">Vnexpress<i class="lnr lnr-user"></i></a></li>
                                                <li><a href="#">26/02/2023<i class="lnr lnr-calendar-full"></i></a></li>
                                                <li><a href="#">1.8M Lượt xem<i class="lnr lnr-eye"></i></a></li>
                                                <li><a href="#">06 Đánh giá<i class="lnr lnr-bubble"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="blog_post">
                                            <img src="img/blog/nike.jpg" alt="" />
                                            <div class="blog_details">

                                                <h2>Nike - hãng giày ra đời từ bài luận trong trường đại học</h2>

                                                <p>Phil Knight nảy ra ý tưởng về Nike nhờ tham gia đội tuyển điền kinh của trường và trải nghiệm trong các lớp học về kinh doanh.</p>
                                                <a href="https://vnexpress.net/nike-hang-giay-ra-doi-tu-bai-luan-trong-truong-dai-hoc-4574888.html" class="white_bg_btn">Xem thêm</a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                {/* <!-- Bài viết 2: Chính trị --> */}
                                <article class="row blog_item">
                                    <div class="col-md-3">
                                        <div class="blog_info text-right">
                                            <div class="post_tag">
                                                <a class="active" href="#">Đồ Ăn</a>
                                            </div>
                                            <ul class="blog_meta list">
                                                <li><a href="#">Tạp chí ẩm thực<i class="lnr lnr-user"></i></a></li>
                                                <li><a href="#">15/05/2023<i class="lnr lnr-calendar-full"></i></a></li>
                                                <li><a href="#">1.5M Lượt xem<i class="lnr lnr-eye"></i></a></li>
                                                <li><a href="#">20 Đánh giá<i class="lnr lnr-bubble"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="blog_post">
                                            <img src="img/blog/bo.jpg.webp" alt="" />
                                            <div class="blog_details">

                                                <h2>Bò Wagyu A5 Dát Vàng – Khám phá miếng bò “đắt nhất thế giới”</h2>

                                                <p>Theo tiêu chí đánh giá bò xứ Phù Tang, A5 là mức độ cao nhất cả về chất lượng và hương vị, có giá bán cao nhất. Thêm đó, được hòa quyện trong sốt nấm truffle – “vàng đen” của giới ẩm thực quý giá và đắt đỏ – món ngon này trở nên tròn vị, thơm nồng, thu hút mọi giác quan.</p>
                                                <a href="https://tapchiamthuc.net/bo-wagyu-a5-dat-vang-mieng-bo-dat-nhat-the-gioi/" class="white_bg_btn">Xem thêm</a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                {/* <!-- Bài viết 3: Đồ ăn --> */}
                                <article class="row blog_item">
                                    <div class="col-md-3">
                                        <div class="blog_info text-right">
                                            <div class="post_tag">
                                                <a class="active" href="#">Đồ ăn</a>
                                            </div>
                                            <ul class="blog_meta list">
                                                <li><a href="#">VinMec<i class="lnr lnr-user"></i></a></li>
                                                <li><a href="#">12/12/2022<i class="lnr lnr-calendar-full"></i></a></li>
                                                <li><a href="#">1.5M Lượt xem<i class="lnr lnr-eye"></i></a></li>
                                                <li><a href="#">40 Đánh giá<i class="lnr lnr-bubble"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="blog_post">
                                            <img src="img/blog/monan.jpg" alt="" />
                                            <div class="blog_details">

                                                <h2>Thức ăn: Chúng ta cần bao nhiêu mỗi ngày?</h2>

                                                <p>Thức ăn là nguồn cung cấp năng lượng và dinh dưỡng cần thiết cho cơ thể hoạt động và phát triển.
                                                    Nhưng mỗi ngày, chúng ta cần bao nhiêu thức ăn để đảm bảo sức khỏe?</p>
                                                <a href="https://www.vinmec.com/vi/tin-tuc/thong-tin-suc-khoe/dinh-duong/thuc-an-chung-ta-can-bao-nhieu-moi-ngay/" class="white_bg_btn">Xem thêm</a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                {/* <!-- Bài viết 4: Đời sống xã hội --> */}
                                <article class="row blog_item">
                                    <div class="col-md-3">
                                        <div class="blog_info text-right">
                                            <div class="post_tag">
                                                <a class="active" href="#">Đời sống xã hội</a>
                                            </div>
                                            <ul class="blog_meta list">
                                                <li><a href="#">Báo Thanh Niên<i class="lnr lnr-user"></i></a></li>
                                                <li><a href="#">01/02/2024<i class="lnr lnr-calendar-full"></i></a></li>
                                                <li><a href="#">2.3M Lượt xem<i class="lnr lnr-eye"></i></a></li>
                                                <li><a href="#">98 Đánh giá<i class="lnr lnr-bubble"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="blog_post">
                                            <img src="img/blog/thuckhuya.webp" alt="" />
                                            <div class="blog_details">

                                                <h2>Báo động về tình trạng giới trẻ thức khuya hiện nay</h2>

                                                <p>Hiện nay, tình trạng giới trẻ thức khuya đang trở thành một vấn đề báo động trong xã hội. Với sự phát triển mạnh mẽ của công nghệ và mạng xã hội,
                                                     thói quen sinh hoạt của nhiều bạn trẻ đã thay đổi đáng kể, dẫn đến nhiều hậu quả tiêu cực đối với sức khỏe và cuộc sống hàng ngày..</p>
                                                <a href="https://thanhnien.vn/bao-dong-ve-tinh-trang-nguoi-tre-thuc-khuya-185230507123437825.htm" class="white_bg_btn">Xem thêm</a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                {/* <!-- Bài viết 5: Đồ ăn --> */}
                                <article class="row blog_item">
                                    <div class="col-md-3">
                                        <div class="blog_info text-right">
                                            <div class="post_tag">
                                                <a class="active" href="#">Công Nghệ</a>
                                            </div>
                                            <ul class="blog_meta list">
                                                <li><a href="#">Samsung<i class="lnr lnr-user"></i></a></li>
                                                <li><a href="#">10/07/2024<i class="lnr lnr-calendar-full"></i></a></li>
                                                <li><a href="#">1.2M Lượt xem<i class="lnr lnr-eye"></i></a></li>
                                                <li><a href="#">06 Đánh giá<i class="lnr lnr-bubble"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="blog_post">
                                            <img src="img/blog/nhan.png" alt="" />
                                            <div class="blog_details">

                                                <h2>Trải nghiệm nhẫn thông minh Galaxy Ring</h2>

                                                <p>Tại sự kiện Galaxy Unpacked 2024 ngày 10/7 ở Paris, Samsung công bố bộ đôi điện thoại Galaxy Z Fold6, Z Flip6 và loạt thiết bị đeo.
                                                    Trong đó, Galaxy Ring trở thành tâm điểm, đánh dấu Samsung là hãng điện thoại đầu tiên gia nhập thị trường nhẫn thông minh.</p>
                                                <a href="https://vnexpress.net/trai-nghiem-nhan-thong-minh-galaxy-ring-4768651.html" class="white_bg_btn">Xem thêm</a>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                <nav class="blog-pagination justify-content-center d-flex">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a href="#" class="page-link" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <span class="lnr lnr-chevron-left"></span>
                                                </span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a href="#" class="page-link">01</a></li>
                                        <li class="page-item active"><a href="#" class="page-link">02</a></li>
                                        <li class="page-item"><a href="#" class="page-link">03</a></li>
                                        <li class="page-item"><a href="#" class="page-link">04</a></li>
                                        <li class="page-item"><a href="#" class="page-link">09</a></li>
                                        <li class="page-item">
                                            <a href="#" class="page-link" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <span class="lnr lnr-chevron-right"></span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog_right_sidebar">
                                <aside class="single_sidebar_widget search_widget">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search Posts" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'" />
                                        <span class="input-group-btn">
                                            <button class="btn btn-default" type="button"><i class="lnr lnr-magnifier"></i></button>
                                        </span>
                                    </div>
                                    <div class="br"></div>
                                </aside>
                                <aside class="single_sidebar_widget author_widget">
                                    <img class="author_img rounded-circle" src="img/blog/author.png" alt="" />
                                    <h4>Charlie Barber</h4>
                                    <p>Senior blog writer</p>
                                    <div class="social_icon">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-github"></i></a>
                                        <a href="#"><i class="fa fa-behance"></i></a>
                                    </div>
                                    <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you
                                        should have to spend money on boot camp when you can get. Boot camps have itssuppor
                                        ters andits detractors.</p>
                                    <div class="br"></div>
                                </aside>
                                <aside class="single_sidebar_widget popular_post_widget">
                                    <h3 class="widget_title">Popular Posts</h3>
                                    <div class="media post_item">
                                        <img src="img/blog/popular-post/post1.jpg" alt="post" />
                                        <div class="media-body">
                                            <a href="blog-details.html">
                                                <h3>Space The Final Frontier</h3>
                                            </a>
                                            <p>02 Hours ago</p>
                                        </div>
                                    </div>
                                    <div class="media post_item">
                                        <img src="img/blog/popular-post/post2.jpg" alt="post" />
                                        <div class="media-body">
                                            <a href="blog-details.html">
                                                <h3>The Amazing Hubble</h3>
                                            </a>
                                            <p>02 Hours ago</p>
                                        </div>
                                    </div>
                                    <div class="media post_item">
                                        <img src="img/blog/popular-post/post3.jpg" alt="post" />
                                        <div class="media-body">
                                            <a href="blog-details.html">
                                                <h3>Astronomy Or Astrology</h3>
                                            </a>
                                            <p>03 Hours ago</p>
                                        </div>
                                    </div>
                                    <div class="media post_item">
                                        <img src="img/blog/popular-post/post4.jpg" alt="post" />
                                        <div class="media-body">
                                            <a href="blog-details.html">
                                                <h3>Asteroids telescope</h3>
                                            </a>
                                            <p>01 Hours ago</p>
                                        </div>
                                    </div>
                                    <div class="br"></div>
                                </aside>
                                <aside class="single_sidebar_widget ads_widget">
                                    <a href="#"><img class="img-fluid" src="img/blog/add.jpg" alt="" /></a>
                                    <div class="br"></div>
                                </aside>
                                <aside class="single_sidebar_widget post_category_widget">
                                    <h4 class="widget_title">Post Catgories</h4>
                                    <ul class="list cat-list">
                                        <li>
                                            <a href="#" class="d-flex justify-content-between">
                                                <p>Technology</p>
                                                <p>37</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex justify-content-between">
                                                <p>Lifestyle</p>
                                                <p>24</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex justify-content-between">
                                                <p>Fashion</p>
                                                <p>59</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex justify-content-between">
                                                <p>Art</p>
                                                <p>29</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex justify-content-between">
                                                <p>Food</p>
                                                <p>15</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex justify-content-between">
                                                <p>Architecture</p>
                                                <p>09</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex justify-content-between">
                                                <p>Adventure</p>
                                                <p>44</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="br"></div>
                                </aside>
                                <aside class="single-sidebar-widget newsletter_widget">
                                    <h4 class="widget_title">Newsletter</h4>
                                    <p>
                                        Here, I focus on a range of items and features that we use in life without
                                        giving them a second thought.
                                    </p>
                                    <div class="form-group d-flex flex-row">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                                            </div>
                                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" />
                                        </div>
                                        <a href="#" class="bbtns">Subcribe</a>
                                    </div>
                                    <p class="text-bottom">You can unsubscribe at any time</p>
                                    <div class="br"></div>
                                </aside>
                                <aside class="single-sidebar-widget tag_cloud_widget">
                                    <h4 class="widget_title">Tag Clouds</h4>
                                    <ul class="list">
                                        <li><a href="#">Technology</a></li>
                                        <li><a href="#">Fashion</a></li>
                                        <li><a href="#">Architecture</a></li>
                                        <li><a href="#">Fashion</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Technology</a></li>
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Art</a></li>
                                        <li><a href="#">Adventure</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Lifestyle</a></li>
                                        <li><a href="#">Adventure</a></li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );

}

export default Blog;