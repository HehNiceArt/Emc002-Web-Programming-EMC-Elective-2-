import mongoose from "mongoose";

// Define the schema for the Amenity
const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  room: {
    type: Number,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
});

// Create the model from the schema
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
