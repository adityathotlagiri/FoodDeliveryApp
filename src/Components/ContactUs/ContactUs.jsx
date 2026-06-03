import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";
import Navbar from "../Navbar/Navbar";
import headphones from "../../assets/icons/Headphones.png";
import website from "../../assets/icons/Website.png";
import whatsapp from "../../assets/icons/WhatApp.png";
import facebook from "../../assets/icons/Facebook.png";
import Instagram from "../../assets/icons/Instagram.png";
import filterIcon from "../../assets/icons/HomeIcons/filter.png"
import { useParams } from "react-router-dom";

const contactItems = [
  { id: 1, icon: headphones, label: "Customer service" },
  { id: 2, icon: website, label: "Website" },
  { id: 3, icon: whatsapp, label: "Whatsapp" },
  { id: 4, icon: facebook, label: "Facebook" },
  { id: 5, icon: Instagram  , label: "Instagram" },
];

const faqItems = [
  { id: 1, question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam." },
  { id: 2, question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 6, question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];


const faqTabs = ["General", "Account", "Services"];
const ContactUs = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const [activeTab, setActiveTab] = useState(page);
  const [expandedFaq, setExpandedFaq] = useState(1);
  const [activeFaqTab, setActiveFaqTab] = useState("General");

  return (
    <div className="cu-screen">
      <div className="cu-card">

        <div className="cu-header">
          <button className="cu-back" onClick={() => navigate("/home")}>‹</button>
          <div>
            <h2 className="cu-header-title">
              {activeTab === "FAQ" ? "Help & FAQs" : "Contact Us"}
            </h2>
            <p className="cu-header-sub">How Can We Help You?</p>
          </div>
        </div>

        <div className="cu-body">

          {/* Tabs */}
          <div className="cu-tabs">
            <button
              className={`cu-tab ${activeTab === "FAQ" ? "active" : ""}`}
              onClick={() => setActiveTab("FAQ")}
            >
              FAQ
            </button>
            <button
              className={`cu-tab ${activeTab === "Contact" ? "active" : ""}`}
              onClick={() => setActiveTab("Contact")}
            >
              Contact Us
            </button>
          </div>

          {activeTab === "Contact" ? (
            <div className="cu-list">
              {contactItems.map((item) => (
                <div key={item.id}>
                  <div className="cu-item">
                    <div className="cu-item-left">
                      <div className="cu-item-icon"><img src = {item.icon} alt="icons"/></div>
                      <span className="cu-item-label">{item.label}</span>
                    </div>
                    <span className="cu-chevron">V</span>
                  </div>
                  <div className="cu-divider" />
                </div>
              ))}
            </div>
          ) : (
            <div className="cu-faq">
              {/* FAQ sub tabs */}
              <div className="cu-faq-tabs">
                {faqTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`cu-faq-tab ${activeFaqTab === tab ? "active" : ""}`}
                    onClick={() => setActiveFaqTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="cu-search-box">
                <input
                  className="cu-search-input"
                  type="text"
                  placeholder="Search"
                />
                <button className="cu-search-btn"><img src={filterIcon} alt="icon" /></button>
              </div>

              {/* FAQ items */}
              <div className="cu-faq-list">
                {faqItems.map((item) => (
                  <div key={item.id} className="cu-faq-item">
                    <button
                      className="cu-faq-question"
                      onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="cu-faq-chevron">
                        {expandedFaq === item.id ? "∧" : "∨"}
                      </span>
                    </button>
                    {expandedFaq === item.id && (
                      <p className="cu-faq-answer">{item.answer}</p>
                    )}
                    <div className="cu-divider" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default ContactUs;