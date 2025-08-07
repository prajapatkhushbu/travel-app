import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    localStorage.setItem('selectedRole', role); // Store role for later use
    if (role === "driver") {
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="role-selection-container">
      <div className="content-wrapper">
        <br />
        <br />
        <br />
        <br />
        <br />

        <button
          className="role-button customer"
          onClick={() => handleRoleSelection("customer")}
        >
          <img src="/images/fam icon 2.jpg" alt="Customer Icon" />
          <span>I'm Customer</span>
          <span className="sub-text">Need a smooth and safe ride.</span>
        </button>

        <button
          className="role-button driver"
          onClick={() => handleRoleSelection("driver")}
        >
          <img src="/images/driv-removebg-preview.png" alt="Driver Icon" />
          <span>I'm Driver</span>
          <span className="sub-text">Your Ride, My Responsibility</span>
        </button>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="description-text">
          Choose your ride: Behind the wheel or in the back seat.
        </p>
      </div>

      <style jsx>{`
        body,
        .role-selection-container {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Inter", sans-serif;
          overflow: hidden;
          position: relative;
        }

        .role-selection-container::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          height: 110vh;
          width: 100vw;
          background-image: url("/images/map img.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: -1;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90%;
          max-width: 375px;
          padding: 20px;
          box-sizing: border-box;
          gap: 20px;
          border-radius: 20px;
          opacity: 1;
        }

        .role-button {
          width: 100%;
          padding: 20px;
          border: none;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
          text-align: center;
          color: white;
          background: none;
        }

        .role-button.customer {
          background-color: #007bff;
        }

        .role-button.driver {
          background-color: #ff9800;
        }

        .role-button:hover {
          opacity: 0.9;
          transform: translateY(-3px);
        }

        .role-button img {
          height: 45px;
          width: 45px;
          margin-bottom: 10px;
        }

        .role-button .sub-text {
          font-size: 0.9rem;
          font-weight: 400;
          opacity: 0.9;
          margin-top: 5px;
          color: white;
        }

        .description-text {
          color: #333;
          font-size: 1.1rem;
          text-align: center;
          line-height: 1.4;
          max-width: 280px;
          font-weight: 500;
          padding: 0 15px;
        }

        @media (max-width: 400px) {
          .role-button {
            padding: 18px;
            font-size: 1.1rem;
          }

          .role-button img {
            height: 40px;
            width: 40px;
          }

          .description-text {
            font-size: 1rem;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default RoleSelection;
