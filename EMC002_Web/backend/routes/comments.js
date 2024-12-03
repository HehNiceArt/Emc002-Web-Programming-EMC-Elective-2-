import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// Get all comments
router.get("/comment", async (req, res) => {
  try {
    const comments = await Comment.find(); // Fetch comments from the database
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
});

// Get all comments with roomId
// /comment/:roomId
// [:roomId] <- route parameter (req.params)
// req <- incoming
// res <- outgoing
// frotnend -> req -> api shit -> res -> frontend
router.get("/comment/:roomId", async (req, res) => {
  try {
    const comments = await Comment.find({
      room: req.params.roomId,
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
});

// Create a new comment
router.post("/comment", async (req, res) => {
  try {
    const { comment, room, roomName } = req.body;

    const newComment = new Comment({
      comment,
      room,
      roomName,
    });

    await newComment.save();
    res.status(201).json({ message: "Reservation created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error });
  }
});

export default router;
