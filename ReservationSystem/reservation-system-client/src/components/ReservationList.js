import React from 'react';

const ReservationList = ({ reservations }) => {
    return (
        <div>
            <h2>Reservations</h2>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        {reservation.name} - {reservation.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;
