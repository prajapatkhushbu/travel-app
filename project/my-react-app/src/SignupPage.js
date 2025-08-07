import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash, FaFacebookF } from 'react-icons/fa';

function SignupPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [form, setForm] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const toggleVisibility = (field) => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const submitForm = () => {
    const { username, phone, password, confirmPassword, terms } = form;
    if (!username || !phone || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!terms) {
      alert("Please accept terms and conditions.");
      return;
    }

    window.location.href = "try.html";
  };

  return (
    <>
      {/* Internal CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
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
          height: 100%;
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

        .position-relative i {
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          cursor: pointer;
          color: #888;
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
          display: flex;
          align-items: center;
          justify-content: center;
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
          content: '';
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

        .login-link a {
          color: #0044cc;
          font-weight: 600;
          text-decoration: none;
        }
      `}</style>

      {/* Sign-Up Form */}
      <div className="container-box">
        <h4>Create an account</h4>

        <div className="mb-3">
          <label className="form-label">Username*</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter Your Username"
            value={form.username}
            onChange={handleChange}
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
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password*</label>
          <div className="position-relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="form-control"
              name="password"
              placeholder="Create Your Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <i onClick={() => toggleVisibility('password')}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </i>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password*</label>
          <div className="position-relative">
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <i onClick={() => toggleVisibility('confirm')}>
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </i>
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            id="terms"
          />
          <label className="form-check-label" htmlFor="terms">
            Accept All T&C
          </label>
        </div>

        <button className="btn btn-primary mb-3" onClick={submitForm}>
          Sign Up
        </button>

        <div className="divider">Or Continue With</div>

        <button className="btn btn-facebook mb-2">
          <FaFacebookF /> Signup with Facebook
        </button>

        <button className="btn btn-google">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
          />
          Signup with Google
        </button>

        <div className="login-link">
          Already have an account? <a href="index.js">Login</a>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
