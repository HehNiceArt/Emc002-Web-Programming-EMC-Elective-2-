import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import UserReviewForm from "./UserReviewForm";
import { useAuth } from "../AuthContext";

const ReservationForm = () => {
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated
  const [formData, setFormData] = useState({
    branchLocation: "",
    lengthOfStay: "",
    checkInDate: "",
    roomType: "",
    checkOutDate: "",
    notes: "",
    fullName: "",
    contactNumber: "",
    email: "",
    agreeTerms: false,
  });

  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const [isPopupVisibleCancellation, setIsPopupVisibleCancellation] =
    useState(false);
  const [isPopupVisibleRefund, setIsPopupVisibleRefund] = useState(false);
  const [isMessagePopupVisible, setIsMessagePopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // Dynamic popup message
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsPopupVisibleCancellation(false);
        setIsPopupVisibleRefund(false);
        setIsMessagePopupVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLearnMoreCancellation = () => {
    setIsPopupVisibleCancellation(true);
  };

  const handleLearnMoreRefund = () => {
    setIsPopupVisibleRefund(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/newReservationRoute/findReservation",
        formData
      );
      console.log(response.data.message);

      setPopupMessage("Reservation created successfully!");
      setIsMessagePopupVisible(true);

      setTimeout(() => {
        setIsReviewFormVisible(true);
      }, 200);
    } catch (error) {
      console.error("Error creating reservation:", error);

      setPopupMessage("Failed to create reservation. Please try again.");
      setIsMessagePopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Reset form data after successful submission or closing the message popup
    setFormData({
      branchLocation: "",
      lengthOfStay: "",
      checkInDate: "",
      roomType: "",
      checkOutDate: "",
      notes: "",
      fullName: "",
      contactNumber: "",
      email: "",
      agreeTerms: false,
    });

    setIsMessagePopupVisible(false);
  };

  return (
    <div className="form-container">
      {/* Only show the form if the user is authenticated */}
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <label>
            Branch Location
            <br />
            <select
              name="branchLocation"
              value={formData.branchLocation}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Room Type</option>
              <option value="Edsa, Cubao">Edsa Cubao</option>
              <option value="North Edsa">North Edsa</option>
              <option value="Edsa, Guadalupe">Edsa, Guadalupe</option>
            </select>
          </label>
          <br />

          <label>
            Length of Stay (in hours)
            <br />
            <input
              type="number"
              name="lengthOfStay"
              value={formData.lengthOfStay}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Check-in Date
            <br />
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Room Type
            <br />
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Room Type</option>
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="suite">Suite</option>
            </select>
          </label>
          <br />

          <label>
            Check-out Date
            <br />
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Notes
            <br />
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <hr className="line" />

          <label>
            Full Name
            <br />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Contact Number
            <br />
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Email
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <div className="divTerms">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="agreeTerms" id="textTerms">
              I agree with the terms and conditions
            </label>
          </div>

          <button id="bookNow" type="submit">
            Book Now
          </button>

          <hr className="line" />

          <div className="policies">
            <button
              id="end-button1"
              onClick={handleLearnMoreCancellation}
              type="button"
            >
              Cancellation Policy
            </button>
            <br />
            <button
              id="end-button2"
              onClick={handleLearnMoreRefund}
              type="button"
            >
              Refund Process
            </button>
          </div>
        </form>
      ) : (
        <div className="login-prompt">
          <p id="pprompt">Please log in to make a reservation.</p>
          <button
            onClick={() => (window.location.href = "/login")}
            id="loginRedirect"
          >
            Log In / Register
          </button>
        </div>
      )}

      {/* Generic Message Popup */}
      {isMessagePopupVisible && (
        <div className="reservation-popup-overlay">
          <div ref={popupRef} className="reservation-popup-content">
            <h2>Notification</h2>
            <p>{popupMessage}</p>
            <button id="reservation-close-popup" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Cancellation Policy Popup */}
      {isPopupVisibleCancellation && (
        <div className="reservation-popup-overlay">
          <div ref={popupRef} className="reservation-popup-content">
            <h2>Cancellation Policy</h2>
            <p>
              We understand that plans can change, and we want to make the
              cancellation process as clear and fair as possible. Our
              cancellation policy is designed to accommodate different
              circumstances while ensuring we can manage reservations
              efficiently:
            </p>
            <ul>
              <li>
                <strong>Full Refund (Up to 48 Hours Prior to Check-In):</strong>{" "}
                Guests can cancel their reservations up to 48 hours before the
                scheduled check-in time and receive a full refund.
              </li>
              <li>
                <strong>
                  50% Charge (Between 24-48 Hours Prior to Check-In):
                </strong>{" "}
                Cancellations made between 24 to 48 hours before the scheduled
                check-in time will incur a 50% charge.
              </li>
              <li>
                <strong>No Refund (Within 24 Hours of Check-In):</strong>{" "}
                Cancellations made within 24 hours will not be eligible for a
                refund.
              </li>
              <li>
                <strong>Exceptions:</strong> Special circumstances like
                emergencies may allow for flexibility. Please contact us
                directly.
              </li>
            </ul>
            <button
              id="reservation-close-popup1"
              onClick={() => setIsPopupVisibleCancellation(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Refund Process Popup */}
      {isPopupVisibleRefund && (
        <div className="reservation-popup-overlay">
          <div ref={popupRef} className="reservation-popup-content">
            <h2>Refund Process</h2>
            <p>
              Once your cancellation is confirmed, we will process the refund
              within 5-7 business days. The refund will be issued to the
              original payment method.
            </p>
            <ul>
              <li>
                <strong>Processing Time:</strong> Refunds are processed within
                5-7 business days, excluding weekends and holidays.
              </li>
              <li>
                <strong>Refund Method:</strong> The refund will be issued to the
                original payment method.
              </li>
              <li>
                <strong>Confirmation:</strong> You will receive a confirmation
                email once the refund is processed.
              </li>
              <li>
                <strong>Bank Processing Time:</strong> It may take up to 10
                additional business days for your bank to reflect the refund in
                your account.
              </li>
              <li>
                <strong>Partial Refunds:</strong> Partial refunds may be issued
                for cancellations based on the cancellation policy.
              </li>
            </ul>
            <button
              id="reservation-close-popup2"
              onClick={() => setIsPopupVisibleRefund(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
