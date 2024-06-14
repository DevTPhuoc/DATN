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
function App() {
  return (
    <div className="App">
      
    
    <Header/>

    <Routes>
    <Route path="/home" element={<Home/>}></Route>
    </Routes>

     <Footer/>
  
    </div>
  );
}

export default App;
