import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Help.css";
import Navbar from "../Navbar/Navbar";

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="hp-screen">
      <div className="hp-card">

        <div className="hp-header">
          <button className="hp-back" onClick={() => navigate("/home")}>‹</button>
          <h2 className="hp-header-title">Help</h2>
        </div>

        <div className="hp-body">

          <p className="hp-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent pellentesque congue lorem, vel tincidunt tortor.
          </p>

          <div className="hp-divider" />

          <button
            className="hp-item"
            onClick={() => navigate("/support")}
          >
            <div className="hp-item-info">
              <p className="hp-item-title">Help with the order</p>
              <p className="hp-item-sub">Support</p>
            </div>
            <span className="hp-chevron">›</span>
          </button>

          <div className="hp-divider" />

          <button
            className="hp-item"
            onClick={() => navigate("/ContactUs/FAQ")}
          >
            <div className="hp-item-info">
              <p className="hp-item-title">Help center</p>
              <p className="hp-item-sub">General Information</p>
            </div>
            <span className="hp-chevron">›</span>
          </button>

          <div className="hp-divider" />

        </div>

        <Navbar />
      </div>
    </div>
  );
};

Help.propTypes = { children: PropTypes.node };
export default Help;