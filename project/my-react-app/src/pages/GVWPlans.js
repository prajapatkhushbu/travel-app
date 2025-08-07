import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GVWPlans = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleViewDetails = (planName) => {
    alert(`View details for ${planName}`);
  };

  const handleBuyPlan = (planName) => {
    alert(`Buy ${planName} - Payment integration coming soon!`);
  };

  const handleRenewPlan = () => {
    alert("Renew plan - Payment integration coming soon!");
  };

  return (
    <div className="gvw-plans-page">
      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className="container">
        {/* Top Bar with Back Arrow and Title */}
        <div className="top-bar">
          <button className="back-btn" onClick={() => navigate("/home")}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <h5 className="fw-bold">GVW Plans</h5>
          
        </div>

        {/* Plan Start at 999 */}
        <div className="top-plan">
          <p className="plan-start-note">Pick a Plan and Get started Today.</p>
          <div className="plan-start-btn">PLAN START AT ₹999</div>
        </div>

        {/* Ongoing Plan */}
        <h6 className="section-title">Ongoing Plan</h6>
        <div className="plan-card">
          <div className="plan-header">
            <div className="plan-title">Bronze Plan</div>
            <div className="plan-badge badge-active">Active</div>
          </div>
          <p className="text-muted mb-1">Enjoy 10 rides</p>
          <div className="plan-price">₹999</div>
          <div className="plan-info">30 Days Validity (8 Days Remaining)</div>
          <div className="plan-info">24/7 Priority Support</div>
          <div className="plan-info">4 / 10 Inside Token</div>
          <div className="plan-info">0% Agency Commission</div>
          <div className="plan-buttons mt-3">
            <button
              className="btn btn-outline-dark w-50"
              onClick={() => handleViewDetails("Bronze Plan")}
            >
              View Details
            </button>
            <button className="btn btn-black w-50" onClick={handleRenewPlan}>
              Renew Plan
            </button>
          </div>
        </div>

        {/* Other Plans */}
        <h6 className="section-title">Other Plans</h6>
        <div className="plan-badge badge-bestseller">Bestseller</div>

        {/* Silver Plan */}
        <div className="plan-card">
          <div className="plan-header">
            <div className="plan-title">Silver Plan</div>
          </div>
          <p className="text-muted mb-1">Enjoy 20 rides</p>
          <div className="plan-price">₹1,899</div>
          <div className="plan-info">60 Days Validity</div>
          <div className="plan-info">24/7 Priority Support</div>
          <div className="plan-info">20 Inside Token</div>
          <div className="plan-info">0% Agency Commission</div>
          <div className="plan-buttons mt-3">
            <button
              className="btn btn-outline-dark w-50"
              onClick={() => handleViewDetails("Silver Plan")}
            >
              View Details
            </button>
            <button
              className="btn btn-black w-50"
              onClick={() => handleBuyPlan("Silver Plan")}
            >
              Buy Plan
            </button>
          </div>
        </div>

        <div className="plan-badge badge-bestvalue">Best Value</div>

        {/* Gold Plan */}
        <div className="plan-card">
          <div className="plan-header">
            <div className="plan-title">Gold Plan</div>
          </div>
          <p className="text-muted mb-1">Enjoy 30 rides</p>
          <div className="plan-price">₹2,499</div>
          <div className="plan-info">90 Days Validity</div>
          <div className="plan-info">24/7 Priority Support</div>
          <div className="plan-info">Unlimited Inside Token</div>
          <div className="plan-info">0% Agency Commission</div>
          <div className="plan-buttons mt-3">
            <button
              className="btn btn-outline-dark w-50"
              onClick={() => handleViewDetails("Gold Plan")}
            >
              View Details
            </button>
            <button
              className="btn btn-black w-50"
              onClick={() => handleBuyPlan("Gold Plan")}
            >
              Buy Plan
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gvw-plans-page {
          font-family: "Segoe UI", sans-serif;
          background: #fff;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        .container {
          padding: 2rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .top-bar h5 {
          font-weight: 500;
          font-size: x-large;
          margin: 0;
          flex-grow: 1;
          text-align: center;
        }

        .back-btn,
        .menu-btn {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #333;
        }

        .top-plan {
          margin-top: -3px;
          margin-bottom: 10px;
        }

        .plan-start-note {
          margin-bottom: 10px;
          font-size: 14px;
          color: #666;
        }

        .plan-start-btn {
          background-color: black;
          color: white;
          border-radius: 20px;
          padding: 5px 12px;
          font-size: 13px;
          display: inline-block;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .plan-badge {
          font-size: 12px;
          padding: 3px 8px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          font-weight: 600;
          width: 25%;
          text-align: center;
          border: 1px;
          margin-bottom: -1px;
          z-index: 1;
          position: relative;
        }

        .badge-active {
          background-color: #00c853;
          color: black;
          width: 20%;
          text-align: center;
          border-color: white;
          border-radius: 5px;
          border: 2px solid white;
        }

        .badge-bestseller {
          background-color: #a100ff;
          color: white;
          width: 25%;
          text-align: center;
        }

        .badge-bestvalue {
          background-color: #ff00b8;
          color: white;
        }

        .plan-card {
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 1.2rem;
          background: linear-gradient(to right, #f7f8fc, #e0f0ff);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        }

        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .plan-title {
          font-weight: 700;
          color: #7209b7;
        }

        .plan-price {
          font-weight: 700;
          font-size: 22px;
          margin: 0.5rem 0;
        }

        .plan-info {
          font-size: 14px;
          color: #333;
          margin-bottom: 0.3rem;
        }

        .plan-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .plan-buttons .btn {
          font-weight: 600;
          border-radius: 8px;
        }

        .btn-outline-dark {
          color: black;
          background-color: rgba(220, 234, 253, 1);
          border: 1px solid #dee2e6;
        }

        .btn-black {
          background-color: black;
          color: white;
          border: none;
        }

        .btn {
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn:hover {
          opacity: 0.9;
        }

        .w-50 {
          width: 50% !important;
        }

        .mt-3 {
          margin-top: 1rem !important;
        }

        .mb-1 {
          margin-bottom: 0.25rem !important;
        }

        .text-muted {
          color: #6c757d !important;
        }

        .fw-bold {
          font-weight: 700 !important;
        }

        .section-title {
          font-weight: 700;
          font-size: 16px;
          margin-top: 2rem;
          margin-bottom: 1rem;
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
          background: none;
          border: none;
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

        .sidebar-menu-item.active {
          background-color: rgba(255, 255, 255, 0.1);
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
          background-color: #ff4757;
          border: none;
          transition: background-color 0.2s ease-in-out;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
          background-position: left center;
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
          .container {
            padding: 1rem;
          }

          .top-bar h5 {
            font-size: 1.25rem;
          }

          .plan-buttons {
            flex-direction: column;
          }

          .w-50 {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GVWPlans;
