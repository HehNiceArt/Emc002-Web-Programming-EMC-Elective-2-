import mongoose from 'mongoose';

// Define the schema for the Amenity
const amenitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 0, // Default count is 0
    },
    roomService: {
        type: Number,
        default: 0,
    },
    internetAccess: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the model from the schema
const Amenity = mongoose.model('Amenity', amenitySchema);

export default Amenity;

