// src/ImageSlider.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ImageSlider.css";
import poolRoom from "./pictures/pool-room.jpg";
import restaurantRoom from "./pictures/restaurant-room.jpg";
import hotelRoom from "./pictures/hotel-room.jpg";
import registerImage from "./pictures/register-img.png";
import cameraIcon from "./pictures/Frame 29.png";
import bookingIcon from "./pictures/Frame 30.png";
import wifiIcon from "./pictures/Frame 31.png";
import nightIcon from "./pictures/Frame 32.png";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [poolRoom, restaurantRoom, hotelRoom];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="slider">
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>
        <img
          src={images[currentIndex]}
          className="imageSlider"
          alt={`Slide ${currentIndex + 1}`}
        />
        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>
      <div className="Slider">
        <img src={registerImage} alt="Register" className="registerImage" />
        <div className="RegisterSection">
          <div className="RegisterContents">
            <div className="RegisterText">
              <p className="RegisterTitle">
                A place Between Dreams and Reality
              </p>
              <p className="RegisterDescription">
                "Become a member and embrace the in-between. Join now, if you're
                ready to wander forever."
              </p>
              <button
                className="RegisterButton"
                onClick={() => navigate("/login")}
              >
                Register Now
              </button>
            </div>
          </div>
          <div className="FlexContainer">
            <div className="Icon"></div>
            <div className="Icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
