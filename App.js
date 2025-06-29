import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Category from "./Components/Category";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Signup from "./Components/Signnupp";
import Fade from './Components/FadeSlider';
import Footer from './Components/Footer';
import Review from "./Components/Review";
import "./App.css";
import FocusOnSelect from "./Components/Brands";
import {Cat1,Cat2,Cat3,Cat4} from "./Components/SubCategory";
import CarType from "./Components/BrandInside/CarType";
import CsubCategory from "./Components/CategoryInside/CsubCategory";
import Cartpage from "./Components/Cart/Cartpage";
import ConfirmationPage from "./Components/Cart/ConfirmationPage";
import ProductDetails from "./Components/ProductDesc/ProductDetails";
import AboutUs from "./Components/AboutUs";
import CarScrollSection from "./Components/CarModel/carScrollSection";


function Home() {
  return (
    <>
      <Navbar />
       <Fade />
      <h1 className="text-center mt-5">Shop By Essentials</h1>
      <Category />
        <h1 className="text-center mt-3">Shop By Brands</h1>
      <FocusOnSelect />
        <h1 className="text-center mt-3">Why Choose Motor-Mitra</h1>
      <Review />
      <Footer />
    </>
  );
}
function About() {
  return (
    <>
      <Navbar />
      <AboutUs/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />  {/* ✅ Navbar + Category together */}
 <Route path="/login" element={

    <Login />

} />
 <Route path="/signup" element={<Signup />} />

<Route path="/subcat" element={<Cat1/>}/>
<Route path="/subcat2" element={<Cat2/>}/>
<Route path="/subcat3" element={<Cat3/>}/>
<Route path="/subcat4" element={<Cat4/>}/>
<Route path="/brands/:brandName" element={<CarType />} />
<Route path="/CsubCat" element={<CsubCategory/>}/>
<Route path="/Cart" element={<Cartpage/>}/>
<Route path="/Cart/confirm" element={<ConfirmationPage/>}/>
<Route path="/productdesc" element={<ProductDetails/>}/>
<Route path="/nav/aboutus" element={<About/>}/>
<Route path="/carscroll" element={<CarScrollSection/>}/>


        <Route path="*" element={<h2 className="text-center">404 Page Not Found</h2>} />  
      </Routes>
      
    </Router>
  );
}
export default App;




