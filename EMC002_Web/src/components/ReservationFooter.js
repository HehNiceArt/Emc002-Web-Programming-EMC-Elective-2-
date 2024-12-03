import React from "react";
import "./css/Reservation.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Footer1">
      <div className="Footer2">
        <p className="FooterText">
          <b>© 2024 Liminal Escapes</b> Powered by Backrooms
        </p>
      </div>
      {/* Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop}>
        <b>Back to Top</b>
      </button>
    </div>
  );
}
