import logo from'./img/fav.png';
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
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';






import Header from './Banner/Header';
import { Route,Routes } from 'react-router-dom';
import Footer from './Banner/Footer';
import Home from './Banner/Pages/Home';
import SignIn from './Banner/Pages/Page/SignIn';
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
import { Navigate } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
    
    <Header/>
    
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/ShopCategory" element={<ShopCategory />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ProductCheckout" element={<ProductCheckout />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogDetail" element={<BlogDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
