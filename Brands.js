import { Link } from "react-router-dom";
import tatamotors from './tatamotors.png';
import maruti from './maruti.png';
import hyundai from './hyundai.png';
import honda from './honda.png';
import toyota from './toyota.png';
import mahinndra from './mahinndra.png';
import volkwagen from './volkwagen.png';
import kia from './kia.png';
import mgmotor from './mgmotor.png';
import './Brands.css';
import Slider from "react-slick";


function FocusOnSelect() {
const PrevArrow = (props) => (
  <div className="custom-prev" onClick={props.onClick}>‹</div>
);

const NextArrow = (props) => (
  <div className="custom-next" onClick={props.onClick}>›</div>
);

const settings = {
  focusOnSelect: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
autoplay:true,
speed:1500,
  arrows: true,
  dots: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
};
  // Define brand names with their corresponding image and link
  const brands = [
    { name: "Tata Motors", image: tatamotors, link: "/brands/tata" },
    { name: "Volkswagen", image: volkwagen, link: "/brands/volkswagen" },
    { name: "Honda", image: honda, link: "/brands/honda" },
    { name: "Hyundai", image: hyundai, link: "/brands/hyundai" },
    { name: "Mahindra", image: mahinndra, link: "/brands/mahindra" },
    { name: "Maruti Suzuki", image: maruti, link: "/brands/maruti" },
    { name: "Toyota", image: toyota, link: "/brands/toyota" },
    { name: "Kia", image: kia, link: "/brands/kia" },
    { name: "MG Motor", image: mgmotor, link: "/brands/mgmotor" }
  ];

  return (
 
    <div className="container-md4 sl-container">
      <Slider {...settings} className="brand-slider mt-5 mb-5">
        {brands.map((brand, index) => (
          <div key={index} className="col-md-auto brand-logo s2-container">
            <Link to={brand.link}>
              <img src={brand.image} alt={brand.name} className="img-fluid slide-image" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  
  );
}

export default FocusOnSelect;