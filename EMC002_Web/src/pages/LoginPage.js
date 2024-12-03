import React from "react";
import Login from "../components/Login";

/*Andrei Quirante*/
export default function LoginPage({ setIsAuthenticated }) {
    return (
        <div>
            <Login setIsAuthenticated={setIsAuthenticated} />
        </div>
    )
}