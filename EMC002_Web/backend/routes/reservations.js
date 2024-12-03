import express from 'express';
import Reservation from '../models/Reservation.js';

const router = express.Router();

// Get all reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Error fetching reservations", error });
    }
});

// Create a new reservation
router.post('/', async (req, res) => {
    const { code, room, total, name, status, booked, availableRooms, location } = req.body;

    const newReservation = new Reservation({
        code,
        room,
        total,
        name,
        status,
        booked,
        availableRooms,
        location,
    });

    try {
        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(500).json({ message: "Error creating reservation", error });
    }
});

export default router;