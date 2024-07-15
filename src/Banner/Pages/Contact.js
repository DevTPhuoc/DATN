import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
    // useEffect(() => {
    //     function initMap() {
    //         var mapBox = document.getElementById('mapBox');
    //         var lat = parseFloat(mapBox.dataset.lat);
    //         var lon = parseFloat(mapBox.dataset.lon);
    //         var zoom = parseInt(mapBox.dataset.zoom);
    //         var info = mapBox.dataset.info;
    //         var mLat = parseFloat(mapBox.dataset.mlat);
    //         var mLon = parseFloat(mapBox.dataset.mlon);

    //         var map = new google.maps.Map(mapBox, {
    //             center: { lat: lat, lng: lon },
    //             zoom: zoom
    //         });

    //         var marker = new google.maps.Marker({
    //             position: { lat: mLat, lng: mLon },
    //             map: map
    //         });

    //         var infowindow = new google.maps.InfoWindow({
    //             content: info
    //         });

    //         marker.addListener('click', function () {
    //             infowindow.open(map, marker);
    //         });
    //     }

    //     if (window.google) {
    //         initMap();
    //     } else {
    //         const script = document.createElement('script');
    //         script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    //         script.async = true;
    //         script.defer = true;
    //         script.onload = initMap;
    //         document.head.appendChild(script);
    //     }
    // }, []);

    return (
        <>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Liên Hệ Chúng Tôi</h1>
                            <nav className="d-flex align-items-center">
                                <NavLink to="/">Trang Chủ<span className="lnr lnr-arrow-right"></span></NavLink>
                                <NavLink to="/contact">Liên Hệ</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact_area section_gap_bottom">
                <div className="container">
                    <div id="mapBox" className="mapBox" data-lat="10.799600" data-lon="106.652700" data-zoom="13" data-info="65 Huỳnh Thúc Kháng, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh"
                        data-mlat="10.799600" data-mlon="106.652700">
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info">
                                <div className="info_item">
                                    <i className="lnr lnr-home"></i>
                                    <h6>Thành Phố Hồ Chí Minh</h6>
                                    <p>65 Huỳnh Thúc Kháng, Phường Bến Nghé, Quận 1</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-phone-handset"></i>
                                    <h6><a href="#">0374829452</a></h6>
                                    <p>8 giờ sáng đến 7 giờ tối</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-envelope"></i>
                                    <h6><a href="#">karmashop@gmail.com</a></h6>
                                    <p>Gửi cho chúng tôi thắc mắc bất cứ lúc nào</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Tên của bạn" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter your name'" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email của bạn" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email address'" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Nội Dung" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Subject'" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" id="message" rows="1" placeholder="Lời nhắn" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Message'"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <button type="submit" value="submit" className="primary-btn">Gửi thắc mắc</button>
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
