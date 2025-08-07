import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Try = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(29);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsResendEnabled(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if current field is filled
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);
    const newOtp = pastedData.split("").concat(["", "", "", ""]).slice(0, 4);
    setOtp(newOtp);

    if (pastedData.length > 0) {
      inputRefs.current[Math.min(pastedData.length, 3)]?.focus();
    }
  };

  const verifyOTP = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      alert("Please enter complete OTP");
      return;
    }

    setIsVerifying(true);

    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false);
      setShowSuccessPopup(true);

      // Auto redirect after 2 seconds
      setTimeout(() => {
        navigate("/success");
      }, 2000);
    }, 1500);
  };

  const resendOTP = () => {
    setOtp(["", "", "", ""]);
    setTimeLeft(29);
    setIsResendEnabled(false);
    inputRefs.current[0]?.focus();
    alert("OTP sent successfully!");
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="try-container">
      <div className="mobile-container">
        <div className="header-section">
          <button className="btn-back" onClick={() => navigate(-1)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <h1 className="header-title">Verification Code</h1>
        </div>

        <div className="main-content">
          <div className="otp-info">
            <p className="otp-message">
              One Time Password (OTP) has been <br /> sent via SMS to
              <span className="phone-number"> +91 8058694001</span>
            </p>
          </div>

          <div className="verification-section">
            <p className="instruction-text">
              Enter the OTP below to verify it.
            </p>

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  type="text"
                  className="otp-input"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>

            {!isResendEnabled && (
              <div className="resend-timer">
                <span>
                  Resend OTP in{" "}
                  <span className="timer">{formatTime(timeLeft)}</span>
                </span>
              </div>
            )}

            <div className="action-buttons">
              <button
                className={`btn btn-verify ${isVerifying ? "loading" : ""} ${isOtpComplete ? "complete" : ""}`}
                onClick={verifyOTP}
                disabled={isVerifying}
              >
                {isVerifying ? "" : "Verify OTP"}
              </button>
              <button
                className="btn btn-resend"
                onClick={resendOTP}
                disabled={!isResendEnabled}
              >
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <>
          <div className="popup-overlay show"></div>
          <div className="success-popup show">
            <div className="success-content">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3 className="success-title">Verification Successful!</h3>
              <p className="success-message">
                Your OTP has been verified successfully.
              </p>
              <div className="redirect-info">
                <span>Redirecting to dashboard...</span>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .try-container {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: #000;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mobile-container {
          max-width: 375px;
          width: 100%;
          height: 100vh;
          background: linear-gradient(
            180deg,
            #4a90e2 0%,
            #4a90e2 35%,
            #f8f9fa 35%,
            #f8f9fa 100%
          );
          position: relative;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .header-section {
          background: #4a90e2;
          color: white;
          padding: 1.5rem 1rem 2rem;
        }

        .btn-back {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          padding: 8px;
          border-radius: 50%;
          transition: background-color 0.2s ease;
          margin-bottom: 80px;
          cursor: pointer;
        }

        .btn-back:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .header-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin: 0;
          text-align: left;
        }

        .main-content {
          background: #f8f9fa;
          min-height: calc(100vh - 120px);
          margin-top: -40px;
        }

        .otp-info {
          background: #4a90e2;
          color: white;
          padding: 1rem;
          margin-top: -1px;
        }

        .otp-message {
          font-size: 15px;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
        }

        .phone-number {
          font-weight: 600;
          color: white;
        }

        .verification-section {
          background: #f8f9fa;
          padding: 1.5rem;
        }

        .instruction-text {
          color: #333;
          font-size: 13px;
          text-align: center;
          margin-bottom: 30px;
        }

        .otp-inputs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .otp-input {
          width: 60px;
          height: 60px;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 24px;
          font-weight: 600;
          color: #333;
          background: white;
          text-align: center;
          transition: all 0.2s ease;
        }

        .otp-input:focus {
          border-color: #4a90e2;
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
          outline: none;
        }

        .otp-input:not(:placeholder-shown) {
          border-color: #4a90e2;
          background: #f8f9ff;
        }

        .resend-timer {
          color: #666;
          font-size: 14px;
          margin-bottom: 30px;
          text-align: center;
        }

        .timer {
          font-weight: 600;
          color: #333;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn-verify {
          background: #1877f2;
          border: none;
          color: white;
          font-size: 16px;
          font-weight: 600;
          padding: 16px;
          border-radius: 12px;
          transition: all 0.2s ease;
          cursor: pointer;
          position: relative;
        }

        .btn-verify.complete {
          background: #2e7d32;
        }

        .btn-verify:hover:not(:disabled) {
          background: #3a7bd5;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
        }

        .btn-verify:disabled {
          background: #a0a0a0;
          cursor: not-allowed;
        }

        .btn-verify.loading {
          color: transparent;
        }

        .btn-verify.loading::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          margin: -10px 0 0 -10px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-resend {
          background: white;
          border: 2px solid #e1e5e9;
          color: #666;
          font-size: 16px;
          font-weight: 600;
          padding: 16px;
          border-radius: 12px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-resend:hover:not(:disabled) {
          border-color: #4a90e2;
          color: #4a90e2;
          background: #f8f9ff;
        }

        .btn-resend:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .popup-overlay.show {
          opacity: 1;
          visibility: visible;
        }

        .success-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          z-index: 9999;
          max-width: 320px;
          width: 90%;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .success-popup.show {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%) scale(1);
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #4caf50;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          animation: bounce 0.6s ease-out;
        }

        .success-icon i {
          font-size: 40px;
          color: white;
        }

        .success-title {
          color: #333;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .success-message {
          color: #666;
          font-size: 16px;
          line-height: 1.4;
          margin-bottom: 20px;
        }

        .redirect-info {
          color: #999;
          font-size: 14px;
          font-weight: 500;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0% {
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @media (max-width: 360px) {
          .otp-input {
            width: 55px;
            height: 55px;
            font-size: 22px;
          }

          .mobile-container {
            max-width: 100%;
          }

          .success-popup {
            max-width: 280px;
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Try;
