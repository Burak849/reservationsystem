import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newReservation = { name, date };

        axios.post('/api/reservations', newReservation)
            .then(response => {
                console.log('Reservation added:', response.data);
            })
            .catch(error => {
                console.error('Error adding reservation:', error);
            });
    };

    return (
        <div>
            <h2>Add Reservation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button type="submit">Add Reservation</button>
            </form>
        </div>
    );
};

export default ReservationForm;
