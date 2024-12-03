import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['New Booking', 'Check In', 'Check Out'],
        required: true,
    },
    booked: {
        type: Number,
        default: 0,
    },
    location: {
        type: String,
        required: true,
    },
    availableRooms: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;