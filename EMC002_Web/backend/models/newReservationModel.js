import mongoose from "mongoose";

const findReservationSchema = new mongoose.Schema({
  branchLocation: { type: String, required: true },
  lengthOfStay: { type: Number, required: true },
  checkInDate: { type: Date, required: true },
  roomType: { type: String, required: true },
  checkOutDate: { type: Date, required: true },
  notes: { type: String },
  fullName: { type: String, required: true },
  contactNumber: { type: Number, required: true },
  email: { type: String, required: true },
  agreeTerms: { type: Boolean, required: true },
});

const findReservation = mongoose.model(
  "findreservation",
  findReservationSchema
);
export default findReservation;
