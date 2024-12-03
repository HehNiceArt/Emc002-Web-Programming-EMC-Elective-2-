import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home-Container">
      <div className="Home-Hero">
        <div className="Home-Content">
          <h1>Welcome</h1>
        </div>
      </div>
      <div className="Home-Details">
        <div className="Home-Summary">
          <img
            src="https://sm.ign.com/ign_in/feature/h/halo-infin/halo-infinites-open-world-has-upgrades-to-discover-places-to_g2wn.jpg"
            alt="hero"
          />
        </div>
        <div className="Home-Text">
          <h1>Welcome to My Site</h1>
        </div>
      </div>
    </div>
  );
}
