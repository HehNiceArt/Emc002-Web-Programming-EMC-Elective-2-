import React from "react";
import Navbar from "../components/Navbar";
import RoomReservationComponent from "../components/RoomReservationComponent";
import ReservationFooter from "../components/ReservationFooter";

export default function RoomReservationPage() {
  return (
    <div>
      <RoomReservationComponent />
      <ReservationFooter />
    </div>
  );
}
