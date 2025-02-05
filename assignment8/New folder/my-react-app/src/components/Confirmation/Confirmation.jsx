// components/Confirmation.jsx
import { useLocation } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const { state } = useLocation();
  const { bookingId, name, email, mobile } = state || {};

  return (
    <div className="confirmation-container">
      <h1>🎉 Booking Confirmed!</h1>
      <div className="confirmation-details">
        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile:</strong> {mobile}</p>
      </div>
    </div>
  );
};

export default Confirmation;