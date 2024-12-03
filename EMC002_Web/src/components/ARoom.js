import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import './css/Admin.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
export default function ARoom() {
    const [reservations, setReservations] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [stats, setStats] = useState({ newBookings: 0, checkIn: 0, checkOut: 0 });

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/reservations');
                setReservations(response.data);
                setStats(prevStats => ({
                    ...prevStats,
                    newBookings: response.data.length,
                }))

            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };
        fetchReservations();
    }, []);
    useEffect(() => {
        const fetchRooms = async () => {
            try {

                const response = await axios.get('http://localhost:3001/api/rooms');
                setRooms(response.data);
                const totalCheckIn = response.data.reduce((acc, room) => acc + room.checkInQuantity, 0);
                const totalCheckOut = response.data.reduce((acc, room) => acc + room.checkOutQuantity, 0);
                setStats(prevStats => ({
                    ...prevStats,
                    checkIn: totalCheckIn,
                    checkOut: totalCheckOut,
                }))
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        }
        fetchRooms();
    }, []);

    return (
        <div className="Admin-Container">
            <AdminNavbar />
            <div className="Admin-Content">
                <div className="Room-List">
                    <div className="Room-Bookings">
                        <h1 className="Room-Tally">{stats.newBookings}</h1>
                        <p>New Bookings</p>
                    </div>
                    <div className="Room-CheckIn">
                        <h1 className="Room-Tally">{stats.checkIn}</h1>
                        <p>Check In</p>
                    </div>
                    <div className="Room-CheckOut">
                        <h1 className="Room-Tally">{stats.checkOut}</h1>
                        <p>Check Out</p>
                    </div>
                </div>
                <Container className="grid-container">
                    <Row className="grid-line">
                        <Col className="grid-line"><h2>Code</h2></Col>
                        <Col className="grid-line"><h2>Room</h2></Col>
                        <Col className="grid-line"><h2>Total</h2></Col>
                        <Col className="grid-line"><h2>Name</h2></Col>
                    </Row>
                    {reservations.map((reservation, index) => (
                        <Row className="grid-line" key={index}>
                            <Col className="grid-line"><p>{reservation.code}</p></Col>
                            <Col className="grid-line"><p>{reservation.room}</p></Col>
                            <Col className="grid-line"><p>{reservation.total}</p></Col>
                            <Col className="grid-line"><p>{reservation.name}</p></Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    )
}