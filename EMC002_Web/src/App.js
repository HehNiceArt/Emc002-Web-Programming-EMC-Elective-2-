import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/HomePage";
import RoomReservationPage from "./pages/RoomReservationPage";
import AdminPage from "./pages/AdminPage";
import RoomViewPage from "./pages/RoomViewPage";
import CustomerFeedbackPage from "./pages/CustomerFeedbackPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import AARooms from './components/ARoom'
import AAmenities from "./components/AAmenities";
import AReservation from './components/AReservations';
import AEvents from './components/AEvents';
import ReviewPage from './components/ReviewPage';
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  // Get the authentication state from localStorage or default to false
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth === "true"; // If stored value is "true", the user is authenticated
  });

  const location = useLocation();

  const noNavbarPaths = ["/login", "/admin", "/Admin/Amenities", "/Admin/Reservation", "/Admin/Events", "/Admin/Rooms"];

  // Update localStorage whenever the authentication state changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div>
      {!noNavbarPaths.includes(location.pathname) && (
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      )}
      <Routes>
        {/* Default location of the web */}
        <Route index element={<Home />} />
        {/* link of the page, which is path */}
        <Route path="/RoomView" element={<RoomViewPage />} />
        <Route path="/RoomReservation" element={<RoomReservationPage />} />
        <Route path="/Rooms" element={<CustomerFeedbackPage />} />
        <Route path="/Login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Admin/Rooms" element={<AARooms />} />
        <Route path="/Admin/Amenities" element={<AAmenities />} />
        <Route path="/Admin/Reservation" element={<AReservation />} />
        <Route path="/Admin/Events" element={<AEvents />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
