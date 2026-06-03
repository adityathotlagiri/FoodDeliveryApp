import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import "./PasswordSetting.css";
import Navbar from "../Navbar/Navbar";
import eyeoff from "../../assets/icons/Eyecloseicon.png";
import eyeon from "../../assets/icons/Eyeonicon.png";

const PasswordSetting = () => {
  const navigate = useNavigate();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Current password is required"),
      newPassword: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: () => {
      toast.success("Password changed successfully!", {
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
      setTimeout(() => navigate(-1), 2000);
    },
  });

  return (
    <div className="ps-screen">
      <Toaster />
      <div className="ps-card">

        <div className="ps-header">
          <button className="ps-back" onClick={() => navigate("/Settings")}>‹</button>
          <h2 className="ps-header-title">Password Setting</h2>
        </div>

        <div className="ps-body">

          {/* Current Password */}
          <div className="ps-field-group">
            <label className="ps-label">Current Password</label>
            <div className="ps-input-wrap">
              <input
                className={`ps-input ${formik.touched.currentPassword && formik.errors.currentPassword ? "ps-input-error" : ""}`}
                type={showCurrent ? "text" : "password"}
                name="currentPassword"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="••••••••••••"
              />
              <button className="ps-eye" onClick={() => setShowCurrent(!showCurrent)}>
                <img src={showCurrent ? eyeon : eyeoff} alt="eyeicons" />
              </button>
            </div>
            {formik.touched.currentPassword && formik.errors.currentPassword && (
              <span className="ps-error">{formik.errors.currentPassword}</span>
            )}
            <button className="ps-forgot" onClick={() => navigate("/login")}>
              Forgot Password?
            </button>
          </div>

          {/* New Password */}
          <div className="ps-field-group">
            <label className="ps-label">New Password</label>
            <div className="ps-input-wrap">
              <input
                className={`ps-input ${formik.touched.newPassword && formik.errors.newPassword ? "ps-input-error" : ""}`}
                type={showNew ? "text" : "password"}
                name="newPassword"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="••••••••••••"
              />
              <button className="ps-eye" onClick={() => setShowNew(!showNew)}>
                <img src={showNew ? eyeon : eyeoff} alt="eyeicons" />
              </button>
            </div>
            {formik.touched.newPassword && formik.errors.newPassword && (
              <span className="ps-error">{formik.errors.newPassword}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="ps-field-group">
            <label className="ps-label">Confirm New Password</label>
            <div className="ps-input-wrap">
              <input
                className={`ps-input ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "ps-input-error" : ""}`}
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="••••••••••••"
              />
              <button className="ps-eye" onClick={() => setShowConfirm(!showConfirm)}>
                <img src={showConfirm ? eyeon : eyeoff} alt="eyeicons" />
              </button>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span className="ps-error">{formik.errors.confirmPassword}</span>
            )}
          </div>

          <button className="ps-btn-change" onClick={formik.handleSubmit}>
            Change Password
          </button>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default PasswordSetting;