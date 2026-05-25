import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./TrackOrder.css";
import Navbar from "../Navbar/Navbar";

const steps = [
  { id: 1, label: "Your order has been accepted", time: "2 min", done: true },
  { id: 2, label: "The restaurant is preparing your order", time: "5 min", done: true },
  { id: 3, label: "The delivery is on his way", time: "10 min", done: false },
  { id: 4, label: "Your order has been delivered", time: "8 min", done: false },
];

const TrackOrder = () => {
  const navigate = useNavigate();

  return (
    <div className="to-screen">
      <div className="to-card">

        {/* Header */}
        <div className="to-header">
          <button className="to-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="to-header-title">Delivery time</h2>
        </div>

        {/* Body */}
        <div className="to-body">

          {/* Shipping address */}
          <div className="to-section">
            <h3 className="to-section-title">Shipping Address</h3>
            <div className="to-address-box">
              778 Locust View Drive Oaklanda, CA
            </div>
          </div>

          {/* Map placeholder */}
          <div className="to-map">
            <svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect width="340" height="180" fill="#e8e8e8"/>

              {/* Roads */}
              <rect x="0" y="80" width="340" height="20" fill="#fff"/>
              <rect x="120" y="0" width="20" height="180" fill="#fff"/>
              <rect x="240" y="0" width="20" height="180" fill="#fff"/>
              <rect x="0" y="140" width="340" height="20" fill="#fff"/>
              <rect x="0" y="30" width="340" height="15" fill="#fff"/>

              {/* Green blocks */}
              <rect x="10" y="45" width="100" height="30" fill="#b8e0b0" rx="4"/>
              <rect x="145" y="45" width="85" height="30" fill="#b8e0b0" rx="4"/>
              <rect x="10" y="105" width="100" height="30" fill="#b8e0b0" rx="4"/>
              <rect x="145" y="105" width="85" height="30" fill="#b8e0b0" rx="4"/>
              <rect x="265" y="105" width="65" height="30" fill="#b8e0b0" rx="4"/>

              {/* Blue area top right */}
              <rect x="265" y="0" width="75" height="28" fill="#a8d4e8" rx="4"/>

              {/* Route line */}
              <polyline
                points="80,90 160,90 160,130 220,130"
                fill="none"
                stroke="#E95322"
                strokeWidth="2.5"
                strokeDasharray="6,3"
              />

              {/* Pin 1 - start */}
              <circle cx="80" cy="90" r="8" fill="#E95322"/>
              <circle cx="80" cy="90" r="4" fill="#fff"/>

              {/* Pin 2 - end */}
              <circle cx="220" cy="130" r="8" fill="#E95322"/>
              <circle cx="220" cy="130" r="4" fill="#fff"/>
            </svg>
          </div>

          {/* Delivery time */}
          <div className="to-delivery-row">
            <div>
              <p className="to-delivery-title">Delivery Time</p>
              <p className="to-delivery-sub">Estimated Delivery</p>
            </div>
            <p className="to-delivery-time">25 mins</p>
          </div>
          <div className="co2-divider" />
          {/* Steps */}
          <div className="to-steps">
            {steps.map((step) => (
              <div className="to-step" key={step.id}>
                <span className={`to-step-dot ${step.done ? "done" : ""}`} />
                <p className="to-step-label">{step.label}</p>
                <p className="to-step-time">{step.time}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="to-actions">
            <button
              className="to-btn-return"
              onClick={() => navigate("/home")}
            >
              Return Home
            </button>
            <button
              className="to-btn-track"
              onClick={() => navigate("/orders")}
            >
              Track Order
            </button>
          </div>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

TrackOrder.propTypes = { children: PropTypes.node };
export default TrackOrder;