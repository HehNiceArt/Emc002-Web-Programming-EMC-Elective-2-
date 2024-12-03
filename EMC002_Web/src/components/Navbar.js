import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Import the context
import "./css/Navbar.css";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout method

  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          Liminal Escapes
        </a>

        <nav className="navbar">
          <Link to="/Rooms">Rooms</Link>
          <Link to="/RoomReservation">Find Reservations</Link>

          {/* Conditionally render Login/Logout */}
          {isAuthenticated ? (
            <Link to="/" onClick={logout}>Logout</Link>
          ) : (
            <Link to="/login">Login / Register</Link>
          )}
        </nav>
      </header>
    </div>
  );
}
