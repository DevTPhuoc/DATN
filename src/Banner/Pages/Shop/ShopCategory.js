import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../../reducer/cartReducer";
import { products } from "../../../data/product";
import { useParams } from "react-router-dom";
import { BrowserRouter as  useHistory } from 'react-router-dom';

import ProductDetail from "./ProductDetails";


function ShopCategory() {
	const cartProducts = useSelector(state => state.cart.items);
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get('type');
	const { id } = useParams(); // Lấy id từ URL

    const  auth = useSelector(state=>state.auth);
    const [sanPham, setSanPham] = useState([]);
    const [loaiSP, setLoaiSP] = useState([]);
	const [product, setProduct] = useState([]);

    const dispatch = useDispatch();


		
    const addCart = async (products) => {

		if (!auth.isAuthenticated) {
            toast.error('Please login');
            return;
        }

        const dataToSend = {
            user_id: auth.user.id,
            quantity: 1,
            product_id: products.id,
            price: products.selling_price
        };
console.log(auth);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/Addcarts', dataToSend);
            const { data } = response.data;

            toast.success(`Added ${data.product_name} to cart`);
            // Nếu bạn muốn điều hướng tới trang giỏ hàng sau khi thêm sản phẩm thành công
            navigate('/ShoppingCart');
            
        } catch (error) {
            console.log(error.message);
            toast.error('Failed to add product to cart');
        }
    };










    
	const getTypeProducts = (type) => {
		searchParams.set('type', type);
		setSearchParams(searchParams);
	}


      

    useEffect(() => {
        const getAllProducts = async (type) => {
            try {
                let response;
                if (!type) {
                    response = await axios.get('http://127.0.0.1:8000/api/san-pham');
                } else {
                    response = await axios.get(`http://127.0.0.1:8000/api/san-pham-theo-loai/${type}`);

                }
                const { data } = response.data;
                setSanPham(data ? data : []);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
      const getDeTailproduct = async (type)=>
	  {
           try {
                const response= await axios.get(`http://127.0.0.1:8000/api/thong-tin-san-pham/${type}`);	
				const { data } = response.data;
                setProduct(data ? data : []);	
		   } catch (error) {
			
		   }
	  };
        const getTypeProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/loai-san-pham');
                const { data } = response.data;
                setLoaiSP(data ? data : []);
            } catch (error) {
                console.error("Error fetching product types:", error);
            }
        };

        getAllProducts(type);
        getTypeProducts();
		getDeTailproduct(type);
    }, [type]);

	const handleDetailProduct = () => {
        // Assuming you have an itemId to pass
        const itemId = products.id; // Replace this with the correct itemId if needed
        handleDetailProduct(itemId);
		console.log(itemId);
    };
	
	const dsSanPham = sanPham?.map(product =>
		
	
		<div className="col-lg-4 col-md-6">
    <div className="single-product">
        <img className="img-fluid" src={'http://127.0.0.1:8000/img/add/'+product.name_image} alt="" />
        <div className="product-details">
            <h6>{product.name}</h6>
            <div className="price">
                <h6>{/* Insert any additional price details here */}</h6>
                <h6>{product.selling_price}</h6>
            </div>
            <div className="prd-bottom">
                <div className="social-info" onClick={() => addCart(product)}>
                    <span className="ti-bag"></span>
                    <p className="hover-text">add to bag</p>
                </div>
                <a href="" className="social-info">
                    <span className="lnr lnr-heart"></span>
                    <p className="hover-text">Wishlist</p>
                </a>
                <a href="" className="social-info">
                    <span className="lnr lnr-sync"></span>
                    <p className="hover-text">compare</p>
                </a>
                <NavLink to={`/ProductDetail/${product.id}`} className="social-info">
                    <span className="lnr lnr-sync"></span>
                    <p className="hover-text">view more</p>
                </NavLink>
            </div>
        </div>
    </div>
</div>



		
)


