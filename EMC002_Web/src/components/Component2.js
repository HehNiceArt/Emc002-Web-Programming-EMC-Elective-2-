import React, { useState, useEffect, useRef } from "react";
import "./css/Component2.css";
import bannerImage from "./images/img1.png";
import bannerImage2 from "./images/img2.png";

export default function Component2() {
  const [isPopupVisibleWatcher, setIsPopupVisibleWatcher] = useState(false);
  const [isPopupVisibleHole, setIsPopupVisibleHole] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsPopupVisibleWatcher(false);
        setIsPopupVisibleHole(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLearnMoreWatcher = () => {
    setIsPopupVisibleWatcher(true);
  };

  const handleLearnMoreHole = () => {
    setIsPopupVisibleHole(true);
  };

  return (
    <div className="banner">
      <div className="color-banner"></div>
      <h1 className="top-text">Our Concepts</h1>
      <p className="center-top">
        Explore the boundaries of the Reality. Each room offers a unique escape.
        Which one will you call home for the night?
      </p>
      <div className="image-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <h2 className="overlay-text">The Watcher Room</h2>
        <p className="overlay-description">
          A surreal, empty room with beige walls and a single chair. A massive,
          expressionless white mask floats eerily above the floor, creating an
          unsettling atmosphere that challenges the boundaries of reality.
        </p>
        <button
          className="learn-more"
          style={{
            position: "absolute",
            right: "100px",
            top: "75%",
            fontSize: "30px",
          }}
          onClick={handleLearnMoreWatcher}
        >
          Learn More
        </button>
      </div>
      <div className="hole-section">
        <div className="hole-content">
          <h2 className="bottom-text">The Hole</h2>
          <p className="bottom-description">
            The Hole is a small, dimly lit room with bare, cracked walls and a
            low, oppressive ceiling. Its air feels thick, almost suffocating, as
            if the space itself is trying to swallow all sound and light. The
            only feature of note is a large, circular pit in the center of the
            floor, its depths unknowable and unnerving. The atmosphere is heavy
            with a sense of isolation, making the room feel both ancient and
            unsettling, as if it exists outside the flow of time. No one can
            recall its purpose, but everyone who enters seems to leave with a
            lingering unease, as though something—unspeakable and ancient—still
            watches from within the depths.
          </p>
          <button
            className="learn-more bottom-button"
            onClick={handleLearnMoreHole}
          >
            Learn More
          </button>
        </div>
        <div className="image-container2">
          <img src={bannerImage2} alt="Banner2" className="banner-image2" />
        </div>
      </div>

      {isPopupVisibleWatcher && (
        <div className="popup-overlay">
          <div ref={popupRef} className="popup-content">
            <h2>Learn More About The Watcher Room</h2>
            <p>
              The Watcher Room is a minimalist, surreal space featuring beige
              walls, a lone chair, and a massive, floating white mask that seems
              to watch you from above. Its unsettling atmosphere challenges the
              boundaries of reality, with the mask's unblinking gaze following
              every movement. This room, one of the most booked in our
              collection, draws guests seeking a unique psychological
              experience, where the sense of being observed never fades. The
              room leaves an unforgettable impression, blending eerie beauty
              with a lingering, mysterious presence that captivates all who
              enter.
            </p>
            <button
              className="close-popup"
              onClick={() => setIsPopupVisibleWatcher(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isPopupVisibleHole && (
        <div className="popup-overlay">
          <div ref={popupRef} className="popup-content">
            <h2>Learn More About The Hole Room</h2>
            <p>
              The Hole is a small, dimly lit room with bare, cracked walls and a
              low, oppressive ceiling. Its air feels thick, almost suffocating,
              as if the space itself is trying to swallow all sound and light.
              The only feature of note is a large, circular pit in the center of
              the floor, its depths unknowable and unnerving. The atmosphere is
              heavy with a sense of isolation, making the room feel both ancient
              and unsettling, as if it exists outside the flow of time. No one
              can recall its purpose, but everyone who enters seems to leave
              with a lingering unease, as though something—unspeakable and
              ancient—still watches from within the depths.
            </p>
            <button
              className="close-popup"
              onClick={() => setIsPopupVisibleHole(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
