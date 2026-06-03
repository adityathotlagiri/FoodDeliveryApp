import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddCard.css";
import Navbar from "../Navbar/Navbar";

const AddCard = () => {
  const navigate = useNavigate();
  const [showCvv, setShowCvv] = useState(false);

  const formik = useFormik({
    initialValues: {
      card_holder_name: "John Smith",
      card_number: "000 000 000 00",
      expiry_date: "04/28",
      cvv: "0000",
    },
    validationSchema: Yup.object({
      card_holder_name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters")
        .required("Card holder name is required"),
      card_number: Yup.string()
        .matches(/^[\d\s]{10,19}$/, "Enter a valid card number")
        .required("Card number is required"),
      expiry_date: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use format MM/YY")
        .required("Expiry date is required"),
      cvv: Yup.string()
        .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
        .required("CVV is required"),
    }),
    onSubmit: () => {
      toast.success("Card saved successfully!", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#E95322",
          color: "#fff",
          fontFamily: "Nunito, sans-serif",
          fontWeight: "700",
          borderRadius: "50px",
          padding: "12px 24px",
        },
      });
      setTimeout(() => navigate("/paymentMethods"), 2000);
    },
  });

  return (
    <div className="ac-screen">
      <Toaster />
      <div className="ac-card">

        {/* Header */}
        <div className="ac-header">
          <button className="ac-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="ac-header-title">Add Card</h2>
        </div>

        {/* Body */}
        <div className="ac-body">

          {/* Card preview */}
          <div className="cardBox">
            <div className="leftTriangle" />
            <div className="rightTriangle" />
            <div className="cardBox-details">
              <p className="cardBox-details-number">
                {formik.values.card_number || "000 000 000 00"}
              </p>
              <div className="cardBox-details-bottom">
                <div>
                  <p className="cardBox-label">Card Holder Name</p>
                  <p className="cardBox-value">
                    {formik.values.card_holder_name || "Example name"}
                  </p>
                </div>
                <div>
                  <p className="cardBox-label">Expiry Date</p>
                  <p className="cardBox-value">
                    {formik.values.expiry_date || "04/28"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card holder name */}
          <div className="ac-field-group">
            <label className="ac-label">Card holder name</label>
            <input
              className={`ac-input ${formik.touched.card_holder_name && formik.errors.card_holder_name ? "ac-input-error" : ""}`}
              type="text"
              name="card_holder_name"
              value={formik.values.card_holder_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="John Smith"
            />
            {formik.touched.card_holder_name && formik.errors.card_holder_name && (
              <span className="ac-error">{formik.errors.card_holder_name}</span>
            )}
          </div>

          {/* Card number */}
          <div className="ac-field-group">
            <label className="ac-label">Card Number</label>
            <input
              className={`ac-input ${formik.touched.card_number && formik.errors.card_number ? "ac-input-error" : ""}`}
              type="text"
              name="card_number"
              value={formik.values.card_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="000 000 000 00"
              maxLength={19}
            />
            {formik.touched.card_number && formik.errors.card_number && (
              <span className="ac-error">{formik.errors.card_number}</span>
            )}
          </div>

          {/* Expiry & CVV */}
          <div className="ac-row">
            <div className="ac-field-group half">
              <label className="ac-label">Expiry Date</label>
              <input
                className={`ac-input ${formik.touched.expiry_date && formik.errors.expiry_date ? "ac-input-error" : ""}`}
                type="text"
                name="expiry_date"
                value={formik.values.expiry_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="04/28"
                maxLength={5}
              />
              {formik.touched.expiry_date && formik.errors.expiry_date && (
                <span className="ac-error">{formik.errors.expiry_date}</span>
              )}
            </div>

            <div className="ac-field-group half">
              <label className="ac-label">CVV</label>
              <div className="ac-input-wrap">
                <input
                  className={`ac-input ${formik.touched.cvv && formik.errors.cvv ? "ac-input-error" : ""}`}
                  type={showCvv ? "text" : "password"}
                  name="cvv"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="0000"
                  maxLength={4}
                />
                <button
                  className="ac-eye"
                  type="button"
                  onClick={() => setShowCvv(!showCvv)}
                >
                  {showCvv ? "👁️" : "🙈"}
                </button>
              </div>
              {formik.touched.cvv && formik.errors.cvv && (
                <span className="ac-error">{formik.errors.cvv}</span>
              )}
            </div>
          </div>

          {/* Save button */}
          <button className="ac-btn-save" onClick={formik.handleSubmit}>
            Save Card
          </button>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default AddCard;