const DSLoaiSP = loaiSP.map(productLoai =>
	<div class="card">
		<div onClick={()=>getTypeProducts(productLoai.id)} >
			{productLoai.name}
		</div>
	  
  
</div>
	 )


	return (
		<>
			<section class="banner-area organic-breadcrumb">
				<div class="container">
					<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
						<div class="col-first">
							<h1>Shop Category page</h1>
							<nav class="d-flex align-items-center">
								<a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
								<a href="#">Shop<span class="lnr lnr-arrow-right"></span></a>
								<a href="category.html">Fashon Category</a>
							</nav>
						</div>
					</div>
				</div>
			</section>


			<div class="container">
				<div class="row">
					<div class="col-xl-3 col-lg-4 col-md-5">
						<div class="sidebar-categories">
							<div class="head">Browse Categories</div>
							<ul class="main-categories">

							</ul>
						</div>
						<div class="sidebar-filter mt-50">
							<div class="top-filter-head">Product Filters</div>
							<div class="common-filter">
								<div class="head">Brands</div>
								<form action="#">
									<ul>
									{DSLoaiSP}
									</ul>
								</form>
							</div>
							<div class="common-filter">
								<div class="head">Color</div>
								<form action="#">
									<ul>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="black" name="color" /><label for="black">Black<span>(29)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="balckleather" name="color" /><label for="balckleather">Black
											Leather<span>(29)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="blackred" name="color" /><label for="blackred">Black
											with red<span>(19)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="gold" name="color" /><label for="gold">Gold<span>(19)</span></label></li>
										<li class="filter-list"><input class="pixel-radio" type="radio" id="spacegrey" name="color" /><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
									</ul>
								</form>
							</div>
							<div class="common-filter">
								
								<div class="head">Price</div>
								<div class="price-range-area">
									<div id="price-range" class="noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-origin" style={{ left: '10%' }}><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="50.0" aria-valuenow="10.0" aria-valuetext="500.00" style={{ zIndex: 5 }}></div></div><div class="noUi-connect" style={{ left: '10%', right: '50%' }}></div><div class="noUi-origin" style={{ left: '50%' }}><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="10.0" aria-valuemax="100.0" aria-valuenow="50.0" aria-valuetext="4000.00" style={{ zIndex: 6 }}></div></div></div></div>
									<div class="value-wrapper d-flex">
										<div class="price">Price:</div>
										<span>$</span>
										<div id="lower-value">500.00</div>
										<div class="to">to</div>
										<span>$</span>
										<div id="upper-value">4000.00</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-lg-8 col-md-7">
						<div class="filter-bar d-flex flex-wrap align-items-center">
							<div class="sorting">
								<select style={{ display: 'none' }}>
									<option value="1">Default sorting</option>
									<option value="1">Default sorting</option>
									<option value="1">Default sorting</option>
								</select><div class="nice-select" tabindex="0"><span class="current">Default sorting</span><ul class="list"><li data-value="1" class="option selected">Default sorting</li><li data-value="1" class="option">Default sorting</li><li data-value="1" class="option">Default sorting</li></ul></div>
							</div>

						</div>

						<section class="lattest-product-area pb-40 category-list">
							<div class="row">
								
							{dsSanPham}
							</div>
						</section>

						<div class="filter-bar d-flex flex-wrap align-items-center">
							<div class="sorting mr-auto">
								<select style={{ display: 'none' }}>
									<option value="1">Show 12</option>
									<option value="1">Show 12</option>
									<option value="1">Show 12</option>
								</select><div class="nice-select" tabindex="0"><span class="current">Show 12</span><ul class="list"><li data-value="1" class="option selected">Show 12</li><li data-value="1" class="option">Show 12</li><li data-value="1" class="option">Show 12</li></ul></div>
							</div>
							<div class="pagination">
								<a href="#" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
								<a href="#" class="active">1</a>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#" class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
								<a href="#">6</a>
								<a href="#" class="next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>


			<section class="related-product-area section_gap">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-6 text-center">
							<div class="section-title">
								<h1>Deals of the Week</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
									magna aliqua.</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-9">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r1.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r2.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r3.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r5.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r6.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r7.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r9.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r10.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-6">
									<div class="single-related-product d-flex">
										<a href="#"><img src="img/r11.jpg" alt="" /></a>
										<div class="desc">
											<a href="#" class="title">Black lace Heels</a>
											<div class="price">
												<h6>$189.00</h6>
												<h6 class="l-through">$210.00</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="ctg-right">
								<a href="#" target="_blank">
									<img class="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
export default ShopCategory;