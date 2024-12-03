import React from "react";
import Starrate from "./starrate"; // Import your Starrate component
import "./css/UserReview.css";

function UserReviewForm({ roomName, onClose }) {
  const handleSubmit = () => {
    console.log("Form Submitted for room: ", roomName);
    onClose();
  };

  return (
    <div className="review-wrapper">
      <div className="overlay" onClick={onClose}></div>
      <div id="Main">
        <div className="RateStars">
          <h1 className="RevFormTitle">Rate your experience</h1>
        </div>
        <div className="TextArea">
          <div className="container">
            {/* Use Starrate component for star rating */}
            <Starrate />
            <h2 className="FeedbackName">Feedback</h2>
            <textarea id="Feedback" className="submit">
              We'd love to hear your suggestions
            </textarea>
            <button
              type="button"
              className="Revsubmit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReviewForm;
