import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePassword = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      alert("Please accept terms and conditions.");
      return;
    }

    // Redirect to next page
    navigate("/otp");
  };

  return (
    <div className="register-container">
      <div className="container-box">
        <h4>Create an account</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username*</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter Your Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number*</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password*</label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                placeholder="Create Your Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <i
                className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => togglePassword("password")}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "15px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              ></i>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password*</label>
            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <i
                className={`fa ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => togglePassword("confirmPassword")}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "15px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              ></i>
            </div>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="terms">
              Accept All T&C
            </label>
          </div>

          <button type="submit" className="btn btn-primary mb-3">
            Sign Up
          </button>
        </form>

        <div className="divider">Or Continue With</div>

        <button className="btn btn-facebook mb-2">
          <i className="fab fa-facebook-f"></i>Signup with Facebook
        </button>

        <button className="btn btn-google">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
          />
          Signup with Google
        </button>

        <div className="login-link">
          Already have an account?{" "}
          <button
            type="button"
            className="link-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>

      <style jsx>{`
        .register-container {
          font-family: "Inter", sans-serif;
          background-color: #f0f2f5;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          height: 100vh;
          margin: 0;
          overflow-x: hidden;
        }

        .container-box {
          width: 150%;
          max-width: 400px;
          height: 100vh;
          margin: 40px auto;
          padding: 20px;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h4 {
          text-align: center;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .form-label {
          font-size: 13px;
          font-weight: 500;
        }

        .form-control {
          border-radius: 8px;
          font-size: 14px;
          padding: 10px 12px;
          color: black;
        }

        .form-control::placeholder {
          color: rgba(225, 225, 225, 1);
          opacity: 1;
        }

        .form-check-label {
          font-size: 13px;
          margin-left: 5px;
        }

        .btn-primary,
        .btn-facebook,
        .btn-google {
          width: 100%;
          border-radius: 8px;
          padding: 10px;
          font-size: 14px;
          font-weight: 600;
        }

        .btn-primary {
          background-color: #0d6efd;
        }

        .btn-facebook {
          background-color: #1877f2;
          color: #fff;
          border: none;
          margin-bottom: 10px;
        }

        .btn-facebook i {
          margin-right: 10px;
        }

        .btn-google {
          border: 1px solid #ddd;
          background-color: #fff;
          color: #555;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .btn-google img {
          width: 18px;
          margin-right: 10px;
        }

        .divider {
          text-align: center;
          margin: 15px 0;
          font-size: 13px;
          color: #999;
        }

        .divider::before,
        .divider::after {
          content: "";
          display: inline-block;
          width: 30%;
          height: 1px;
          background: #ccc;
          vertical-align: middle;
          margin: 0 5px;
        }

        .login-link {
          font-size: 13px;
          text-align: center;
          margin-top: 50px;
        }

        .login-link .link-button {
          color: #0044cc;
          font-weight: 600;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Register;
