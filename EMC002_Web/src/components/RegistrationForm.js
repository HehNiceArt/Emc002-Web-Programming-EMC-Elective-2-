import React, { useState } from "react";
import './css/Login.css';
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ setIsRegistered }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const onButtonClick = async () => {
        if (!email || !firstName || !lastName || !password || !confirmPassword) {
            setPopupMessage("All fields are required.");
            setIsPopupVisible(true);
            return;
        }

        if (confirmPassword !== password) {
            setPopupMessage("Passwords do not match!");
            setIsPopupVisible(true);
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, firstName, lastName }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Registration successful:", data);
                setPopupMessage("Registration successful! Redirecting you now...");
                setIsPopupVisible(true);
                login(data.user);
                setIsRegistered(true);
                setTimeout(() => navigate('/'), 2000);  // Redirect after 2 seconds
            } else {
                setPopupMessage(data.message || "Registration failed.");
                setIsPopupVisible(true);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setPopupMessage("An error occurred during registration. Please try again.");
            setIsPopupVisible(true);
        }
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="Login-Form">
            <div className="Login-SignUpContainer">
                <h1>Sign Up/Register</h1>
                <div className="Login-Email">
                    <p>Email Address *</p>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="inputBox"
                    />
                </div>
                <div className="Login-Name">
                    <div className="Login-FirstName">
                        <p>First Name *</p>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Ex. John"
                            className="inputBox"
                        />
                    </div>
                    <div style={{ width: '20%' }}></div>
                    <div className="Login-LastName">
                        <p>Last Name *</p>
                        <input
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Ex. Doe"
                            className="inputBox"
                        />
                    </div>
                </div>
                <div className="Login-Password">
                    <p>Password *</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputBox"
                    />
                    <p>Confirm Password *</p>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="inputBox"
                    />
                </div>
                <button onClick={onButtonClick} className="loginButton">Register</button>
            </div>

            {/* Popup Notification */}
            {isPopupVisible && (
                <div className="login-popup-overlay">
                    <div className="login-popup-content">
                        <h2>{popupMessage.includes('successful') ? 'Success' : 'Error'}</h2>
                        <p>{popupMessage}</p>
                        <button className="closePopupButton" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
