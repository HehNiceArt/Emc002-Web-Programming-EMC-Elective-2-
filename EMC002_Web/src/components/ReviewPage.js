import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/ReviewPage.css";

function ReviewPage() {
  const navigate = useNavigate();

  const handleRoomClick = (roomId) => {
    navigate("/roomview", { state: { roomId } });
  };

  const renderRoomRow = (roomData) => (
    <tr>
      {roomData.map((room, index) => (
        <td key={index}>
          <img
            src={room.image}
            alt={room.name}
            onClick={() => handleRoomClick(room.id)}
            className="roomImage"
          />
          <p>{room.name}</p>
        </td>
      ))}
    </tr>
  );

  const rooms = [
    [
      {
        id: 1,
        name: "Backroom",
        image:
          "https://i.pinimg.com/564x/ca/89/1c/ca891c020ab2de8e1cef204583e00bde.jpg",
      },
      {
        id: 2,
        name: "Bedroom",
        image:
          "https://i.pinimg.com/564x/0d/85/51/0d8551b6acf18b5d889416c227665df8.jpg",
      },
      {
        id: 3,
        name: "Symposium",
        image:
          "https://i.pinimg.com/564x/2e/83/cd/2e83cd30d0fc588fca06d2ab907def86.jpg",
      },
    ],
    [
      {
        id: 4,
        name: "Cinema",
        image:
          "https://i.pinimg.com/736x/df/9d/e4/df9de4a240708ba572c60b42c1effbf2.jpg",
      },
      {
        id: 5,
        name: "Subway",
        image:
          "https://i.pinimg.com/564x/81/b6/8d/81b68dad0e5fdfcec266a51fc06325de.jpg",
      },
      {
        id: 6,
        name: "Mall",
        image:
          "https://i.pinimg.com/564x/e0/21/f3/e021f3b2abb63c8229ff10ee008cccc4.jpg",
      },
    ],
    [
      {
        id: 7,
        name: "Hallway",
        image:
          "https://i.pinimg.com/564x/b0/3b/2d/b03b2dd43bf560dedd73aebb5caa59a2.jpg",
      },
      {
        id: 8,
        name: "Gym",
        image:
          "https://i.pinimg.com/564x/bb/94/50/bb94501fceaacff9078ad785f02d2d2f.jpg",
      },
      {
        id: 9,
        name: "Cafe",
        image:
          "https://i.pinimg.com/564x/75/e2/79/75e279cad00ac2871d863bfafa491857.jpg",
      },
    ],
  ];

  return (
    <div id="RevPage">
      <div id="reviews">
        <table>
          <tbody>
            {rooms.map((roomRow, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {renderRoomRow(roomRow)}{" "}
                {}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReviewPage;
