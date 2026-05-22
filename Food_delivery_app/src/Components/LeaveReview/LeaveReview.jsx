import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./LeaveReview.css";
import Navbar from "../Navbar/Navbar";
import shake from "../../assets/icons/Shake.png";
import toast, { Toaster } from "react-hot-toast";

const LeaveReview = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;
  const handleSubmit = () =>{
    toast.success("Thank you for your rating! We appreciate your feedback.", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#E95322",
          color: "#fff",
          fontFamily: "Nunito, sans-serif",
          fontWeight: "700",
          borderRadius: "50px",
          padding: "12px 24px",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#E95322",
        },
      });
      setTimeout(() => navigate("/orders"), 2000);

  }
  return (
    <div className="lr-screen">
      <Toaster />
      <div className="lr-card">

        {/* Header */}
        <div className="lr-header">
          <button className="lr-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="lr-header-title">Leave a Review</h2>
        </div>

        {/* Body */}
        <div className="lr-body">

          <img
            src={order?.img || shake}
            alt={order?.name || "Food"}
            className="lr-food-img"
          />

          <h3 className="lr-food-name">{order?.name || "Your Order"}</h3>

          <p className="lr-desc">
            Wed love to know what you think of your dish.
          </p>

          {/* Stars */}
          <div className="lr-stars">
            {[1, 2, 3, 4, 5].map((star) => (
            <button
                key={star}
                className={`lr-star ${star <= (hovered || rating) ? "active" : ""}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
            >
                ★
            </button>
            ))}
          </div>

          <p className="lr-comment-label">Leave us your comment!</p>

          <textarea
            className="lr-textarea"
            placeholder="Write Review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          <div className="lr-actions">
            <button className="lr-btn-cancel" onClick={() => navigate("/orders")}>
              Cancel
            </button>
            <button className="lr-btn-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

LeaveReview.propTypes = {
  children: PropTypes.node,
};

export default LeaveReview;