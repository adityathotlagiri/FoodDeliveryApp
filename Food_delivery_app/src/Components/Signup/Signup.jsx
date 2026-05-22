import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Signup.css";
import * as Yup from "yup";

import googleIcon from "../../assets/icons/Gmail.png";
import facebookIcon from "../../assets/icons/Facebook.png";
import eyeOffIcon from "../../assets/icons/Eyeofficon.png";
import fingerprintIcon from "../../assets/icons/Fingerprint.png";
import backIcon from "../../assets/icons/BackIcon.png";
import Navbar from "../Navbar/Navbar";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters.")
    .required("Full name is required."),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),

  dob: Yup.string()
    .matches(
      /^(0[1-9]|[12]\d|3[01])\s*\/\s*(0[1-9]|1[0-2])\s*\/\s*(19|20)\d{2}$/,
      "Use format DD / MM / YYYY."
    )
    .required("Date of birth is required."),

  email: Yup.string()
    .email("Enter a valid email address.")
    .required("Email is required."),

  phone: Yup.string()
    .matches(/^\+?[0-9\s]{7,15}$/, "Only numbers allowed. e.g. +123 456 7890")
    .required("Phone number is required."),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      password: "",
      dob: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Sign up values:", values);
      alert("Profile updated successfully!");
    },
  });

  return (
    <div className="su-screen">
      <div className="su-card">

        {/* Header */}
        <div className="su-header">
          <button className="su-back" onClick={() => navigate(-1)}>
            <img src={backIcon} alt="back" />
          </button>
          <h2 className="su-header-title">New Account</h2>
        </div>

        {/* Body */}
        <form className="su-body" onSubmit={formik.handleSubmit}>

          {/* Full Name */}
          <div className="su-field-group">
            <label className="su-label">Full name</label>
            <input
              className={`su-input ${formik.touched.fullName && formik.errors.fullName ? "su-input-error" : ""}`}
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <span className="su-error">{formik.errors.fullName}</span>
            )}
          </div>

          {/* Password */}
          <div className="su-field-group">
            <label className="su-label">Password</label>
            <div className="su-input-wrap">
              <input
                className={`su-input ${formik.touched.password && formik.errors.password ? "su-input-error" : ""}`}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                className="su-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={eyeOffIcon} alt="toggle" />
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <span className="su-error">{formik.errors.password}</span>
            )}
          </div>

          {/* Email */}
          <div className="su-field-group">
            <label className="su-label">Email</label>
            <input
              className={`su-input ${formik.touched.email && formik.errors.email ? "su-input-error" : ""}`}
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="su-error">{formik.errors.email}</span>
            )}
          </div>

          {/* Mobile Number */}
          <div className="su-field-group">
            <label className="su-label">Mobile Number</label>
            <input
              className={`su-input ${formik.touched.phone && formik.errors.phone ? "su-input-error" : ""}`}
              type="tel"
              name="phone"
              placeholder="+ 123 456 789"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <span className="su-error">{formik.errors.phone}</span>
            )}
          </div>

          {/* Date of Birth */}
          <div className="su-field-group">
            <label className="su-label">Date of birth</label>
            <input
              className={`su-input ${formik.touched.dob && formik.errors.dob ? "su-input-error" : ""}`}
              type="text"
              name="dob"
              placeholder="DD / MM / YYYY"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dob && formik.errors.dob && (
              <span className="su-error">{formik.errors.dob}</span>
            )}
          </div>

          {/* Terms */}
          <p className="su-terms">
            By continuing, you agree to{" "}
            <span className="su-link">Terms of Use</span> and{" "}
            <span className="su-link">Privacy Policy.</span>
          </p>

          {/* Sign Up button */}
          <button type="submit" className="su-btn-signup">Sign Up</button>

          {/* Or sign up with */}
          <p className="su-or">or sign up with</p>

          {/* Social icons */}
          <div className="su-socials">
            <button type="button" className="su-social-btn">
              <img src={googleIcon} alt="Google" />
            </button>
            <button type="button" className="su-social-btn">
              <img src={facebookIcon} alt="Facebook" />
            </button>
            <button type="button" className="su-social-btn">
              <img src={fingerprintIcon} alt="Fingerprint" />
            </button>
          </div>

          {/* Login link */}
          <p className="su-login-text">
            Already have an account?{" "}
            <span className="su-login-link" onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>

        </form>

        {/* Bottom Navbar */}
        <Navbar />

      </div>
    </div>
  );
};

SignUp.propTypes = {
  children: PropTypes.node,
};

export default SignUp;
