import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CancelOrder.css";
import Navbar from "../Navbar/Navbar";

const reasons = [
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
];

const CancelOrder = () => {
  const [selected, setSelected] = useState(null);
  const [others, setOthers] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () =>{
    setSubmitted(true);
    setTimeout(() => navigate("/orders"), 2000);
  }
  if (submitted) {
    return (
      <div className="co-screen">
        <div className="co-card co-success">
          <button className="co-back" onClick={() => navigate(-1)}>‹</button>

          <div className="co-success-icon">
            <div className="co-circle-outer">
              <div className="co-circle-inner" />
            </div>
          </div>

          <h2 className="co-success-title">¡Order Cancelled!</h2>
          <p className="co-success-sub">
            Your order has been successfully cancelled
          </p>

          <p className="co-success-footer">
            If you have any question reach directly to our customer support
          </p>
          <div className="co-success-navbar">
          <Navbar />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="co-screen">
      <div className="co-card">

        {/* Header */}
        <div className="co-header">
          <button className="co-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="co-header-title">Cancel Order</h2>
        </div>

        {/* Body */}
        <div className="co-body">
          <p className="co-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque congue lorem, vel tincidunt tortor.
          </p>

          {/* Reasons */}
          <div className="co-reasons">
            {reasons.map((reason, i) => (
              <div key={i}>
                <button
                  className="co-reason-item"
                  onClick={() => setSelected(i)}
                >
                  <span className="co-reason-text">{reason}</span>
                  <span className={`co-radio ${selected === i ? "selected" : ""}`} />
                </button>
                <div className="co-divider" />
              </div>
            ))}
          </div>

          {/* Others */}
          <p className="co-others-label">Others</p>
          <textarea
            className="co-textarea"
            placeholder="Others reason..."
            value={others}
            onChange={(e) => setOthers(e.target.value)}
          />

          {/* Submit */}
          <button
            className="co-btn-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default CancelOrder;