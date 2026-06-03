import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProfileDrawer.css";
import profilePic from "../../assets/icons/HomeIcons/profile_icon.png";
import bag from "../../assets/icons/profiledraw/bag.png";
import card from "../../assets/icons/profiledraw/card.png";
import help from "../../assets/icons/profiledraw/help.png";
import location from "../../assets/icons/profiledraw/location.png";
import logout from "../../assets/icons/profiledraw/logout.png";
import phone from "../../assets/icons/profiledraw/phone.png";
import user from "../../assets/icons/profiledraw/user.png";
import settings from "../../assets/icons/profiledraw/settings.png";
const menuItems = [
  { icon: bag, label: "My Orders", path: "/orders" },
  { icon: user, label: "My Profile", path: "/myProfile" },
  { icon: location, label: "Delivery Address", path: "/address" },
  { icon: card, label: "Payment Methods", path: "/paymentMethods" },
  { icon: phone, label: "Contact Us", path: "/ContactUs/Contact" },
  { icon: help, label: "Help & FAQs", path: "/ContactUs/FAQ" },
  { icon: settings, label: "Settings", path: "/Settings" },
  { icon: logout, label: "Log Out", path: "/" },
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
                    <span className="pd-menu-icon"><img src={item.icon} alt="icons" /></span>
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