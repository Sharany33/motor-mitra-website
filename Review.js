import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import rimg1 from './rimg1.png';
import rimg2 from './rimg2.png';
import rimg3 from './rimg3.png';
import rimg4 from './rimg4.png';
import './Review.css';


function Review() {
  return (
   
      <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card  card-review">
      <img src={rimg1} className="card-img-top" alt="..."/>
      <div className="card-body card-review-body">
        <h5 className="card-title card-review-title">Effortless Shopping Experience</h5>
        <p className="card-text">An intuitive, category-based layout makes finding the right part quick and hassle-free, saving you valuable time.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card card-review">
      <img src={rimg2} className="card-img-top" alt="..."/>
      <div className="card-body card-review-body">
        <h5 className="card-title card-review-title">Focused Product Categories That Matter</h5>
        <p className="card-text">With a streamlined selection of 4 key categories, we provide only the most essential parts—ensuring quality over quantity.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card card-review">
      <img src={rimg3} className="card-img-top" alt="..."/>
      <div className="card-body card-review-body">
        <h5 className="card-title card-review-title"> Reliable Selection for Leading Car Brands</h5>
        <p className="card-text">We cater to 9 major car brands, offering carefully chosen auto parts designed for seamless compatibility.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card card-review">
      <img src={rimg4} className="card-img-top" alt="..."/>
      <div className="card-body card-review-body">
        <h5 className="card-title card-review-title">Competitive Pricing Without Compromise</h5>
        <p className="card-text">Our products balance affordability with durability, so you get high-quality auto solutions without overspending.</p>
      </div>
    </div>
  </div>
</div>
   
  )
}
export default Review;