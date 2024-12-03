import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import './css/Admin.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function AEvents() {
    const [events, setEvents] = useState([]);
    const [tally, setTally] = useState({ totalEvents: 0, registered: 0, totalCost: 0 });

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/events');
                setEvents(response.data);

                // Calculate total events and registered count
                const totalEventsCount = response.data.length;
                const registeredCount = response.data.filter(event => event.registered).length;
                const totalCost = response.data.reduce((acc, event) => acc + event.cost, 0); // Sum of costs

                setTally({ totalEvents: totalEventsCount, registered: registeredCount, totalCost: totalCost });
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchEvents();
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Get the date part only
    };
    return (
        <div className="Admin-Container">
            <AdminNavbar />
            <div className="Admin-Content">
                <div className="Room-List">
                    <div className="Room-Bookings">
                        <h1 className="Room-Tally">{tally.totalEvents}</h1>
                        <p>Total Events</p>
                    </div>
                    <div className="Room-CheckIn">
                        <h1 className="Room-Tally">{tally.registered}</h1>
                        <p>Registered</p>
                    </div>
                    <div className="Room-CheckOut">
                        <h1 className="Room-Tally">{tally.totalCost}</h1> {/* Placeholder for Code or other metric */}
                        <p>Cost</p>
                    </div>
                </div>
                <Container className="grid-container">
                    <Row className="grid-line">
                        <Col className="grid-line"><h2>Code</h2></Col>
                        <Col className="grid-line"><h2>Venue</h2></Col>
                        <Col className="grid-line"><h2>Date</h2></Col>
                        <Col className="grid-line"><h2>Register</h2></Col>
                    </Row>
                    {events.map((event, index) => (
                        <Row className="grid-line" key={index}>
                            <Col className="grid-line"><p>{event.name}</p></Col>
                            <Col className="grid-line"><p>{event.location}</p></Col>
                            <Col className="grid-line"><p>{formatDate(event.date)}</p></Col>
                            <Col className="grid-line"><p>{event.registered}</p></Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    )
}
