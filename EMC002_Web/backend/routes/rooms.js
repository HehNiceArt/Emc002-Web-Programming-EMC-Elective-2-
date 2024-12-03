import express from 'express';
import Room from '../models/Room.js'; // Adjust the model path as necessary

const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find(); // Fetch rooms from the database
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: "Error fetching rooms", error });
    }
});
router.post('/', async (req, res) => {
    const { type, capacity, price, amenities, checkInQuantity, checkOutQuantity } = req.body;

    const newRoom = new Room({
        type,
        capacity,
        price,
        amenities,
        checkInQuantity,
        checkOutQuantity,
    });

    try {
        const savedRoom = await newRoom.save();
        res.status(201).json(savedRoom); // Return the created room
    } catch (error) {
        res.status(500).json({ message: "Error creating room", error });
    }
});
export default router;