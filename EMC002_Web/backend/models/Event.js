import mongoose from 'mongoose';

// Define the schema for the Event
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    registered: {
        type: Number,
        default: 0,
    },
    cost: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the model from the schema
const Event = mongoose.model('Event', eventSchema);

export default Event;

