import express from "express";
import RoomView from "../models/roomViewModel.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const {
      roomId,
      location,
      checkInDate,
      checkOutDate,
      numRooms,
      numAdults,
      numChildren,
      promoCode,
    } = req.body;

    if (!roomId || !checkInDate || !checkOutDate || !numRooms || !numAdults) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const reservation = new RoomView({
      roomId,
      location,
      checkInDate,
      checkOutDate,
      numRooms,
      numAdults,
      numChildren,
      promoCode,
    });

    await reservation.save();
    res.status(201).json({ message: "Reservation created successfully!" });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
