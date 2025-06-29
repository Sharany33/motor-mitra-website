import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import Engine from "./Engine.png";
import Engine2 from "./Engine2.jpg";
import Garage from "./Garage.png";

const AboutUs = () => {
  return (
    <div className="aboutus-card-wrapper container-fluid my-4 px-0">
      <div className=" aboutus-card shadow-sm w-100 border-0 rounded-0">
        <div className="row g-0"> 
          <div className="col-12 col-md-7">
            <img
              src={Garage}
              alt="Trendy Pants and Shoes"
              className="img-fluid aboutus-image w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-md-5">
            <div className="card-body aboutus-card-body">
              <h5 className="card-title aboutus-card-title">About Us
                <img src={Engine} alt="Engine" className="aboutus-engine-image" /></h5>
              <p className="card-text aboutus-card-text"><strong>
                At MotorMitra, we believe your vehicle deserves the best care — with convenience, clarity, and trust at every turn. We’re redefining how you connect with garages, services, and maintenance solutions by bringing them all to your fingertips. Whether it’s a routine check-up or an emergency fix, we’re here to make your road smoother, one click at a time.
                <p>
                  Our mission is simple: to put you back in the driver’s seat of your vehicle’s well-being. We partner with reliable service providers, verified garages, and expert mechanics who share our commitment to quality and transparency. No more guesswork, surprise pricing, or vague updates — just real solutions, tailored for you.</p>
                <p>
                  MotorMitra is built by drivers, for drivers. And every feature we design — from seamless bookings to service tracking — is focused on saving you time, reducing stress, and keeping you confidently on the move.</p>
                <p>
                  Your journey matters. Let’s keep it running — together.</p></strong>




              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus-card-two shadow-sm w-100 border-0 rounded-0">
        <div className="row g-0">

          <div className="col-12 col-md-5">
            <div className="card-body aboutus-card-body" >
              <h5 className="card-title aboutus-card-title">Our Purpose</h5>
              <p className="card-text aboutus-card-text" >

                At MotorMitra, our purpose fuels everything we build. We’re not just a platform — we’re your partner in creating a smarter, smoother, and more trusted vehicle care experience:
              </p>
              <ul class="aboutus-purpose-list" style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
                <li>🚗 <strong>Simplify vehicle care</strong> by connecting drivers with trusted garages and service providers.</li>
                <li>🔍 <strong>Ensure transparency</strong> with clear pricing, real-time updates, and honest communication.</li>
                <li>⏱️ <strong>Save your time</strong> by streamlining bookings, reminders, and service tracking.</li>
                <li>🛠️ <strong>Empower drivers</strong> with tools to manage their vehicle’s health confidently.</li>
                <li>🤝 <strong>Build trust</strong> through verified partners, quality service, and customer-first support.</li>
                <li>🌐 <strong>Create a seamless experience</strong> that feels modern, mobile-friendly, and stress-free.</li>
              </ul>

            </div>
          </div>


          <div className="col-12 col-md-7">
            <img
              src={Engine2}
              alt="Trendy Pants and Shoes"
              className="img-fluid aboutus-image-two w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="aboutus-card-three shadow-sm w-100 border-0 rounded-0" >
        <div className="row g-0" style={{ marginTop: "40px", gap: "20px" }}>
          <div className="col-12 col-md-5">
             <div className="card-body aboutus-card-body" >
             <h5 className="card-title aboutus-card-title">Categories</h5>
          <ul class="aboutus-categories-list"style={{ gap: "20px", display: "flex", flexDirection: "column" ,listStyleType: "none"}}>
            <li>🛠️ <strong>General Services</strong> — Oil change, filter replacement, and routine check-ups.</li>
            <li>🔧 <strong>Repairs & Diagnostics</strong> — Engine tune-ups, brake issues, and system troubleshooting.</li>
            <li>⚙️ <strong>AC & Electrical</strong> — Battery, air conditioning, and lighting fixes.</li>
            <li>🧼 <strong>Car Spa & Detailing</strong> — Exterior polishing, interior vacuuming, and deep cleaning.</li>
            <li>🔄 <strong>Pick-up & Drop</strong> — Hassle-free doorstep service scheduling.</li>
            <li>📦 <strong>Insurance & Claims</strong> — Assistance with insurance renewals and accident support.</li>
          </ul>
          </div>
          </div>
        </div>
      </div>

      <div className="aboutus-card-three shadow-sm w-100 border-0 rounded-0">
        <div className="row g-0" style={{ marginTop: "40px" ,gap: "20px",marginLeft: "20px"}}>
             <h5 className="card-title aboutus-card-title">Brands We Cater To:</h5>
               <strong>
         <ul class="aboutus-brands-list"style={{gap: "20px",display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", listStyleType: "none", padding: "0",fontSize: "1.2rem",marginBottom: "120px"}}>
        
  <li>🚙 Maruti Suzuki</li>
  <li>🚗 Hyundai</li>
  <li>🚘 Tata Motors</li>
  <li>🚐 Mahindra</li>
  <li>🚙 Honda</li>
  <li>🚗 Toyota</li>
  <li>🚘 Kia</li>
  <li>🚗 Volkswagen</li>
  <li>🚙 MG Motor</li>
 
</ul>

 </strong>
  <p>
                <strong style={{ fontSize: "1.2rem",textAlign:"justify",marginBottom: "20px"}}>
                  Join us on this journey to transform vehicle care into a hassle-free, reliable experience. Because at MotorMitra, we’re driven by your trust and satisfaction.
                </strong>
              </p>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;