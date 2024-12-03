import React from "react";

import './css/Admin.css'
import { Link } from "react-router-dom";
export default function AdminNavbar() {
    return (
        <div className="AN-Container">
            <h1>Admin User</h1>
            <li><Link to={'/Admin/Rooms'}>Rooms</Link></li>
            <li><Link to={'/Admin/Amenities'}>Amenities</Link></li>
            <li><Link to={'/Admin/Reservation'}>Reservations</Link></li>
            <li><Link to={'/Admin/Events'}>Events</Link></li>
        </div>
    )
}