import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import Navbar from "../Navbar/Navbar";
import bell from "../../assets/icons/bellicon.png";
import key from "../../assets/icons/keyicon.png";
import user from "../../assets/icons/usericon.png";
const notificationToggles = [
  { id: "general", label: "General Notification", default: true },
  { id: "sound", label: "Sound", default: true },
  { id: "soundCall", label: "Sound Call", default: true },
  { id: "vibrate", label: "Vibrate", default: false },
  { id: "specialOffers", label: "Special Offers", default: false },
  { id: "payments", label: "Payments", default: false },
  { id: "promo", label: "Promo and discount", default: false },
  { id: "cashback", label: "Cashback", default: false },
];

const Settings = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);
  const [toggles, setToggles] = useState(
    notificationToggles.reduce((acc, item) => {
      acc[item.id] = item.default;
      return acc;
    }, {})
  );

  const handleToggle = (id) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const menuItems = [
    { id: "notification", icon: bell, label: "Notification Setting" },
    { id: "password", icon: key, label: "Password Setting" },
    { id: "delete", icon: user, label: "Delete Account" },
  ];

  return (
    <div className="st-screen">
      <div className="st-card">

        <div className="st-header">
          <button className="st-back" onClick={() => navigate("/home")}>‹</button>
          <h2 className="st-header-title">Settings</h2>
        </div>

        <div className="st-body">

          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                className="st-item"
                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
              >
                <div className="st-item-left">
                  <div className="st-item-icon"><img src={item.icon} alt="icons" /></div>
                  <span className="st-item-label">{item.label}</span>
                </div>
                <span className="st-chevron">
                  {expanded === item.id ? "∧" : "∨"}
                </span>
              </button>

              {/* Notification expanded */}
              {expanded === "notification" && item.id === "notification" && (
                <div className="st-expanded">
                  {notificationToggles.map((toggle) => (
                    <div key={toggle.id} className="st-toggle-item">
                      <span className="st-toggle-label">{toggle.label}</span>
                      <button
                        className={`st-toggle ${toggles[toggle.id] ? "on" : ""}`}
                        onClick={() => handleToggle(toggle.id)}
                      >
                        <div className="st-toggle-thumb" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Password expanded */}
              {expanded === "password" && item.id === "password" && (
                <div className="st-expanded">
                  <button
                    className="st-nav-btn"
                    onClick={() => navigate("/PasswordSettings")}
                  >
                    Change Password →
                  </button>
                </div>
              )}

              {/* Delete account expanded */}
              {expanded === "delete" && item.id === "delete" && (
                <div className="st-expanded">
                  <button
                    className="st-delete-btn"
                    onClick={() => navigate("/")}
                  >
                    Delete My Account
                  </button>
                </div>
              )}

              <div className="st-divider" />
            </div>
          ))}

        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Settings;