import React from "react";
import "./Timeout.css";

export default function Timeout() {
    return (
        <div className="timeout">
            <h3>
                Session timeout !
            </h3>
            <p>
                Sorry, the test has been timeout.
            </p>
            <span>
                Try again next time.
            </span>
        </div>
    )
}