import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !phoneNumber) {
      alert("Please enter either email or phone number to continue.");
      return;
    }

    // Simulate OTP sending then redirect
    alert("Sending OTP...");

    setTimeout(() => {
      navigate("/try");
    }, 1500);
  };

  return (
    <div className="otp-container">
      <div className="container-fluid">
        <div className="otp-content">
          <div className="illustration-container">
            <img src="/Images/image1.png" alt="OTP Illustration" />
          </div>

          <h4>OTP Verification</h4>
          <p className="description-text">
            Enter email or phone number to send One <br />
            Time Password
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email
              </label>
              <div className="input-group-with-icon">
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="project@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <div className="input-group-with-icon">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="+91 8058694001"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <span className="input-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-continue">
              Continue
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .otp-container {
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
          border-radius: 20px;
          overflow-y: auto;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .otp-content {
          padding: 2rem 1.5rem;
          width: 100%;
          text-align: center;
        }

        .illustration-container {
          margin-bottom: 1.5rem;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .illustration-container img {
          width: 250px;
          height: auto;
          display: block;
        }

        h4 {
          font-weight: 700;
          color: #333;
          font-size: 1.3rem;
          text-align: left;
          margin-top: 40px;
        }

        .description-text {
          font-size: 1rem;
          color: #666;
          margin-bottom: 40px;
          line-height: 1.4;
          padding: 0;
          text-align: left;
          margin-top: 0px;
        }

        .form-label {
          font-weight: 500;
          color: #333;
          margin-bottom: 0.4rem;
          display: block;
          text-align: left;
        }

        .input-group-with-icon {
          position: relative;
        }

        .input-group-with-icon .form-control {
          border-radius: 12px;
          height: 48px;
          padding: 0.75rem 1rem;
          padding-right: 45px;
          border: 1px solid #ccc;
          font-size: 0.95rem;
          background-color: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        .input-icon {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .input-icon svg {
          width: 20px;
          height: 20px;
        }

        .btn-continue {
          background-color: rgba(24, 119, 242, 1);
          border-color: #007bff;
          border-radius: 25px;
          font-weight: 600;
          padding: 0.8rem;
          font-size: 1.05rem;
          width: 100%;
          margin-top: 2rem;
          transition:
            background-color 0.3s ease,
            transform 0.2s ease;
          color: white;
          border: none;
        }

        .btn-continue:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default OtpVerification;
