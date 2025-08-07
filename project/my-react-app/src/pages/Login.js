import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber || !password) {
      alert("Please enter both phone number and password.");
      return;
    }

    // Simulate login process
    setTimeout(() => {
      navigate("/otp");
    }, 1000);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="login-content">
          <div style={{ height: "40px" }}></div>

          <h4>Hi, Welcome Back! 👋</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label required-star">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                placeholder="+91"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password*</label>
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Create Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={togglePassword}
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

            <div className="forgot-password-link">
              <button
                type="button"
                className="link-button"
                onClick={() => alert("Forgot password feature coming soon!")}
              >
                Forgot Password?
              </button>
            </div>

            <div className="form-check remember-me-checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="rememberMeCheckbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="rememberMeCheckbox">
                Remember Me
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-login">
              Login
            </button>
          </form>

          <div className="or-separator">Or Continue With</div>

          <button type="button" className="btn btn-facebook social-login-btn">
            <i className="fab fa-facebook-f social-icon"></i> Login with
            Facebook
          </button>
          <button className="btn btn-google">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google Logo"
            />
            Login with Google
          </button>

          <div className="login-link">
            Already have an account?{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => navigate("/register")}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          font-family: "Inter", sans-serif;
          background-color: #f0f2f5;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          overflow-x: hidden;
        }

        .container-fluid {
          padding: 0;
          max-width: 400px;
          background-color: #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          overflow-y: auto;
          height: 100vh;
        }

        .login-content {
          padding: 2.5rem 1.5rem 2rem 1.5rem;
        }

        h4 {
          font-weight: 700;
          color: #333;
          margin-bottom: 50px;
          font-size: 1.5rem;
          text-align: center;
        }

        .form-group label,
        .form-label {
          font-weight: 500;
          color: #333;
          margin-bottom: 0.5rem;
          display: block;
          text-align: left;
        }

        .required-star::after {
          content: "*";
          color: black;
          margin-left: 4px;
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

        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
        }

        .forgot-password-link {
          text-align: right;
          margin-top: 0.5rem;
        }

        .forgot-password-link a {
          color: #dc3545;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .forgot-password-link a:hover {
          text-decoration: underline;
        }

        .remember-me-checkbox {
          text-align: left;
          margin-top: 0.5rem;
        }

        .form-check-input {
          border-radius: 0.25rem;
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
          vertical-align: middle;
        }

        .form-check-label {
          color: #333;
          font-size: 0.95rem;
          vertical-align: middle;
        }

        .btn-login {
          background-color: rgba(14, 100, 210, 1);
          border-color: #007bff;
          border-radius: 10px;
          font-weight: 600;
          padding: 0.9rem 1.5rem;
          font-size: 1.1rem;
          width: 100%;
          margin-top: 20px;
          transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            transform 0.2s ease;
        }

        .btn-login:hover {
          background-color: #0056b3;
          border-color: #0056b3;
          transform: translateY(-2px);
        }

        .or-separator {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 1.5rem 0;
          margin-top: 50px;
          color: #888;
          font-size: 0.9rem;
        }

        .or-separator::before,
        .or-separator::after {
          content: "";
          flex: 1;
          border-bottom: 1px solid #ddd;
        }

        .or-separator:not(:empty)::before {
          margin-right: 0.75em;
        }

        .or-separator:not(:empty)::after {
          margin-left: 0.75em;
        }

        .social-login-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          font-weight: 500;
          font-size: 1rem;
          margin-bottom: 1rem;
          transition: background-color 0.3s ease;
        }

        .btn-facebook {
          background-color: rgba(24, 119, 242, 1);
          color: white;
          border: rgba(0, 0, 0, 0.6);
          margin-top: 40px;
        }

        .btn-facebook:hover {
          background-color: #145cb3;
          border-color: #145cb3;
          color: white;
        }

        .social-login-btn .social-icon {
          font-size: 1.5rem;
          margin-right: 10px;
        }

        .btn-google {
          border: 1px solid rgba(0, 0, 0, 0.6);
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 60px;
          margin-top: 20px;
          background: white;
          width: 100%;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          font-weight: 500;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .btn-google img {
          width: 25px;
          margin-right: 10px;
        }

        .btn-google:hover {
          background-color: white;
          border-color: black;
          color: black;
        }

        .login-link {
          font-size: 13px;
          text-align: center;
          margin-top: 50px;
        }

        .login-link .link-button,
        .forgot-password-link .link-button {
          color: #0044cc;
          font-weight: 600;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .forgot-password-link .link-button {
          color: #dc3545;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .forgot-password-link .link-button:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;
