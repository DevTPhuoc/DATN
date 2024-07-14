import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const  auth = useSelector(state=>state.auth);

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
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/Addcarts', dataToSend);
            const { data } = response.data;

            toast.success(`Added ${data.product_name} to cart`);
            // navigate('/ShoppingCart');
            
        } catch (error) {
            console.log(error.message);
            toast.error('Failed to add product to cart');
        }
    };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/thong-tin-san-pham/${id}`);
        setProduct(response.data.data);
        console.log(setProduct);
        
        setLoading(false);
        console.log(setLoading);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
   <div class="product_image_area">
		<div class="container">
			<div class="row s_product_inner">
				<div class="col-lg-6">
					<div class="s_Product_carousel owl-carousel owl-theme owl-loaded">
          <img className="img-fluid" src={`http://127.0.0.1:8000/img/add/${product?.image_name}`} alt="" />

						
						
          <div className="owl-stage-outer">
      <div className="owl-stage" style={{ transform: 'translate3d(-1800px, 0px, 0px)', transition: 'all 0s ease 0s', width: '3150px' }}>
        <div className="owl-item cloned" style={{ width: '450px', marginRight: '0px' }}>
          <div className="single-prd-item">
            <img className="img-fluid"  src="" alt="" />
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: '450px', marginRight: '0px' }}>
          <div className="single-prd-item">
            <img className="img-fluid"  src=""  alt="" />
          </div>
        </div>
        <div className="owl-item" style={{ width: '450px', marginRight: '0px' }}>
          <div className="single-prd-item">
            <img className="img-fluid"  src="" alt="" />
          </div>
        </div>
        <div className="owl-item" style={{ width: '450px', marginRight: '0px' }}>
          <div className="single-prd-item">
            <img className="img-fluid"  src="" alt="" />
          </div>
        </div>
        <div className="owl-item active" style={{ width: '450px', marginRight: '0px' }}>
          <div className="single-prd-item">
            <img className="img-fluid"  src="" alt="" />
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: '450px', marginRight: '0px' }}>
          <div className="single-prd-item">
            <img className="img-fluid"  src="" alt="" />
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: '450px', marginRight: '0px' }}>
          <div className="single-prd-item">
            <img className="img-fluid"  src="" alt="" />
          </div>
        </div>
      </div>
      <div className="owl-controls">
        <div className="owl-nav">
          <div className="owl-prev" style={{ display: 'none' }}>prev</div>
          <div className="owl-next" style={{ display: 'none' }}>next</div>
        </div>
        <div className="owl-dots">
          <div className="owl-dot"><span></span></div>
          <div className="owl-dot"><span></span></div>
          <div className="owl-dot active"><span></span></div>
        </div>
      </div>
    </div>
    </div>

    </div>


				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
						
          <h3>{product?.name}</h3>
          <h2>{product?.selling_price}</h2>
						<p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
							something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.</p>
						<div class="product_count">
          
							<label for="qty">Quantity:</label>

         
							<input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty"/>
							<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
							<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
						</div>
						<div class="card_area d-flex align-items-center">
							<a class="primary-btn" href="#"onClick={() => addCart(product)}>Add to Cart</a>
							<a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a>
							<a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  );
}

export default ProductDetail;
