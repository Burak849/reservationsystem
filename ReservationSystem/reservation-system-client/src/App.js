import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservationList from './components/ReservationList';  // Örnek bir bileşen
import ReservationForm from './components/ReservationForm';  // Başka bir bileşen

const App = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // API'den verileri çekmek için axios kullanabiliriz
        axios.get('http://localhost:5141/api/reservations') // API'nin adresi
            .then(response => {
                setReservations(response.data);  // Veriyi state'e aktar
            })
            .catch(error => {
                console.error('Error fetching reservations:', error);
            });
    }, []);

    return (
        <Router>
            <div className="App">
                <h1>Reservation System</h1>
                <Routes>
                    <Route path="/" element={<ReservationList reservations={reservations} />} />
                    <Route path="/add" element={<ReservationForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
