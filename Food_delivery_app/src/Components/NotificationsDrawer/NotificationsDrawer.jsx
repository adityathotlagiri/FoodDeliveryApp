import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import "./NotificationsDrawer.css";
import notification from "../../assets/icons/notification.png"
import forkSpoon from "../../assets/icons/notificationsIcons/forkandspoon.png"
import bag from "../../assets/icons/notificationsIcons/bag.png"
import deliveryBoyIcon from "../../assets/icons/notificationsIcons/DeliverBoyIcon.png"
import heart from "../../assets/icons/notificationsIcons/HeartIcon.png"
const notifications = [
  {
    id: 1,
    icon: forkSpoon,
    message: "We have added a product you might like.",
  },
  {
    id: 2,
    icon: heart,
    message: "One of your favorite is on promotion.",
  },
  {
    id: 3,
    icon: bag,
    message: "Your order has been delivered",
  },
  {
    id: 4,
    icon: deliveryBoyIcon,
    message: "The delivery is on his way",
  },
];

const NotificationsDrawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="nd-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Left peeking area */}
          <div className="nd-peek" onClick={onClose} />

          {/* Drawer */}
          <motion.div
            className="nd-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="nd-header">
              <span className="nd-bell"><img src={notification} alt="bell" /></span>
              <h2 className="nd-title">Notifications</h2>
            </div>

            <div className="nd-divider" />

            {/* Notification items */}
            <div className="nd-list">
              {notifications.map((item) => (
                <div key={item.id}>
                  <div className="nd-item">
                    <div className="nd-icon-wrap">
                      <span><img src={item.icon} alt="icons" /></span>
                    </div>
                    <p className="nd-message">{item.message}</p>
                  </div>
                  <div className="nd-divider" />
                </div>
              ))}
            </div>


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

NotificationsDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default NotificationsDrawer;