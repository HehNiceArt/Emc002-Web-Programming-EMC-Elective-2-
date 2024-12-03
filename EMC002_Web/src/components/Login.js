import React, { useState, useEffect } from "react";
import './css/Login.css';
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router";

export default function Login({ setIsAuthenticated }) {
    const [isRegistered, setIsRegistered] = useState(false);
    const [showForm, setShowForm] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is authenticated when the component mounts
        const userIsAuthenticated = localStorage.getItem("isAuthenticated");
        if (userIsAuthenticated === "true") {
            setIsAuthenticated(true);
            navigate("/"); // Redirect to home if already logged in
        }
    }, [setIsAuthenticated, navigate]);

    const navigateToHome = () => {
        navigate('/');
    };

    const showLoginForm = () => {
        setShowForm("login");
    };

    const showRegistrationForm = () => {
        setShowForm("register");
    };

    const handleSuccessfulLogin = () => {
        setIsAuthenticated(true); // Update the authenticated state
        localStorage.setItem("isAuthenticated", "true"); // Save authentication status
        navigate('/'); // Navigate to the homepage
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated"); // Remove authentication status
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="Login-Container">
            <div className="Login-Overlay">
                <div className="Login-Content">
                    <div className="Login-Back">
                        <div style={{ padding: '10px' }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="40px"
                                viewBox="0 -960 960 960"
                                width="40px"
                                fill="#FFFFFF"
                                onClick={navigateToHome}
                            >
                                <path d="M650-80 250-480l400-400 61 61.67L372.67-480 711-141.67 650-80Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="Login-Choice">
                        {showForm === null && (
                            <div className="buttonContainer">
                                <h1>Liminal Escapes</h1>
                                <button onClick={showLoginForm} className="formButton">Login</button>
                                <button onClick={showRegistrationForm} className="formButton">Register</button>
                            </div>
                        )}
                    </div>
                    {/* Show the selected form */}
                    {showForm === "login" && (
                        <LoginForm onSuccessfulLogin={handleSuccessfulLogin} />
                    )}
                    {showForm === "register" && (
                        <RegistrationForm setIsRegistered={setIsRegistered} />
                    )}
                </div>
            </div>
        </div>
    );
}
