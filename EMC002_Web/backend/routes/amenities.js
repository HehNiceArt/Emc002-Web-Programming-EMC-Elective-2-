import express from 'express';
import Amenity from '../models/Amenity.js';

const router = express.Router();

// Get all amenities
router.get('/', async (req, res) => {
    try {
        const amenities = await Amenity.find(); // Fetch amenities from the database
        res.json(amenities);
    } catch (error) {
        res.status(500).json({ message: "Error fetching amenities", error });
    }
});

// Create a new amenity
router.post('/', async (req, res) => {
    const { name, description, count, roomService, internetAccess } = req.body;

    const newAmenity = new Amenity({
        name,
        description,
        count,
        roomService,
        internetAccess,
    });

    try {
        const savedAmenity = await newAmenity.save();
        res.status(201).json(savedAmenity);
    } catch (error) {
        res.status(500).json({ message: "Error creating amenity", error });
    }
});

// Update an existing amenity
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, count, roomService, internetAccess } = req.body;

    try {
        const updatedAmenity = await Amenity.findByIdAndUpdate(
            id,
            { name, description, count, roomService, internetAccess },
            { new: true } // Return the updated document
        );
        res.json(updatedAmenity);
    } catch (error) {
        res.status(500).json({ message: "Error updating amenity", error });
    }
});

// Delete an amenity
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Amenity.findByIdAndDelete(id);
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: "Error deleting amenity", error });
    }
});

export default router;

