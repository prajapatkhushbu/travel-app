import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CommissionBreakdown = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [commissionData] = useState([
    { date: "11 June, 2025", fare: 12000, commission: 960, status: "due" },
    { date: "22 Apr, 2025", fare: 9800, commission: 784, status: "paid" },
    { date: "14 March, 2025", fare: 8750, commission: 700, status: "paid" },
    { date: "01 Feb, 2025", fare: 7500, commission: 600, status: "paid" },
    { date: "10 Jan, 2025", fare: 8400, commission: 672, status: "paid" },
    { date: "18 Dec, 2024", fare: 9300, commission: 744, status: "paid" },
    { date: "02 Nov, 2024", fare: 6100, commission: 488, status: "paid" },
    { date: "15 Sep, 2024", fare: 6800, commission: 544, status: "paid" },
    { date: "03 July, 2024", fare: 8670, commission: 693.6, status: "paid" },
    { date: "20 May, 2024", fare: 5400, commission: 360, status: "paid" },
  ]);
  const [totals, setTotals] = useState({ totalEarned: 0, totalCommission: 0 });

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`;
  };

  useEffect(() => {
    let totalEarned = 0;
    let totalCommission = 0;

    commissionData.forEach((item) => {
      totalEarned += item.fare;
      totalCommission += item.commission;
    });

    setTotals({ totalEarned, totalCommission });
  }, [commissionData]);

  return (
    <div className="commission-breakdown-page">
      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      

      <div className="main-container">
        <div className="header-top">
          <button className="back-arrow" onClick={() => navigate("/home")}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <h2>Commission Breakdown</h2>
          
        </div>

        <div className="summary-cards-section">
          <div className="summary-card earned">
            <p className="label">Total earned</p>
            <h3 className="value">{formatCurrency(totals.totalEarned)}</h3>
          </div>
          <div className="summary-card commission">
            <p className="label">Commission given</p>
            <h3 className="value">{formatCurrency(totals.totalCommission)}</h3>
          </div>
        </div>

        <div className="note-section">
          <p>
            <strong>Note:</strong> 8% of each ride fare is deducted as
            commission by GVW agency.
          </p>
        </div>

        <div className="commission-table-section">
          <table className="commission-table">
            <thead>
              <tr>
                <th>Ride Date</th>
                <th>Ride Fare</th>
                <th>Comm. Amt.</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {commissionData.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-4">
                    No commission data to display.
                  </td>
                </tr>
              ) : (
                commissionData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{formatCurrency(item.fare)}</td>
                    <td>{formatCurrency(item.commission)}</td>
                    <td>
                      <span className={`status-badge ${item.status}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .commission-breakdown-page {
          font-family: "Inter", sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 1rem 0 2rem;
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
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
        }

        .back-arrow,
        .menu-btn {
          background: none;
          border: none;
          color: #343a40;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .back-arrow:hover,
        .menu-btn:hover {
          color: #0d6efd;
        }

        .header-top h2 {
          font-weight: 700;
          color: #343a40;
          font-size: 1.8rem;
          margin: 0;
          flex-grow: 1;
          text-align: center;
        }

        .summary-cards-section {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
        }

        .summary-card {
          flex: 1;
          border-radius: 0.75rem;
          padding: 1rem;
          text-align: center;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
        }

        .summary-card.earned {
          background-color: rgba(24, 119, 242, 0.09);
        }

        .summary-card.commission {
          background-color: rgba(231, 40, 79, 0.09);
        }

        .summary-card .label {
          font-size: 0.9rem;
          color: #6c757d;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .summary-card .value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #343a40;
          line-height: 1.2;
          margin: 0;
        }

        .summary-card.earned .value {
          color: #0d6efd;
        }

        .summary-card.commission .value {
          color: #dc3545;
        }

        .note-section {
          padding: 1.5rem;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
        }

        .note-section p {
          font-size: 0.9rem;
          color: black;
          margin: 0;
          font-weight: 500;
          line-height: 1.5;
        }

        .note-section strong {
          color: red;
        }

        .commission-table-section {
          padding: 1.5rem;
          background-color: white;
          flex-grow: 1;
          overflow-x: auto;
        }

        .commission-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 0.5rem;
          min-width: 450px;
        }

        .commission-table th,
        .commission-table td {
          padding: 0.75rem;
          text-align: left;
          vertical-align: middle;
          font-size: 0.9rem;
          color: #495057;
        }

        .commission-table thead th {
          background-color: #f0f2f5;
          font-weight: 600;
          color: #343a40;
          border-top: none;
          border-bottom: none;
        }

        .commission-table tbody tr {
          background-color: #f0f2f5;
          border-radius: 0.75rem;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .commission-table tbody tr:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
        }

        .commission-table tbody td {
          font-weight: 500;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .commission-table tbody tr:first-child td {
          border-top: none;
        }

        .commission-table tbody tr:last-child td {
          border-bottom: none;
        }

        .commission-table th:nth-child(2),
        .commission-table td:nth-child(2) {
          text-align: right;
        }

        .commission-table th:nth-child(3),
        .commission-table td:nth-child(3) {
          text-align: right;
        }

        .commission-table th:nth-child(4),
        .commission-table td:nth-child(4) {
          text-align: center;
        }

        .commission-table th:first-child {
          border-top-left-radius: 0.75rem;
          border-bottom-left-radius: 0.75rem;
        }

        .commission-table th:last-child {
          border-top-right-radius: 0.75rem;
          border-bottom-right-radius: 0.75rem;
        }

        .commission-table tbody tr td:first-child {
          border-top-left-radius: 0.75rem;
          border-bottom-left-radius: 0.75rem;
        }

        .commission-table tbody tr td:last-child {
          border-top-right-radius: 0.75rem;
          border-bottom-right-radius: 0.75rem;
        }

        .status-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.due {
          color: red;
        }

        .status-badge.paid {
          color: #388e3c;
        }

        .text-center {
          text-align: center;
        }

        .text-muted {
          color: #6c757d !important;
        }

        .py-4 {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
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
          .commission-breakdown-page {
            padding: 0.5rem 0 1rem;
          }

          .main-container {
            max-width: 100%;
            border-radius: 0;
          }

          .header-top {
            padding: 1rem;
          }

          .header-top h2 {
            font-size: 1.5rem;
          }

          .summary-cards-section {
            padding: 1rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .commission-table-section {
            padding: 1rem;
          }

          .commission-table {
            font-size: 0.8rem;
          }

          .commission-table th,
          .commission-table td {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CommissionBreakdown;
