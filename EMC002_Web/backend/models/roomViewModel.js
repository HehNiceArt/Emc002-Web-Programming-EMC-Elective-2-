import mongoose from "mongoose";

const roomViewSchema = new mongoose.Schema(
  {
    roomId: { type: String, required: true },
    location: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    numRooms: { type: Number, required: true },
    numAdults: { type: Number, required: true },
    numChildren: { type: Number, default: 0 },
    promoCode: { type: String, default: "" },
  },
  { timestamps: true }
);

const RoomView = mongoose.model("RoomView", roomViewSchema);

export default RoomView;
