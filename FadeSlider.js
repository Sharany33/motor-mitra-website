import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FadeSlider.css";

function AutoPlayMethods() {
  const sliderRef = useRef(null);

useEffect(() => {
  const timer = setTimeout(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    } else {
      console.error("Slider reference is still null after mounting!");
    }
  }, 500); // Adding a small delay

  return () => clearTimeout(timer); // Cleanup timer on unmount
}, []);


  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    } else {
      console.error("Slider reference is null! Check if Slider is properly mounted.");
    }
  };

  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    } else {
      console.error("Slider reference is null! Check if Slider is properly mounted.");
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    fade: true,
    pauseOnHover: false,
    arrows:false
  };

  return (
    <div className="fade-slider-container">
    <Slider ref={(el) => (sliderRef.current = el)} {...settings}>
        <div className="image-container">
          <img src={img1} alt="Slide 1" className="slide-image" />
        </div>
        <div className="image-container">
          <img src={img2} alt="Slide 2" className="slide-image" />
        </div>
        <div className="image-container">
          <img src={img3} alt="Slide 3" className="slide-image" />
        </div>
        <div className="image-container">
          <img src={img4} alt="Slide 4" className="slide-image" />
        </div>
      </Slider>

      <div className="fade-slider-controls">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
}

export default AutoPlayMethods;