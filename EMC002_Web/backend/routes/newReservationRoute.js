import express from "express";
import findReservation from "../models/newReservationModel.js";
const router = express.Router();

//gawa ng reservation
router.post("/findReservation", async (req, res) => {
  const {
    branchLocation,
    lengthOfStay,
    checkInDate,
    roomType,
    checkOutDate,
    notes,
    fullName,
    contactNumber,
    email,
    agreeTerms,
  } = req.body;

  //check kung kumpleto
  if (
    !branchLocation ||
    !lengthOfStay ||
    !checkInDate ||
    !roomType ||
    !checkOutDate ||
    !fullName ||
    !contactNumber ||
    !email ||
    agreeTerms === undefined
  ) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields." });
  }

  try {
    //otw to mongo
    const newReservation = new findReservation({
      branchLocation,
      lengthOfStay,
      checkInDate: new Date(checkInDate), //para readable sa mongo
      checkOutDate: new Date(checkOutDate),
      roomType,
      notes,
      fullName,
      contactNumber,
      email,
      agreeTerms,
    });

    await newReservation.save(); //arrived at mongo

    res.status(201).json({ message: "Reservation created successfully!" });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ message: "Failed to create reservation." });
  }
});

export default router;
