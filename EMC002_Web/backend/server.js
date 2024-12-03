import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import eventsRoutes from "./routes/events.js";
import reservationsRoutes from "./routes/reservations.js";
import roomsRoutes from "./routes/rooms.js";
import amenitiesRoutes from "./routes/amenities.js";
import findReservationRoutes from "./routes/newReservationRoute.js";
import roomDetailRoutes from "./routes/roomdetail.js";
import roomViewRoute from "./routes/roomViewRoute.js";
import commentRoute from "./routes/comments.js";


const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();
app.use(cors());
app.use(express.json());

if (!process.env.MONGODB_URI) {
  console.error(
    "MONGODB_URI is not defined! Please set it in your environment variables."
  );
  process.exit(1);
}
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.use("/api/events", eventsRoutes);
app.use("/api/reservations", reservationsRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/newReservationRoute", findReservationRoutes);
app.use("/api/amenities", amenitiesRoutes);
app.use("/api/roomdetail", roomDetailRoutes);
app.use("/api/roomView", roomViewRoute);
app.use("/api/commentRoute", commentRoute);
app.use("/api", authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
