import React, { useState, useRef } from "react";
import "./css/Login.css";
import { useAuth } from "../AuthContext";

const LoginForm = ({ onSuccessfulLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const popupRef = useRef(null);

  const { login } = useAuth();

  const onButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user);
        onSuccessfulLogin(); // Call the parent handler on success
      } else {
        setPopupMessage(data.message || "Invalid email or password.");
        setIsPopupVisible(true);
      }
    } catch (error) {
      setPopupMessage(
        "An error occurred while trying to log in. Please check your internet connection or try again later."
      );
      setIsPopupVisible(true);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="Login-Form">
      <div className="Login-FormContainer">
        <h1>Login</h1>
        <div className="Login-Email">
          <p>Email Address *</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="inputBox"
          />
        </div>
        <div className="Login-Password">
          <p>Password *</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="inputBox"
          />
        </div>
        <button onClick={onButtonClick} className="loginButton">
          Login
        </button>
      </div>

      {/* Popup Notification */}
      {isPopupVisible && (
        <div className="login-popup-overlay">
          <div className="login-popup-content" ref={popupRef}>
            <h2>Error</h2>
            <p>{popupMessage}</p>
            <button className="closePopupButton" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
