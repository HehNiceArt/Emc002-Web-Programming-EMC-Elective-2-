import React from "react";

import "./css/Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="Footer-Container">
      <div className="Footer-Contents">
        <div className="Footer-Links">
          {/* <h1>Find & Book</h1>
                    <li className="Links"><Link to='/OurDestinations'>Our Destinations</Link></li>
                    <li className="Links"><Link to='/Reservation'>Find a Reservation</Link></li>
                    <li className="Links"><Link to='/MeetingsAndEvents'>Meetings & Events</Link></li>
                </div>
                <div className="Footer-Links">
                    <h1>Benefits</h1>
                    <li className="Links"><Link to='/Booking'>Free Booking</Link></li>
                    <li className="Links"><Link to='/Membership'>Join Liminal Escapes</Link></li>
                    <li className="Links"><Link to='/UserProfile'>Account overview</Link></li>
                    <li className="Links"><Link to='/FAQ'>FAQ</Link></li>
                    <li className="Links"><Link to='/ContactUs'>Contact Us</Link></li>
                </div>
                <div className="Footer-Links">
                    <h1>About Liminal Escapes</h1>
                    <li className="Links"><Link to='/AboutUs'>About Us</Link></li>
                    <li className="Links"><Link to='/Concepts'>Our Hotel Concept</Link></li>
                    <li className="Links"><Link to='/Residences'>Residences</Link></li>
                    <li className="Links"><Link to='/ContactUs'>Contact Us</Link></li> */}
        </div>
      </div>
      <div className="Footer-Trademark">
        <h1>Liminal Escapes</h1>
        <p>
          <Link to="PrivacyPolicy" className="Watermark">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="TermsAndCondition" className="Watermark">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link to="/SafetyAndSecurity" className="Watermark">
            Safety & Security
          </Link>{" "}
          |{" "}
          <Link to="SupplierCodeofConduct" className="Watermark">
            Supplier Code Of Conduct
          </Link>{" "}
          |{" "}
          <Link to="CyberSecurity" className="Watermark">
            Cyber Security{" "}
          </Link>
          <br></br>© 2024 Liminal Escapes Hotel Management Ltd. All Rights
          Reserved. ICP license: 17055189
        </p>
      </div>
    </div>
  );
}
