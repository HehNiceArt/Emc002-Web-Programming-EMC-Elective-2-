import express from 'express';
import Event from '../models/Event.js'; // Adjust the model path as necessary

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find(); // Fetch events from the database
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "Error fetching events", error });
    }
});
router.post('/', async (req, res) => {
    const { name, date, location, description, registered, cost } = req.body;

    const newEvent = new Event({
        name,
        date,
        location,
        description,
        registered,
        cost
    });

    try {
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent); // Return the created event
    } catch (error) {
        res.status(500).json({ message: "Error creating event", error });
    }
});
export default router;