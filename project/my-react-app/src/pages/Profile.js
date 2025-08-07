import React from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Profile = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="profile-container">
      <div className="header">
        <h5>NEELESH</h5>
        <h5>SOLANKI</h5>
        <div className="badge-text">
          <i className="bi bi-patch-check-fill"></i> Gold Member
        </div>
        <div className="profile-pic">
          <img src="https://i.ibb.co/XW1gJh5/user.jpg" alt="Profile" />
          <div className="edit-icon">
            <i className="bi bi-pencil"></i>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="icon-row text-dark">
          <div onClick={() => alert("Help feature coming soon!")}>
            <i className="bi bi-life-preserver text-dark"></i>
            <div>Help</div>
          </div>
          <div onClick={() => handleNavigation("/wallet")}>
            <i className="bi bi-wallet2 text-dark"></i>
            <div>Wallet</div>
          </div>
          <div onClick={() => alert("Activity feature coming soon!")}>
            <i className="bi bi-bar-chart-line text-dark"></i>
            <div>Activity</div>
          </div>
        </div>

        <div className="list-group">
          <div
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => alert("Active Bookings coming soon!")}
          >
            Active Bookings <i className="fas fa-angle-right"></i>
          </div>
          <div
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => handleNavigation("/ride-history")}
          >
            Previous Bookings <i className="fas fa-angle-right"></i>
          </div>
          <div
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => alert("Edit Profile coming soon!")}
          >
            Edit Profile <i className="fas fa-angle-right"></i>
          </div>
          <div
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => alert("Privacy Policy coming soon!")}
          >
            Privacy Policy <i className="fas fa-angle-right"></i>
          </div>
          <div
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => alert("About Us coming soon!")}
          >
            About Us <i className="fas fa-angle-right"></i>
          </div>
        </div>

        <div className="footer-links mt-4">
          <button
            type="button"
            className="link-button text-primary"
            onClick={() => alert("Contact Us coming soon!")}
          >
            Contact Us
          </button>
          <button
            type="button"
            className="link-button logout"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </div>
      </div>

      <style jsx>{`
        .profile-container {
          margin: 0;
          padding: 0;
          font-family: "Segoe UI", sans-serif;
          background-color: #fff;
          min-height: 100vh;
        }

        .header {
          background-color: #000;
          color: #fff;
          padding: 2rem 1rem 4rem;
          position: relative;
        }

        .header h5 {
          margin: 0;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .badge-text {
          color: #ffd700;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .profile-pic {
          position: absolute;
          top: 1.5rem;
          right: 1.2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #fff;
        }

        .profile-pic img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .edit-icon {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: white;
          border-radius: 50%;
          padding: 2px;
          border: 1px solid #ccc;
          font-size: 12px;
        }

        .main {
          background-color: #fff;
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          margin-top: -40px;
          padding: 2rem 1rem 1rem;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
        }

        .icon-row {
          display: flex;
          justify-content: space-around;
          margin-bottom: 1.5rem;
          background-color: #f8f9fa;
          padding: 1rem 0;
          border-radius: 10px;
        }

        .icon-row div {
          text-align: center;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .icon-row div:hover {
          transform: translateY(-2px);
        }

        .icon-row i {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 5px;
        }

        .list-group-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          font-size: 0.95rem;
          border-radius: 10px;
          border: 1px solid #ddd;
          margin-bottom: 10px;
          background-color: #fff;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .list-group-item:hover {
          background-color: #f8f9fa;
        }

        .footer-links {
          margin-top: 2rem;
          font-size: 0.85rem;
        }

        .footer-links .link-button {
          display: block;
          text-decoration: none;
          margin-bottom: 8px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
          width: 100%;
        }

        .footer-links .link-button.logout {
          color: red;
          font-weight: 600;
        }

        .footer-links .link-button.text-primary {
          color: #0d6efd;
        }
      `}</style>
    </div>
  );
};

export default Profile;
