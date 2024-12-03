import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Starrate() {
    const [rating, setRating] = useState(0); 
    return (
        <div style={{ display: "flex", flexDirection: "row",  justifyContent: "center"}}>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;

                return (
                    
                    <div key={index} style={{ cursor: "pointer" }}>
                        {/* Star turns white when click  */}
                        <FaStar
                            size={60}
                            color={currentRate <= rating ? "White" : "grey"}
                            onClick={() => setRating(currentRate)}
                        />
                    </div>
                );
            })}
        </div>
    );
}
