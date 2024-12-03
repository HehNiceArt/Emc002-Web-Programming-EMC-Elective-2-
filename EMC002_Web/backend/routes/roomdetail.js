import express from "express";
import RoomDetail from "../models/RoomDetail.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const roomdetail = await RoomDetail.find();
    res.json(roomdetail);
  } catch (error) {
    res.status(500).json({ message: "Error fetching roomdetail", error });
  }
});

router.post("/", async (req, res) => {
  const { id, name, image, description } = req.body;

  const newRoomDetail = new RoomDetail({
    id,
    name,
    image,
    description,
  });

  try {
    const savedRoomDetail = await newRoomDetail.save();
    res.status(201).json(savedRoomDetail);
  } catch (error) {
    res.status(500).json({ message: "Error creating room", error });
  }
});

export default router;
