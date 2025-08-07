import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto redirect based on role
    const timer = setTimeout(() => {
      const role = localStorage.getItem('selectedRole');
      if (role === 'customer') {
        navigate('/customer-ride-selection');
      } else {
        navigate('/get-start');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-page-container">
      <div className="success-container">
        <div className="success-icon-wrapper rounded-full">
          <i className="fas fa-check success-icon"></i>
        </div>
        <h1 className="mb-3">Success!</h1>
        <p className="mb-0">
          Congratulations! You have been successfully authenticated.
        </p>
      </div>

      <style jsx>{`
        .success-page-container {
          font-family: "Inter", sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f8f9fa;
          margin: 0;
          padding: 20px;
        }

        .success-container {
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          width: 400px;
          max-width: 400px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .success-icon-wrapper {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #d1e7dd;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 30px;
          overflow: hidden;
        }

        .success-icon {
          font-size: 50px;
          color: #28a745;
        }

        h1 {
          color: #343a40;
          font-size: 2.2rem;
          margin-bottom: 15px;
          font-weight: 700;
        }

        p {
          color: #6c757d;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        @media (max-width: 576px) {
          .success-container {
            padding: 30px 20px;
          }

          h1 {
            font-size: 1.8rem;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Success;
