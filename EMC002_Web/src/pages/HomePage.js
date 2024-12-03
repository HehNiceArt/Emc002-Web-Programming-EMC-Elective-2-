import React, { useState } from "react";
import Component2 from "../components/Component2";
import HomePictures from "../components/HomePictures";
import Footer from "../components/Footer";

/* Cicero Barasi */
export default function HomePage() {
    return (
        <div>
            {/* Home Page */}
            <HomePictures />
            <Component2 />
            <Footer />
        </div>
    )
}