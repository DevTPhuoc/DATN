import logo from './logo.svg';
import './App.css';

import './css/bootstrap.css';
import './css/availability-calendar.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/bootstrap.map';
import './css/ion.rangeSlider.css';
import './css/linearicons.css';
import './css/magnific-popup.css';
import './css/main.css.map';
import './css/nice-select.css';
import './css/nouislider.min.css';




import Header from './Banner/Header';
import { Route,Routes } from 'react-router-dom';
import Footer from './Banner/Footer';
import Home from './Banner/Pages/Home';
import ShopCategory from './Banner/Pages/Shop/ShopCategory';
import ProductDetail from './Banner/Pages/Shop/ProductDetails';
import ProductCheckout from './Banner/Pages/Shop/ProductCheckout';
import ShoppingCart from './Banner/Pages/Shop/ShoppingCart';
import Confirmation from './Banner/Pages/Shop/Confirmation';
import Blog from './Banner/Pages/Blogs/Blog';
import BlogDetail from './Banner/Pages/Blogs/BlogDetail';
import Login from './Banner/Pages/Page/Login';
import Tracking from './Banner/Pages/Page/Tracking';
import Contact from './Banner/Pages/Contact';
function App() {
  return (
    <div className="App">
      
    
    <Header/>

    <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/ShopCategory" element={<ShopCategory/>}></Route>
    <Route path="/ProductDetail" element={<ProductDetail/>}></Route>
    <Route path="/ProductCheckout" element={<ProductCheckout/>}></Route>
    <Route path="/ShoppingCart" element={<ShoppingCart/>}></Route>
    <Route path="/Confirmation" element={<Confirmation/>}></Route>
    <Route path="/Blog" element={<Blog/>}></Route>
    <Route path="/BlogDetail" element={<BlogDetail/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Tracking" element={<Tracking/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>









    


    </Routes>

     <Footer/>
  
    </div>
  );
}

export default App;
