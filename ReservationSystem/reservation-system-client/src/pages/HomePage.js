import React from "react";
import PreLoginNavbar from "../components/PreLoginNavbar"; // Assuming Navbar.js is in the same directory
import "../App.css"; // General styles

function HomePage() {
    return (
        <div className="HomePage">
            <PreLoginNavbar />
            {/* Insert Navbar here */}

            <main className="main-content">
                <h2>Your Reservation Journey Starts Here</h2>
                <p>
                    Easily book reservations for hotels, restaurants, and events. Just a few clicks away!
                </p>
                <button
                    className="cta-button"
                    onClick={() => alert("Redirecting to Reservations Page...")}
                >
                    Start Reservation
                </button>

            </main>
        </div>
    );
}

export default HomePage;
