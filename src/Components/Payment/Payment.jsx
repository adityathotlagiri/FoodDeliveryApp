import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import "./Payment.css";
import Navbar from "../Navbar/Navbar";
import editIcon from "../../assets/icons/EditIcon.png";


const Payment = () => {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);

  const handlePayNow = () => {
    setConfirmed(true);
  };

  return (
    <div className="pay-screen">
      <div className="pay-card">

        <AnimatePresence mode="wait">
          {!confirmed ? (
            <motion.div
              key="payment"
              className="pay-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pay-header">
                <button className="pay-back" onClick={() => navigate(-1)}>‹</button>
                <h2 className="pay-header-title">Payment</h2>
              </div>

              <div className="pay-body">

                {/* Shipping address */}
                <div className="pay-section">
                  <div className="pay-section-header">
                    <h3 className="pay-section-title">Shipping Address</h3>
                    <button
                      className="pay-edit-btn"
                      onClick={() => navigate("/address")}
                    >
                      <img src={editIcon} alt="editIcon" />
                    </button>
                  </div>
                  <div className="pay-address-box">
                    778 Locust View Drive Oaklanda, CA
                  </div>
                </div>

                {/* Order summary */}
                <div className="pay-section">
                  <div className="pay-section-header">
                    <h3 className="pay-section-titleTwo">Order Summary</h3>
                    <button className="pay-edit-tag">Edit</button>
                  </div>
                  <div className="pay-order-row">
                    <div>
                      <p className="pay-order-item">Strawberry Shake</p>
                      <p className="pay-order-item">Broccoli Lasagna</p>
                    </div>
                    <div>
                      <p className="pay-order-qty">2 items</p>
                      <p className="pay-order-qty">1 items</p>
                    </div>
                    <p className="pay-order-total">$40.00</p>
                  </div>
                </div>
                <div className="co2-divider" />
                {/* Payment method */}
                <div className="pay-section">
                  <div className="pay-section-header">
                    <h3 className="pay-section-titleTwo">Payment Method</h3>
                    <button className="pay-edit-tag">Edit</button>
                  </div>
                  <div className="pay-method-row">
                    <div className="pay-method-icon">💳</div>
                    <div>
                      <p className="pay-method-name">Credit Card</p>
                    </div>
                    <p className="pay-method-number">•••••••• 43 /00 /000</p>
                  </div>
                </div>
                <div className="co2-divider" />
                {/* Delivery time */}
                <div className="pay-section">
                  <div className="pay-section-header">
                    <h3 className="pay-section-titleTwo">Delivery Time</h3>
                  </div>
                  <div className="pay-delivery-row">
                    <p className="pay-delivery-label">Estimated Delivery</p>
                    <p className="pay-delivery-time">25 mins</p>
                  </div>
                </div>
                <div className="co2-divider" />
                <button className="pay-btn-pay" onClick={handlePayNow}>
                  Pay Now
                </button>

              </div>

              <Navbar />
            </motion.div>

          ) : (

            /* Order Confirmed screen */
            <motion.div
              key="confirmed"
              className="pay-confirmed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <button className="pay-back-confirm" onClick={() => navigate("/home")}>‹</button>

              <div className="pay-circle-outer">
                <div className="pay-circle-inner" />
              </div>

              <h2 className="pay-confirmed-title">¡Order Confirmed!</h2>
              <p className="pay-confirmed-sub">
                Your order has been placed succesfully
              </p>
              <p className="pay-confirmed-delivery">
                Delivery by Thu, 29th, 4:00 PM
              </p>
              <button
                className="pay-track-btn"
                onClick={() => navigate("/TrackOrder")}
              >
                Track my order
              </button>

              <p className="pay-confirmed-footer">
                If you have any questions, please reach out directly to our customer support
              </p>

              <Navbar />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

Payment.propTypes = { children: PropTypes.node };
export default Payment;