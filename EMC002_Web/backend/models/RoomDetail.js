import mongoose from "mongoose";

const roomDetailSchema = new mongoose.Schema({
  id: {
    type: Number,
    Required: true,
  },
  name: {
    type: String,
    Required: true,
  },
  image: {
    type: String,
    Required: true,
  },
  description: {
    type: String,
    Required: true,
  },
});

const RoomDetail = mongoose.model("RoomDetail", roomDetailSchema);
export default RoomDetail;
