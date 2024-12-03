import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Update the import to useNavigate
import "../components/css/RoomView.css";
import Dropdown from "react-bootstrap/Dropdown";
import Calendar from "../components/Calendar";
import { useAuth } from "../AuthContext"; // Import the authentication context

export default function RoomView() {
  const { isAuthenticated } = useAuth(); // Get authentication status from context
  const [roomDetail, setRoomDetail] = useState([]);
  const [comments, setComments] = useState([]);
  const [idk, setidk] = useState({ image: "", description: "", name: "" });

  const location = useLocation();
  const { roomId } = location.state || {};

  const [formData, setFormData] = useState({
    location: "",
    checkInDate: "",
    checkOutDate: "",
    numRooms: 0,
    numAdults: 0,
    numChildren: 0,
    promoCode: "",
  });

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    // Hardcode roomId to 1 for testing
    const testRoomId = "1";

    const fetchRoomDetail = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/roomdetail");
        if (!response.ok) {
          console.error("Response is not ok!");
          return;
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setRoomDetail(data);
          if (roomId) {
            const room = data[roomId];
            setidk({
              image: room.image,
              description: room.description,
              name: room.name,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    const getRoomComments = async () => {
      try {
        // 1. get from backend /comments/roomId
        const response = await fetch(
          `http://localhost:3001/api/commentRoute/comment/${roomId}`
        );
        if (!response.ok) return;

        const data = await response.json();
        // 2. add data from backend to comments state
        setComments(data);
      } catch (error) {
        console.error("Error fetching room comments:", error);
      }
    };

    fetchRoomDetail();
    getRoomComments();
  }, [roomId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Room ID: ", roomId);
    console.log("Form Data: ", formData);

    const formWithRoomId = { ...formData, roomId };
    console.log("Form with roomId: ", formWithRoomId);

    if (
      !formData.location ||
      !formData.checkInDate ||
      !formData.checkOutDate ||
      !formData.numRooms ||
      !formData.numAdults
    ) {
      return;
    }

    if (new Date(formData.checkInDate) >= new Date(formData.checkOutDate)) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/roomView/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formWithRoomId),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create reservation");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Use navigate instead of history.push
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${idk.image.replace(
          /['"]/g,
          ""
        )})`,
        backgroundSize: "cover",
        height: "150vh",
      }}
    >
      <div className="upperRow">
        <img src={idk.image} alt="" className="overlayText" />
        <div className="infoBox">
          <h2>{idk.name}</h2>
          <div>
            <button className="tags">Stay</button>
            <button className="tags">Concept</button>
            <button className="tags">Liminal</button>
            <button className="tags">Experience</button>
          </div>
          <p>{idk.description}</p>
          <div className="reviewsBox">
            <p style={{ fontSize: "25px" }}>Customer Reviews</p>
            {/* {comments &&
              comments.map((c, i) => {
                return (
                  <p key={i} className="comment">
                    {c.comment}
                  </p>
                );
              })} */}

            {comments.length > 0 && (
              <p>{comments[comments.length - 1].comment}</p>
            )}
          </div>
        </div>
      </div>

      <div className="lowerRow">
        <div className="termsBox">
          <p
            style={{ display: "inline", marginRight: "65px", fontSize: "11px" }}
          >
            Offer Details
          </p>
          <p style={{ display: "inline" }}>Terms and Conditions</p>
          <p style={{ marginTop: "10px" }}>
            Get ready to elevate your Liminal experience to dazzling heights!
          </p>
          <p>
            Immerse yourself in the magic of Liminal Escapes world-renowned
            liminal rooms from the comfort of your own haven. Enjoy panoramic
            views of the liminal spaces as bursts of muted colours and sparkles
            dance across the night sky.
          </p>
          <p>Your bucket-list Liminal Spaces begins here!</p>
          <p>
            This offer includes: <br />
            - Overnight accommodation <br />- High-speed and restriction-free
            WiFi and broadband internet access
          </p>
          <p>Liminal Escapes Cares - Your Well-being In Our Care</p>
        </div>

        <div className="bookingBox">
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            Book This Offer
          </p>
          <p style={{ fontSize: "20px", marginBottom: "0px" }}>
            From PHP 1,999 Average Per Night
          </p>
          <div className="blackLine"></div>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            Plan Your Visit
          </p>
          <div className="bookingDetails">
            {/* Location Dropdown */}
            <Dropdown className="bookingLocation dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Location <br />
                {formData.location || "Select Location"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({ ...formData, location: "Edsa, Cubao" })
                  }
                >
                  Edsa, Cubao
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({ ...formData, location: "North Edsa" })
                  }
                >
                  North Edsa
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({ ...formData, location: "Edsa, Guadalupe" })
                  }
                >
                  Edsa, Guadalupe
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="CICODateContainer">
              <div id="CIContainer">
                <label className="CIContainer">
                  Check-in Date
                  <br />
                  <input
                    id="CIDate"
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>

              <div id="COContainer">
                <label className="COContainer">
                  Check-out Date
                  <br />
                  <input
                    id="CODate"
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            </div>

            <Dropdown className="bookingRooms">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Rooms
                <br />
                {formData.numRooms} Room{formData.numRooms > 1 ? "s" : ""},{" "}
                {formData.numAdults} Adult{formData.numAdults > 1 ? "s" : ""},{" "}
                {formData.numChildren} Child
                {formData.numChildren > 1 ? "ren" : ""}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numRooms: formData.numRooms + 1,
                    })
                  }
                >
                  Room +
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numRooms: formData.numRooms - 1,
                    })
                  }
                >
                  Room -
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numAdults: formData.numAdults + 1,
                    })
                  }
                >
                  Adult +
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numAdults: formData.numAdults - 1,
                    })
                  }
                >
                  Adult -
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numChildren: formData.numChildren + 1,
                    })
                  }
                >
                  Child +
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numChildren: formData.numChildren - 1,
                    })
                  }
                >
                  Child -
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {isAuthenticated ? (
              <button className="bookButton" onClick={handleSubmit}>
                Book Now
              </button>
            ) : (
              <button className="bookButton" onClick={handleLoginRedirect}>
                Log in to book
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
