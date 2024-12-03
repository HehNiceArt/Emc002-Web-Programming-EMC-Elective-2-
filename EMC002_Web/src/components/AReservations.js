import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import './css/Admin.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function AReservations() {
    const [reservations, setReservations] = useState([]);
    const [tally, setTally] = useState({ availableRooms: 0, booked: 0 });

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/reservations');
                setReservations(response.data);

                // Calculate available rooms and booked
                const bookedCount = response.data.length; // Assuming each reservation is a booked room
                const availableRoomsCount = 20 - bookedCount; // Assuming a total of 20 rooms for example

                setTally({ availableRooms: availableRoomsCount, booked: bookedCount });
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };
        fetchReservations();
    }, []);

    return (
        <div className="Admin-Container">
            <AdminNavbar />
            <div className="Admin-Content">
                <div className="Room-List">
                    <div className="Room-Bookings">
                        <h1 className="Room-Tally">{tally.booked}</h1>
                        <p>Booked</p>
                    </div>
                    <div className="Room-CheckIn">
                        <h1 className="Room-Tally">{tally.availableRooms}</h1>
                        <p>Available Rooms</p>
                    </div>
                </div>
                <Container className="grid-container">
                    <Row className="grid-line">
                        <Col className="grid-line"><h5>Code</h5></Col>
                        <Col className="grid-line"><h5>Room</h5></Col>
                        <Col className="grid-line"><h5>Location</h5></Col>
                        <Col className="grid-line"><h5>Booking</h5></Col>
                    </Row>
                    {reservations.map((reservation, index) => (
                        <Row className="grid-line" key={index}>
                            <Col className="grid-line"><p>{reservation.code}</p></Col>
                            <Col className="grid-line"><p>{reservation.room}</p></Col>
                            <Col className="grid-line"><p>{reservation.location}</p></Col>
                            <Col className="grid-line"><p>{reservation.name}</p></Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    )
}
