import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Support.css";
import Navbar from "../Navbar/Navbar";
import pin from "../../assets/icons/pin.png";
import mic from "../../assets/icons/mic.png";
import send from "../../assets/icons/send.png";
const initialMessages = [
  {
    id: 1,
    from: "user",
    text: "Hello!",
    time: "09:00",
  },
  {
    id: 2,
    from: "bot",
    text: "Hello!, please choose the number corresponding to your needs for a more efficient service.",
    time: "09:00",
  },
  {
    id: 3,
    from: "bot",
    text: "1. Order Management\n2. Payments Management\n3. Account management and profile\n4. About order tracking\n5. Safety",
    time: "09:00",
  },
  {
    id: 4,
    from: "user",
    text: "1",
    time: "09:03",
  },
  {
    id: 5,
    from: "bot",
    isOrder: true,
    time: "09:03",
  },
];

const Support = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      from: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  return (
    <div className="sp-screen">
      <div className="sp-card">

        <div className="sp-header">
          <button className="sp-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="sp-header-title">Support</h2>
        </div>

        <div className="sp-body">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`sp-msg-wrap ${msg.from === "user" ? "right" : "left"}`}
            >
              {msg.isOrder ? (
                <div className="sp-order-bubble">
                  <p className="sp-order-text">
                    You have a current order<br />
                    <strong>Strawberry Shake and Broccoli Lasagna</strong><br />
                    Order No. 0054752<br />
                    29 Nov, 01:20 pm
                  </p>
                  <div className="sp-order-actions">
                    <button className="sp-order-btn">Order Issues</button>
                    <button className="sp-order-btn outline">Order not received</button>
                  </div>
                  <span className="sp-time">{msg.time}</span>
                </div>
              ) : (
                <div className={`sp-bubble ${msg.from === "user" ? "user" : "bot"}`}>
                  <p className="sp-text">{msg.text}</p>
                  <span className="sp-time">{msg.time}</span>
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="sp-input-row">
          <button className="sp-attach-btn"><img src={pin} alt="icon" /></button>
          <input
            className="sp-input"
            type="text"
            placeholder="Write Here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="sp-mic-btn"><img src={mic} alt="icon" /></button>
          <button className="sp-send-btn" onClick={sendMessage}><img src={send} alt="icon" /></button>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

Support.propTypes = { children: PropTypes.node };
export default Support;