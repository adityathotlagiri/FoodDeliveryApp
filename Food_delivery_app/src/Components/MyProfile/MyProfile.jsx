import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./MyProfile.css";
import Navbar from "../Navbar/Navbar";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters.")
    .required("Full name is required."),

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

const MyProfile = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      dob: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Updated profile:", values);
      alert("Profile updated successfully!");
    },
  });

  return (
    <div className="mp-screen">
      <div className="mp-card">

        <div className="mp-header">
          <button className="mp-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="mp-header-title">My profile</h2>
        </div>

        <div className="mp-body">

          {/* Avatar */}
          <div className="mp-avatar-wrap">
            <div className="mp-avatar">
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#fde8d8"/>
                <circle cx="50" cy="38" r="18" fill="#f0b8a0"/>
                <ellipse cx="50" cy="85" rx="28" ry="20" fill="#f0b8a0"/>
              </svg>
            </div>
            <button className="mp-camera-btn" type="button">
              <svg viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="12" fill="#E95322"/>
                <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
                <path d="M9 7l1-1.5h4L15 7h2a1 1 0 011 1v8a1 1 0 01-1 1H7a1 1 0 01-1-1V8a1 1 0 011-1h2z" stroke="white" strokeWidth="1.2" fill="none"/>
              </svg>
            </button>
          </div>

          {/* Full Name */}
          <div className="mp-field-group">
            <label className="mp-label">Full Name</label>
            <input
              className={`mp-input ${formik.touched.fullName && formik.errors.fullName ? "mp-input-error" : ""}`}
              type="text"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Full name"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <span className="mp-error">{formik.errors.fullName}</span>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mp-field-group">
            <label className="mp-label">Date of Birth</label>
            <input
              className={`mp-input ${formik.touched.dob && formik.errors.dob ? "mp-input-error" : ""}`}
              type="text"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="DD / MM / YYYY"
              maxLength={14}
            />
            {formik.touched.dob && formik.errors.dob && (
              <span className="mp-error">{formik.errors.dob}</span>
            )}
          </div>

          {/* Email */}
          <div className="mp-field-group">
            <label className="mp-label">Email</label>
            <input
              className={`mp-input ${formik.touched.email && formik.errors.email ? "mp-input-error" : ""}`}
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Example@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="mp-error">{formik.errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="mp-field-group">
            <label className="mp-label">Phone Number</label>
            <input
              className={`mp-input ${formik.touched.phone && formik.errors.phone ? "mp-input-error" : ""}`}
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="+123 567 89000"
            />
            {formik.touched.phone && formik.errors.phone && (
              <span className="mp-error">{formik.errors.phone}</span>
            )}
          </div>

          <button
            className="mp-btn-update"
            onClick={formik.handleSubmit}
          >
            Update Profile
          </button>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

MyProfile.propTypes = {
  children: PropTypes.node,
};

export default MyProfile;