import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [isAvailable, setIsAvailable] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (action) => {
    alert(`${action} feature coming soon!`);
    setIsMenuOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="main-container">
        <div className="header-top">
          <h2>DriveDesk</h2>
          <button className="menu-button" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="availability-section">
          <span
            className="unavailable-label"
            style={{ color: isAvailable ? "#6c757d" : "#dc3545" }}
          >
            Unavailable
          </span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={(e) => setIsAvailable(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <span
            className="available-label"
            style={{ color: isAvailable ? "#0d6efd" : "#6c757d" }}
          >
            I'm Available
          </span>
        </div>

        <div className="status-text">
          {!isAvailable ? (
            <>
              <h3>You're not visible to customers</h3>
              <p>
                You're not accepting rides right now. Switch to I'm Available to
                start getting ride requests.
              </p>
            </>
          ) : (
            <>
              <h3>You're visible to customers</h3>
              <p>You're ready to accept rides! Waiting for requests...</p>
            </>
          )}
        </div>
      </div>

      {/* Sliding Menu Overlay */}
      <div
        className={`sliding-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className={`sliding-menu ${isMenuOpen ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="menu-header">
            <i
              className="fas fa-arrow-left back-arrow-menu"
              onClick={toggleMenu}
            ></i>
            <div className="user-info">
              <p>Your account</p>
              <small>Dev Singnai</small>
            </div>
            <div className="user-avatar">
              <img
                src="https://placehold.co/50x50/e0e0e0/343a40?text=DS"
                alt="User Avatar"
              />
            </div>
          </div>

          <div className="menu-links">
            <button
              className="menu-item"
              onClick={() => handleNavigation("/profile")}
            >
              <i className="fas fa-user-circle"></i>
              <span className="item-text">Account Center</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
            <p className="menu-section-title">
              Password, Security, Personal & Vehicle Details
            </p>

            <div className="menu-item">
              <i className="fas fa-car"></i>
              <span className="item-text">Drive Status</span>
              <label className="toggle-switch small-toggle ms-auto">
                <input
                  type="checkbox"
                  checked={isAvailable}
                  onChange={(e) => setIsAvailable(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <button
              className="menu-item"
              onClick={() => handleNavigation("/wallet")}
            >
              <i className="fas fa-wallet"></i>
              <span className="item-text">GVW Wallet</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
            <button
              className="menu-item"
              onClick={() => handleMenuItemClick("Refer & Earn")}
            >
              <i className="fas fa-handshake"></i>
              <span className="item-text">Refer & Earn</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
            <button
              className="menu-item"
              onClick={() => handleNavigation("/tips")}
            >
              <i className="fas fa-money-bill-wave"></i>
              <span className="item-text">Tips Received</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
            <button
              className="menu-item"
              onClick={() => handleMenuItemClick("GVW Plans")}
            >
              <i className="fas fa-tags"></i>
              <span className="item-text">GVW Plans</span>
              <span className="item-count">1</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
            <button
              className="menu-item"
              onClick={() => handleMenuItemClick("Commission Breakdown")}
            >
              <i className="fas fa-chart-line"></i>
              <span className="item-text">Commission Breakdown</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
            <button
              className="menu-item"
              onClick={() => handleNavigation("/rating")}
            >
              <i className="fas fa-star"></i>
              <span className="item-text">Rating & Feedback</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
            <button
              className="menu-item"
              onClick={() => handleNavigation("/ride-history")}
            >
              <i className="fas fa-history"></i>
              <span className="item-text">Ride History</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
            <button
              className="menu-item"
              onClick={() => handleNavigation("/vehicle-registration")}
            >
              <i className="fas fa-car-alt"></i>
              <span className="item-text">Registered Vehicles</span>
              <span className="item-count">2</span>
              <i className="fas fa-chevron-right arrow-right"></i>
            </button>
          </div>

          <p className="menu-section-title">Support & Help</p>

          <div className="menu-footer">
            <button
              className="logout-btn"
              onClick={() => handleNavigation("/login")}
            >
              Logout
            </button>
            <p className="footer-text">© 2025 GVW. All rights reserved.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-container {
          font-family: "Inter", sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 1rem;
        }

        .main-container {
          width: 100%;
          max-width: 500px;
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 2rem);
          position: relative;
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
        }

        .header-top h2 {
          font-weight: 700;
          color: #343a40;
          font-size: 1.8rem;
          margin: 0;
          flex-grow: 1;
          text-align: left;
        }

        .menu-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #343a40;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .menu-button:hover {
          color: #0d6efd;
        }

        .availability-section {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
        }

        .availability-section span {
          font-weight: 600;
          color: #495057;
          font-size: 1.1rem;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 34px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #0d6efd;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #0d6efd;
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }

        .status-text {
          text-align: center;
          padding: 2rem 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .status-text h3 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #ffb6c1;
          margin-bottom: 1rem;
        }

        .status-text p {
          font-size: 1rem;
          color: #6c757d;
          line-height: 1.6;
          max-width: 300px;
        }

        .sliding-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1000;
          visibility: hidden;
          opacity: 0;
          transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
        }

        .sliding-menu-overlay.active {
          visibility: visible;
          opacity: 1;
        }

        .sliding-menu {
          position: fixed;
          top: 0;
          right: -80%;
          width: 80%;
          max-width: 350px;
          height: 100%;
          background-color: #212121;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
          z-index: 1001;
          transition: right 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
        }

        .sliding-menu.active {
          right: 0;
        }

        .menu-header {
          padding: 1.5rem;
          padding-top: 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .menu-header .back-arrow-menu {
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .menu-header .user-info {
          flex-grow: 1;
          text-align: left;
          margin-left: 1rem;
        }

        .menu-header .user-info p {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .menu-header .user-info small {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .menu-header .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .menu-header .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .menu-links {
          flex-grow: 1;
          padding: 1rem 0;
          overflow-y: auto;
        }

        .menu-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          color: rgba(255, 255, 255, 0.8);
          background: none;
          border: none;
          text-decoration: none;
          transition:
            background-color 0.2s ease,
            color 0.2s ease;
          font-weight: 500;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .menu-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .menu-item i {
          font-size: 1.2rem;
          margin-right: 1rem;
          min-width: 20px;
          text-align: center;
        }

        .menu-item .item-text {
          flex-grow: 1;
        }

        .menu-item .item-count {
          background-color: #0d6efd;
          color: white;
          border-radius: 0.5rem;
          padding: 0.2rem 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .menu-item .arrow-right {
          font-size: 0.9rem;
          margin-left: 0.5rem;
          opacity: 0.6;
        }

        .menu-section-title {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 1rem 1.5rem 0.5rem;
          text-transform: uppercase;
        }

        .menu-footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
        }

        .menu-footer .logout-btn {
          background: none;
          border: none;
          color: #dc3545;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .menu-footer .logout-btn:hover {
          color: #c82333;
        }

        .menu-footer .footer-text {
          font-size: 0.8rem;
          opacity: 0.7;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Menu;
