import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./DeliveryAddress.css";
import Navbar from "../Navbar/Navbar";
import HomeIcon from "../../assets/icons/HomeIcon.png";
const initialAddresses = [
  { id: 1, name: "My home", address: "778 Locust View Drive Oakland, CA" },
  { id: 2, name: "My Office", address: "778 Locust View Drive Oakland, CA" },
  { id: 3, name: "Parent's House", address: "778 Locust View Drive Oakland, CA" },
];

const DeliveryAddress = () => {
  const [addresses] = useState(initialAddresses);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="da-screen">
      <div className="da-card">

        <div className="da-header">
          <button className="da-back" onClick={() => navigate('/home')}>‹</button>
          <h2 className="da-header-title">Delivery Address</h2>
        </div>

        <div className="da-body">
          <div className="da-list">
            {addresses.map((item) => (
              <div key={item.id}>
                <button
                  className="da-item"
                  onClick={() => setSelected(item.id)}
                >
                  <div className="da-item-left">
                    <div className="da-icon-wrap">
                        <img src={HomeIcon} alt="home icon" />
                    </div>
                    <div>
                      <p className="da-item-name">{item.name}</p>
                      <p className="da-item-address">{item.address}</p>
                    </div>
                  </div>
                  <span className={`da-radio ${selected === item.id ? "active" : ""}`} />
                </button>
                <div className="da-divider" />
              </div>
            ))}
          </div>

          <button
            className="da-btn-add"
            onClick={() => navigate("/addaddress")}
          >
            Add New Address
          </button>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

DeliveryAddress.propTypes = { children: PropTypes.node };

export default DeliveryAddress;