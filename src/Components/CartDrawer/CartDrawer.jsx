import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import "./CartDrawer.css";
import shake from "../../assets/icons/Shake.png";
import CartIcon from "../../assets/icons/CartIcon.png";
import { useNavigate } from "react-router-dom";
const initialItems = [
  {
    id: 1,
    img: shake,
    name: "Strawberry Shake",
    price: 20.00,
    date: "29/11/24",
    time: "15:00",
    qty: 2,
  },
  {
    id: 1,
    img: shake,
    name: "Strawberry Shake",
    price: 20.00,
    date: "29/11/24",
    time: "15:00",
    qty: 2,
  },
];

const TAX = 5.00;
const DELIVERY = 3.00;

const CartDrawer = ({ isOpen, onClose }) => {
  const [items, setItems] = useState(initialItems);
  const navigate = useNavigate();
  const increment = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrement = (id) => {
    setItems(items.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + TAX + DELIVERY;
  const isEmpty = items.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cd-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Left peek */}
          <div className="cd-peek" onClick={onClose} />

          {/* Drawer */}
          <motion.div
            className="cd-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="cd-header">
              <span className="cd-cart-icon"><img src={CartIcon} alt="cartIcon" /></span>
              <h2 className="cd-title">Cart</h2>
            </div>

            <div className="cd-divider" />

            {isEmpty ? (
              /* Empty state */
              <div className="cd-empty">
                <div className="cd-plus-circle">
                  <span>+</span>
                </div>
                <p className="cd-empty-text">Want To Add Something?</p>
              </div>
            ) : (
              <>
                <p className="cd-count">
                  You have {items.length} items in the cart
                </p>

                {/* Items list */}
                <div className="cd-list">
                  {items.map((item) => (
                    <div key={item.id}>
                      <div className="cd-item">
                        <img src={item.img} alt={item.name} className="cd-item-img" />
                        <div className="cd-item-info">
                          <p className="cd-item-name">{item.name}</p>
                          <p className="cd-item-price">${item.price.toFixed(2)}</p>
                          <div className="cd-qty-wrap">
                            <button
                              className="cd-qty-btn"
                              onClick={() => decrement(item.id)}
                            >
                              −
                            </button>
                            <span className="cd-qty">{item.qty}</span>
                            <button
                              className="cd-qty-btn"
                              onClick={() => increment(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="cd-item-date">
                          <p>{item.date}</p>
                          <p>{item.time}</p>
                        </div>
                      </div>
                      <div className="cd-divider" />
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="cd-summary">
                  <div className="cd-summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="cd-summary-row">
                    <span>Tax and Fees</span>
                    <span>${TAX.toFixed(2)}</span>
                  </div>
                  <div className="cd-summary-row">
                    <span>Delivery</span>
                    <span>${DELIVERY.toFixed(2)}</span>
                  </div>
                  <div className="cd-divider" />
                  <div className="cd-summary-row cd-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout button */}
                <div className="cd-checkout-wrap">
                  <button className="cd-btn-checkout" onClick={()=>navigate("/confirmOrder")}>Checkout</button>
                </div>
              </>
            )}


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

CartDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default CartDrawer;