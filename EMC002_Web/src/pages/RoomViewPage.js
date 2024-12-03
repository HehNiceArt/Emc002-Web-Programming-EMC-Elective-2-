import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoomView from "../components/RoomView";
import CommentComponent from "../components/CommentComponent";
/* Cicero */
export default function RoomViewPage() {
  return (
    <div>
      <RoomView />
      <CommentComponent />
      <Footer />
    </div>
  );
}
