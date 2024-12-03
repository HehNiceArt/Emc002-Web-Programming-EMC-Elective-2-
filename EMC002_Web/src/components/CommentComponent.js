import React, { useState } from "react";
import "../components/css/Comments.css";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const CommentForm = () => {
  const [commentData, setCommentData] = useState({
    comment: "",
    room: 0,
    roomName: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(commentData);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/commentRoute/comment",
        commentData
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };
  return (
    <div className="commentSection">
      <p className="leaveComment">Leave a Comment</p>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          padding: "0%",
          minHeight: "0%",
          textAlign: "left",
          marginTop: "0%",
        }}
      >
        <div className="commentBoxDiv">
          <textarea
            className="commentBox"
            name="comment"
            value={commentData.comment}
            onChange={handleInputChange}
          ></textarea>
          <Dropdown style={{ paddingLeft: "40px" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Room <br />
              {commentData.roomName || "Select Room"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() =>
                  setCommentData({
                    ...commentData,
                    room: 1,
                    roomName: "Backroom",
                  })
                }
              >
                Backroom
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setCommentData({
                    ...commentData,
                    room: 2,
                    roomName: "Bedroom",
                  })
                }
              >
                Bedroom
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setCommentData({
                    ...commentData,
                    room: 3,
                    roomName: "Symposium",
                  })
                }
              >
                Symposium
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setCommentData({
                    ...commentData,
                    room: 4,
                    roomName: "Cinema",
                  })
                }
              >
                Cinema
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() =>
                  setCommentData({
                    ...commentData,
                    room: 5,
                    roomName: "Subway",
                  })
                }
              >
                Subway
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setCommentData({ ...commentData, room: 6, roomName: "Mall" })
                }
              >
                Mall
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setCommentData({
                    ...commentData,
                    room: 7,
                    roomName: "Hallway",
                  })
                }
              >
                Hallway
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setCommentData({ ...commentData, room: 8, roomName: "Gym" })
                }
              >
                Gym
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setCommentData({ ...commentData, room: 9, roomName: "Cafe" })
                }
              >
                Cafe
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
