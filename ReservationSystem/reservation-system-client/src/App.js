import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservationList from './components/ReservationList';  // Örnek bir bileşen
import ReservationForm from './components/ReservationForm';  // Başka bir bileşen
import HomePage from "./pages/HomePage"; // Dosya yolunu ayarlayın

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
                <Routes>
                    {/* Ana sayfa rotası */}
                    <Route path="/" element={<HomePage />} />

                    {/* Rezervasyon listesi rotası */}
                    <Route path="/reservations" element={<ReservationList reservations={reservations} />} />

                    {/* Yeni rezervasyon ekleme formu rotası */}
                    <Route path="/add" element={<ReservationForm />} />
                </Routes>
        </Router>
    );
};

export default App;
