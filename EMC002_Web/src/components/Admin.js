import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Routes, Route } from "react-router-dom"; // Add this import
import ARoom from './ARoom.js'; // Import your components
import AAmenities from './AAmenities';
import AReservations from './AReservations';
import AEvents from './AEvents';

import './css/Admin.css'
export default function Admin() {
    return (
        <div className="Admin-Container">
            <AdminNavbar />
            <div className="Admin-Content">
                <Routes>
                    <Route path="/Admin/Rooms" element={<ARoom />} />
                    <Route path="/Admin/Amenities" element={<AAmenities />} />
                    <Route path="/Admin/Reservations" element={<AReservations />} />
                    <Route path="/Admin/Events" element={<AEvents />} />
                </Routes>
            </div>
        </div>
    )
}