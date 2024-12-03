import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import './css/Admin.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
export default function AAmenities() {
    const [amenities, setAmenities] = useState([]);
    const [stats, setStats] = useState({ roomService: 0, internetAccess: 0 });
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchAmenities = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/amenities');
                setAmenities(response.data);
                const totalRoomService = response.data.reduce((acc, amenity) => acc + amenity.roomService, 0);
                const totalInternetAccess = response.data.reduce((acc, amenity) => acc + amenity.internetAccess, 0);
                setStats(prevStats => ({
                    ...prevStats,
                    roomService: totalRoomService,
                    internetAccess: totalInternetAccess,
                }))
            } catch (error) {
                console.error("Error fetching amenities:", error);
            }
        };
        fetchAmenities();
    }, []);
    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/reservations');
                setReservations(response.data);
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
                        <h1 className="Room-Tally">{stats.roomService}</h1>
                        <p>Room Service</p>
                    </div>
                    <div className="Room-CheckIn">
                        <h1 className="Room-Tally">{stats.internetAccess}</h1>
                        <p>Internet Access</p>
                    </div>
                </div>
                <Container className="grid-container">
                    <Row className="grid-line">
                        <Col className="grid-line"><h2>Code</h2></Col>
                        <Col className="grid-line"><h2>Room Service</h2></Col>
                        <Col className="grid-line"><h2>Internet Access</h2></Col>
                        <Col className="grid-line"><h2>Status</h2></Col>
                    </Row>
                    {reservations.map((reservation) => (
                        <Row className="grid-line" key={reservation.id}>
                            <Col className="grid-line"><p>{reservation.code}</p></Col>
                            <Col className="grid-line"><p>{reservation.room}</p></Col>
                            <Col className="grid-line">
                                <p>{amenities.find(amenity => amenity.internetAccess)?.name || 'N/A'}</p>
                            </Col> {/* Internet Access */}
                            <Col className="grid-line"><p>{reservation.status}</p></Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    )
}
