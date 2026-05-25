import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProfileDrawer.css";
import profilePic from "../../assets/icons/HomeIcons/profile_icon.png";

const menuItems = [
  { icon: "🛍️", label: "My Orders", path: "/orders" },
  { icon: "👤", label: "My Profile", path: "/myProfile" },
  { icon: "📍", label: "Delivery Address", path: "/address" },
  { icon: "💳", label: "Payment Methods", path: "/payment" },
  { icon: "📞", label: "Contact Us", path: "/contact" },
  { icon: "💬", label: "Help & FAQs", path: "/help" },
  { icon: "⚙️", label: "Settings", path: "/settings" },
  { icon: "🚪", label: "Log Out", path: "/" },
];

const ProfileDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    onClose && onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="pd-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Left peeking area */}
          <div className="pd-peek" onClick={onClose} />

          {/* Drawer */}
          <motion.div
            className="pd-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* User info */}
            <div className="pd-user">
              <img src={profilePic} alt="profile" className="pd-avatar" />
              <div>
                <h3 className="pd-name">John Smith</h3>
                <p className="pd-email">Loremipsum@email.com</p>
              </div>
            </div>

            {/* Menu items */}
            <div className="pd-menu">
              {menuItems.map((item, i) => (
                <div key={i}>
                  <button
                    className="pd-menu-item"
                    onClick={() => handleNav(item.path)}
                  >
                    <span className="pd-menu-icon">{item.icon}</span>
                    <span className="pd-menu-label">{item.label}</span>
                  </button>
                  {i < menuItems.length - 1 && <div className="pd-divider" />}
                </div>
              ))}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProfileDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ProfileDrawer;