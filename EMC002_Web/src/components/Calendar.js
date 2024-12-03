import React from "react";
import "../components/css/Calendar.css";

export default function Calendar() {
  return (
    <div
      style={{
        display: "flex",
        width: "20vw",
        border: "2px solid black",
        borderRadius: "5px 5px 5px 5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
        }}
      >
        <label className="label" for="start" style={{ color: "white" }}>
          Check in Date:
        </label>

        <input type="date" id="start" name="trip-start" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
        }}
      >
        <label className="label" for="start" style={{ color: "white" }}>
          Check out Date:
        </label>

        <input type="date" id="start" name="trip-start" />
      </div>
    </div>
  );
}
