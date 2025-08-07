import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const navigate = useNavigate();
  const [isAvailable, setIsAvailable] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countdown1, setCountdown1] = useState("");
  const [countdown2, setCountdown2] = useState("");

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleAvailabilityToggle = () => {
    setIsAvailable(!isAvailable);
  };

  // Countdown timer logic
  useEffect(() => {
    const startCountdown = (setter, days, hours, minutes, seconds) => {
      const now = new Date();
      const targetDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + days,
        now.getHours() + hours,
        now.getMinutes() + minutes,
        now.getSeconds() + seconds,
      );

      const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = targetDate.getTime() - now;

        const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (timeLeft < 0) {
          setter("Booking Expired!");
        } else {
          setter(
            `Time Left: ${d}d ${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`,
          );
        }
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return interval;
    };

    const interval1 = startCountdown(setCountdown1, 2, 4, 30, 10);
    const interval2 = startCountdown(setCountdown2, 11, 10, 38, 0);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="driver-page">
      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <i
            className="fas fa-arrow-left back-arrow"
            onClick={() => setIsMenuOpen(false)}
          ></i>
          <span className="user-account-text">Your account</span>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/profile")}
        >
          <i className="fas fa-user-circle icon"></i>
          <div className="text">
            Account Center
            <span className="sub-text">
              Password, Security, Personal & Vehicle Details
            </span>
          </div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div className="sidebar-menu-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            className="icon"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M15 9.5c0-.437 4.516-3.5 9-3.5s9 3.063 9 3.5c0 1.56-.166 2.484-.306 2.987c-.093.33-.402.513-.745.513H16.051c-.343 0-.652-.183-.745-.513C15.166 11.984 15 11.06 15 9.5m7.5-.5a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2zm-6.462 10.218c-3.33-1.03-2.49-2.87-1.22-4.218H33.46c1.016 1.298 1.561 3.049-1.51 4.097q.05.445.05.903a8 8 0 1 1-15.962-.782m7.69.782c2.642 0 4.69-.14 6.26-.384q.012.19.012.384a6 6 0 1 1-11.992-.315c1.463.202 3.338.315 5.72.315m8.689 14.6A9.99 9.99 0 0 0 24 30a9.99 9.99 0 0 0-8.42 4.602a2.5 2.5 0 0 0-1.447-1.05l-1.932-.517a2.5 2.5 0 0 0-3.062 1.767L8.363 37.7a2.5 2.5 0 0 0 1.768 3.062l1.931.518A2.5 2.5 0 0 0 14 41.006A1 1 0 0 0 16 41v-1q0-.572.078-1.123l5.204 1.395a3 3 0 0 0 5.436 0l5.204-1.395q.077.551.078 1.123v1a1 1 0 0 0 2 .01c.56.336 1.252.453 1.933.27l1.932-.517a2.5 2.5 0 0 0 1.768-3.062l-.777-2.898a2.5 2.5 0 0 0-3.062-1.767l-1.932.517a2.5 2.5 0 0 0-1.445 1.046m-15.814 2.347A8.01 8.01 0 0 1 23 32.062v4.109a3 3 0 0 0-1.88 1.987zm14.794 0A8.01 8.01 0 0 0 25 32.062v4.109c.904.32 1.61 1.06 1.88 1.987zM24 40a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            />
          </svg>
          <div className="text">Drive Status</div>
          <div className="toggle-switch-wrapper">
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                checked={isAvailable}
                onChange={handleAvailabilityToggle}
              />
            </div>
          </div>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/wallet")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            className="icon"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 11.969L31.785 4l4.612 7.989z"
                clipRule="evenodd"
              />
              <path
                strokeLinejoin="round"
                d="M4 14a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
              />
              <path
                strokeLinejoin="round"
                d="M35.25 33H44V23h-8.75c-2.9 0-5.25 2.239-5.25 5s2.35 5 5.25 5Z"
              />
              <path strokeLinecap="round" d="M44 16.5v24" />
            </g>
          </svg>
          <div className="text">GVW Wallet</div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/refer-earn")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="icon"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              color="currentColor"
            >
              <ellipse cx="15.5" cy="11" rx="6.5" ry="2" />
              <path d="M22 15.5c0 1.105-2.91 2-6.5 2s-6.5-.895-6.5-2" />
              <path d="M22 11v8.8c0 1.215-2.91 2.2-6.5 2.2S9 21.015 9 19.8V11" />
              <ellipse cx="8.5" cy="4" rx="6.5" ry="2" />
              <path d="M6 11c-1.892-.23-3.63-.825-4-2m4 7c-1.892-.23-3.63-.825-4-2" />
              <path d="M6 21c-1.892-.23-3.63-.826-4-2V4m13 2V4" />
            </g>
          </svg>
          <div className="text">Refer & Earn</div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/tips")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="icon"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <rect width="12" height="7.5" x="6" y="13" rx="1" />
              <path d="M7 12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1H7z" />
              <circle cx="12" cy="6.5" r="3" />
              <path strokeLinecap="round" d="m12.242 5.53l-.484 1.94" />
            </g>
          </svg>
          <div className="text">Tips Received</div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/gvw-plans")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="icon"
          >
            <path
              fill="currentColor"
              d="M11.702 19.942q.196 0 .402-.088t.333-.215l7.796-7.797q.377-.377.582-.77q.204-.395.204-.866q0-.477-.204-.926q-.205-.45-.582-.82l-3.75-3.75q-.371-.377-.763-.553q-.391-.176-.868-.176q-.471 0-.875.176t-.761.552l-.872.872l1.85 1.855q.298.293.445.666q.146.373.146.757q0 .781-.511 1.292t-1.291.51q-.385 0-.751-.117t-.659-.41L9.66 8.228l-4.318 4.317q-.151.152-.227.345t-.076.39q0 .354.227.583q.226.23.58.23q.196 0 .402-.088q.206-.089.333-.216L9.75 10.62l.708.708l-3.164 3.17q-.152.151-.228.344q-.075.194-.075.39q0 .335.236.571t.571.237q.196 0 .402-.089t.333-.215l3.4-3.394l.708.707l-3.395 3.4q-.133.127-.218.333q-.086.206-.086.402q0 .334.237.57q.236.238.571.238q.196 0 .39-.076t.344-.228l3.4-3.395l.708.708l-3.4 3.4q-.151.152-.227.365t-.076.389q0 .354.249.571t.564.217m-.006 1q-.771 0-1.32-.564q-.549-.565-.482-1.394q-.85.01-1.415-.507q-.565-.518-.537-1.444q-.926.01-1.46-.53t-.486-1.422q-.834.01-1.396-.47q-.561-.478-.561-1.332q0-.385.149-.77q.149-.386.44-.678L9.66 6.806l2.582 2.582q.127.133.314.219t.421.085q.321 0 .567-.224t.247-.584q0-.234-.086-.42q-.086-.187-.218-.314l-3.44-3.44q-.372-.377-.773-.553t-.878-.176q-.471 0-.856.176q-.384.176-.761.553L3.735 7.76q-.322.32-.52.765q-.198.444-.21.917q-.01.339.058.651t.22.588l-.758.758q-.252-.402-.394-.926T2 9.443q.012-.682.273-1.305t.748-1.111l3.025-3.025q.523-.518 1.107-.77q.584-.251 1.263-.251t1.252.252q.574.251 1.092.769l.87.871l.872-.871q.523-.518 1.097-.77q.574-.251 1.253-.251t1.263.252q.583.251 1.1.769l3.726 3.725q.517.517.798 1.161t.28 1.323q0 .68-.28 1.253t-.798 1.092l-7.797 7.79q-.311.312-.678.454q-.366.142-.77.142M8.491 8.327"
            />
          </svg>
          <div className="text">GVW Plans</div>
          <span className="count-badge">1</span>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/commission-breakdown")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="icon"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M13.213 9.787a3.39 3.39 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961M19.573 20l-1.787-1.786m0 0L16 16.427m1.786 1.787l1.787-1.787m-1.787 1.787L16 20"
            />
          </svg>
          <div className="text">Commission Breakdown</div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/rating")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            className="icon"
          >
            <path
              fill="currentColor"
              d="M19.95 15.89c.18.08.37.11.55.11c.41 0 .81-.17 1.1-.48L23.94 13H27c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3h-8c-1.65 0-3 1.35-3 3v4.99c0 1.65 1.35 3 3 3v1.5c0 .63.37 1.17.95 1.4M18 5c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-3.94L21 13.22V11h-2c-.55 0-1-.45-1-1zm-7.5 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3s-1.35-3-3-3m0 19.99c-2.9 0-5.12-.8-6.62-2.368c-1.931-2.015-1.886-4.585-1.881-4.838v-.017C2 21.26 3.26 20 4.82 20h11.36c1.55 0 2.82 1.259 2.82 2.817v.01c.004.182.06 2.77-1.88 4.805C15.62 29.201 13.4 30 10.5 30zm-5.68-7.992c-.45 0-.82.37-.82.82v.006c-.003.143-.028 2.025 1.34 3.44c1.1 1.149 2.84 1.728 5.16 1.728s4.05-.58 5.16-1.728c1.4-1.449 1.35-3.387 1.34-3.407c0-.49-.37-.859-.82-.859z"
            />
          </svg>
          <div className="text">Rating & Feedback</div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/ride-history")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            className="icon"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            >
              <path d="M5.818 6.727V14h7.273" />
              <path d="M4 24c0 11.046 8.954 20 20 20v0c11.046 0 20-8.954 20-20S35.046 4 24 4c-7.402 0-13.865 4.021-17.323 9.998" />
              <path d="m24.005 12l-.001 12.009l8.48 8.48" />
            </g>
          </svg>
          <div className="text">Ride History</div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div
          className="sidebar-menu-item"
          onClick={() => handleNavigation("/registered-vehicles")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            className="icon"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667M85.334 256c0 87.032 65.145 158.848 149.332 169.346V316.358c-21.87-7.73-38.283-27.01-41.913-50.51L85.636 245.762q-.301 5.081-.302 10.238m341.031-10.238l-107.118 20.086c-3.629 23.5-20.043 42.78-41.913 50.51v108.988C361.523 414.848 426.668 343.032 426.668 256q-.001-5.156-.302-10.238M256 85.334c-76.056 0-140.493 49.75-162.541 118.484l107.16 20.085C211.699 204.827 232.352 192 256 192c23.65 0 44.302 12.827 55.382 31.903l107.16-20.085C396.493 135.084 332.057 85.334 256 85.334"
            />
          </svg>
          <div className="text">Registered Vehicles</div>
          <span className="count-badge">2</span>
          <i className="fas fa-chevron-right arrow"></i>
        </div>

        <div className="sidebar-section-title"></div>
        <div className="sidebar-menu-item contact-us no-icon">
          <div className="text">Contact Us</div>
        </div>
        <div
          className="sidebar-menu-item logout no-icon"
          onClick={() => handleNavigation("/login")}
        >
          <div className="text">Logout</div>
        </div>
      </div>

      {/* Header Section */}
      <div className="header">
        <div className="header-top-row">
          <h1>
            <strong>DriveDesk</strong>
          </h1>
          <i
            className="fas fa-bars"
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={handleMenuClick}
          ></i>
        </div>
        <div className="toggle-container-wrapper">
          <div className="toggle-container">
            <span
              className={`toggle-text ${!isAvailable ? "active" : "inactive"}`}
            >
              Unavailable
            </span>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                checked={isAvailable}
                onChange={handleAvailabilityToggle}
              />
            </div>
            <span
              className={`toggle-text ${isAvailable ? "active" : "inactive"}`}
            >
              I'm Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="main-content-wrapper">
        {/* Content for Unavailable State */}
        {!isAvailable && (
          <div className="main-content-unavailable">
            <h2>
              You're not
              <br />
              visible to
              <br />
              customers
            </h2>
            <p>
              You're not accepting rides right now.
              <br />
              Switch to I'm Available to start getting
              <br />
              ride requests.
            </p>
          </div>
        )}

        {/* Live Ride Request Section */}
        {isAvailable && (
          <div className="live-ride-request-section">
            <h3 className="section-header">Live Ride Request</h3>
            <div className="card">
              <div className="card-body">
                <div className="location-group">
                  <i className="fas fa-circle-dot icon pickup"></i>
                  <div className="location-text">
                    <strong>PICKUP</strong>
                    <span>10 Salturny Bauk, Mumbai, India</span>
                  </div>
                  <div className="location-line"></div>
                </div>
                <div className="location-group mb-4">
                  <i className="fas fa-location-dot icon dropoff"></i>
                  <div className="location-text">
                    <strong>DROP-OFF</strong>
                    <span>105 William St, Mumbai, India</span>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>CUSTOMER NAME</strong>
                    <span>Nick Oberoy</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>
                      FARE ESTIMATE{" "}
                      <span className="currency-label">(ONE WAY)</span>
                    </strong>
                    <span className="price">
                      ₹ 2,880 <span className="currency-label">(UPI)</span>
                    </span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>CUSTOMER CONTACT</strong>
                    <span>+91 80XXXXX01</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>TRIP DISTANCE & DURATION</strong>
                    <span>160 Km | 5 Hour</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <strong>VEHICLE TYPE</strong>
                    <span>Honda Amaze</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>PASSENGER COUNT</strong>
                    <span>4</span>
                  </div>
                </div>
              </div>
              <div className="card-footer-custom">
                <button type="button" className="btn btn-reject">
                  REJECT
                </button>
                <button type="button" className="btn btn-accept">
                  ACCEPT
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scheduled Ride Request Section */}
        {isAvailable && (
          <div className="scheduled-ride-request-section">
            <h3 className="section-header">Scheduled Ride Request</h3>
            <div className="card">
              <div className="card-body">
                <div className="location-group">
                  <i className="fas fa-circle-dot icon pickup"></i>
                  <div className="location-text">
                    <strong>PICKUP</strong>
                    <span>10, Udaipur, Rajasthan, India</span>
                  </div>
                  <div className="location-line"></div>
                </div>
                <div className="location-group mb-4">
                  <i className="fas fa-location-dot icon dropoff"></i>
                  <div className="location-text">
                    <strong>DROP-OFF</strong>
                    <span>105 William St, Mumbai, India</span>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>CUSTOMER NAME</strong>
                    <span>Dev Singhal</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>
                      FARE ESTIMATE{" "}
                      <span className="currency-label">(ONE WAY)</span>
                    </strong>
                    <span className="price">
                      ₹ 54,450 <span className="currency-label">(UPI)</span>
                    </span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>CUSTOMER CONTACT</strong>
                    <span>+91 92XXXXX81</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>TRIP DISTANCE & DURATION</strong>
                    <span>990 Km | 16 Hour</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>PICKUP DATE & TIME</strong>
                    <span>4 June, 09:00 PM</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>PASSENGER COUNT</strong>
                    <span>42</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <strong>VEHICLE TYPE</strong>
                    <span>Volvo B9R (Bus)</span>
                  </div>
                </div>
              </div>
              <div className="card-footer-custom">
                <button type="button" className="btn btn-reject">
                  REJECT
                </button>
                <button type="button" className="btn btn-accept">
                  ACCEPT
                </button>
              </div>
              <div className="confirm-reject-message text-center">
                Confirm or Reject within 2 hours.
              </div>
            </div>
          </div>
        )}

        {/* Scheduled Bookings Section */}
        {isAvailable && (
          <div className="scheduled-bookings-section">
            <h3 className="section-header">Scheduled Bookings</h3>

            {/* Booking Card 1 */}
            <div className="card">
              <div className="booking-time-left">{countdown1}</div>
              <div className="card-body">
                <div className="location-group">
                  <i className="fas fa-circle-dot icon pickup"></i>
                  <div className="location-text">
                    <strong>PICKUP</strong>
                    <span>10 Salturny Bauk, Mumbai, India</span>
                  </div>
                  <div className="location-line"></div>
                </div>
                <div className="location-group mb-4">
                  <i className="fas fa-location-dot icon dropoff"></i>
                  <div className="location-text">
                    <strong>DROP-OFF</strong>
                    <span>105 William St, Mumbai, India</span>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>CUSTOMER NAME</strong>
                    <span>Alex Amor</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>
                      FARE ESTIMATE{" "}
                      <span className="currency-label">(ROUND TRIP)</span>
                    </strong>
                    <span className="price">
                      ₹ 1,300 <span className="currency-label">(CASH)</span>
                    </span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>CUSTOMER CONTACT</strong>
                    <span>+91 79XXXXX42</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>TRIP DISTANCE & DURATION</strong>
                    <span>52 Km | 1 Hour</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>PICKUP DATE & TIME</strong>
                    <span>2 June, 10:00 AM</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>PASSENGER COUNT</strong>
                    <span>2</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <strong>VEHICLE TYPE</strong>
                    <span>Mercedes-Benz GLA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card 2 */}
            <div className="card">
              <div className="booking-time-left">{countdown2}</div>
              <div className="card-body">
                <div className="location-group">
                  <i className="fas fa-circle-dot icon pickup"></i>
                  <div className="location-text">
                    <strong>PICKUP</strong>
                    <span>10 Salturny Bauk, Mumbai, India</span>
                  </div>
                  <div className="location-line"></div>
                </div>
                <div className="location-group mb-4">
                  <i className="fas fa-location-dot icon dropoff"></i>
                  <div className="location-text">
                    <strong>DROP-OFF</strong>
                    <span>105 William St, Mumbai, India</span>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <strong>CUSTOMER NAME</strong>
                    <span>Jeya Beber</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>
                      FARE ESTIMATE{" "}
                      <span className="currency-label">(ROUND TRIP)</span>
                    </strong>
                    <span className="price">
                      ₹ 11,984 <span className="currency-label">(CASH)</span>
                    </span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>CUSTOMER CONTACT</strong>
                    <span>+91 79XXXXX42</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>TRIP DISTANCE & DURATION</strong>
                    <span>428 Km | 9 Hour</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <strong>PICKUP DATE & TIME</strong>
                    <span>11 June, 07:30 AM</span>
                  </div>
                  <div className="col-6 text-end">
                    <strong>PASSENGER COUNT</strong>
                    <span>6</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <strong>VEHICLE TYPE</strong>
                    <span>MARUTI SUZUKI ERTIGA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .driver-page {
          font-family: "Inter", sans-serif;
          background-color: white;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .container-fluid {
          max-width: 100%;
          padding: 0;
          background-color: #f0f2f5;
          min-height: 100vh;
        }

        .header {
          background-color: #fff;
          padding: 15px 20px;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #eee;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header .header-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 10px;
        }

        .header h1 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .header .fa-bars {
          font-size: 1.25rem;
          color: black;
          cursor: pointer;
        }

        .header .toggle-container-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .header .toggle-container {
          display: flex;
          background-color: white;
          border-radius: 20px;
          padding: 4px 6px;
          align-items: center;
        }

        .header .toggle-text {
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 16px;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          white-space: nowrap;
        }

        .header .toggle-text.inactive {
          font-size: 0.85rem;
          color: #6c757d;
        }

        .header .toggle-text.active {
          font-weight: 600;
          font-size: 1.05rem;
        }

        .header .toggle-text.active {
          color: ${isAvailable ? "#007bff" : "#dc3545"};
        }

        .header .form-check {
          padding-left: 0;
          margin: 0 5px;
          display: flex;
          align-items: center;
          height: 28px;
        }

        .header .form-check-input {
          width: 40px;
          height: 22px;
          border-radius: 20px;
          margin: 0;
          cursor: pointer;
          background-color: ${isAvailable ? "#007bff" : "#dc3545"};
          border: none;
          transition: background-color 0.2s ease-in-out;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
          background-position: ${isAvailable ? "right center" : "left center"};
        }

        .header .form-check-input:focus {
          box-shadow: none;
        }

        .main-content-wrapper {
          padding: 15px;
          background-color: #f0f2f5;
        }

        .main-content-unavailable {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          background-color: #f0f2f5;
        }

        .main-content-unavailable h2 {
          font-size: 2.2rem;
          font-weight: 600;
          color: #f77a7f;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .main-content-unavailable p {
          font-size: 1rem;
          color: #555;
          max-width: 300px;
          line-height: 1.5;
        }

        .card {
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
          overflow: hidden;
          background-color: #fff;
          border: none;
        }

        .section-header {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
          padding: 15px 0 10px 0;
          background-color: transparent;
          margin-bottom: 5px;
        }

        .card-body {
          padding: 20px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .col-6 {
          flex: 0 0 50%;
          max-width: 50%;
          font-size: 0.9rem;
        }

        .col-12 {
          flex: 0 0 100%;
          max-width: 100%;
          font-size: 0.9rem;
        }

        .text-end {
          text-align: right;
        }

        .mb-3 {
          margin-bottom: 1rem;
        }

        .mb-4 {
          margin-bottom: 1.5rem;
        }

        .card-body strong {
          display: block;
          color: #333;
          margin-bottom: 3px;
          font-weight: 500;
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        .card-body span {
          color: #666;
          font-weight: 400;
        }

        .price {
          color: #007bff;
          font-weight: 600;
        }

        .currency-label {
          font-size: 0.8em;
          color: #999;
          margin-left: 3px;
        }

        .location-group {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
          position: relative;
        }

        .location-group .icon {
          font-size: 1rem;
          margin-right: 10px;
          z-index: 1;
          position: relative;
          margin-top: 2px;
        }

        .location-group .icon.pickup {
          color: rgba(76, 229, 177, 1);
        }

        .location-group .icon.dropoff {
          color: #dc3545;
        }

        .location-group .location-text {
          flex-grow: 1;
          padding-bottom: 5px;
        }

        .location-group .location-text strong {
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 2px;
          display: block;
          text-transform: uppercase;
        }

        .location-group .location-text span {
          font-size: 1rem;
          color: #333;
          font-weight: 500;
          border-bottom: 1px dashed #ccc;
          padding-bottom: 2px;
          display: inline-block;
          width: 100%;
        }

        .location-line {
          position: absolute;
          left: 20px;
          top: 25px;
          height: calc(100% - 40px);
          width: 1px;
          background-color: #ccc;
          z-index: 0;
          transform: translateX(-50%);
        }

        .card-footer-custom {
          background-color: #fff;
          padding: 15px 20px;
          border-top: 1px solid #eee;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .btn {
          border-radius: 8px;
          font-weight: 600;
          padding: 8px 18px;
          font-size: 0.9rem;
          min-width: 100px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-reject {
          background-color: #dc3545;
          color: #fff;
        }

        .btn-reject:hover {
          background-color: #c82333;
        }

        .btn-accept {
          background-color: #007bff;
          color: #fff;
        }

        .btn-accept:hover {
          background-color: #0056b3;
        }

        .confirm-reject-message {
          background-color: rgba(255, 58, 58, 0.41);
          color: black;
          padding: 10px 15px;
          font-size: 0.85rem;
          text-align: center;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          border-top: 1px solid #eee;
        }

        .booking-time-left {
          background-color: #343a40;
          color: #fff;
          padding: 10px 15px;
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        /* Sidebar Styling */
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1050;
        }

        .sidebar-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 300px;
          height: 100%;
          background-color: #1a1a1a;
          color: #fff;
          z-index: 1060;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          padding-top: 20px;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
        }

        .sidebar-menu.active {
          transform: translateX(0);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 20px;
        }

        .sidebar-header .back-arrow {
          font-size: 1.25rem;
          color: #fff;
          cursor: pointer;
          margin-right: 15px;
        }

        .sidebar-header .user-account-text {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }

        .sidebar-menu-item {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .sidebar-menu-item:hover {
          background-color: rgba(255, 255, 255, 0.08);
        }

        .sidebar-menu-item .icon {
          font-size: 1rem;
          margin-right: 15px;
          width: 20px;
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
        }

        .sidebar-menu-item.no-icon .icon {
          display: none;
        }

        .sidebar-menu-item .text {
          flex-grow: 1;
          font-size: 0.95rem;
          font-weight: 400;
        }

        .sidebar-menu-item .sub-text {
          font-size: 0.75rem;
          color: #aaa;
          display: block;
          margin-top: 2px;
        }

        .sidebar-menu-item .arrow {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          margin-left: auto;
        }

        .sidebar-menu-item .toggle-switch-wrapper {
          margin-left: auto;
        }

        .sidebar-menu-item .toggle-switch-wrapper .form-check-input {
          width: 40px;
          height: 22px;
          border-radius: 20px;
          background-color: ${isAvailable ? "blue" : "#ff4757"};
          border: none;
          transition: background-color 0.2s ease-in-out;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
          background-position: ${isAvailable ? "right center" : "left center"};
        }

        .count-badge {
          background-color: #ff4757;
          color: white;
          font-size: 0.75rem;
          padding: 2px 7px;
          border-radius: 12px;
          margin-left: 10px;
          min-width: 18px;
          text-align: center;
        }

        .sidebar-section-title {
          color: #aaa;
          font-size: 0.8rem;
          text-transform: uppercase;
          padding: 10px 20px 5px 20px;
          margin-top: 15px;
          margin-bottom: 5px;
        }

        .sidebar-menu-item.contact-us {
          color: #5dade2;
          border-top: none;
        }

        .sidebar-menu-item.logout {
          color: #ff4757;
          border-top: none;
        }

        @media (max-width: 576px) {
          .header {
            padding: 10px 15px;
          }

          .header h1 {
            font-size: 1.1rem;
          }

          .main-content-unavailable h2 {
            font-size: 1.8rem;
          }

          .main-content-unavailable p {
            font-size: 0.9rem;
          }

          .section-header {
            font-size: 1.1rem;
            padding: 10px 0 5px 0;
          }

          .card-body {
            padding: 15px;
          }

          .card-footer-custom {
            flex-direction: column;
            gap: 8px;
            padding: 10px 15px;
          }

          .card-footer-custom .btn {
            width: 100%;
          }

          .row {
            flex-direction: column;
          }

          .col-6 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
