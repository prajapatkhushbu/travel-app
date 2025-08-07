import React from "react";
import { useNavigate } from "react-router-dom";

const RideHistory = () => {
  const navigate = useNavigate();

  const ridesData = [
    {
      pickupLocation: "My current location",
      dropoffLocation: "105 William St, Chicago, US",
      distance: "240 Km",
      payment: "₹1,200",
      isPaid: true,
    },
    {
      pickupLocation: "Downtown Mumbai",
      dropoffLocation: "Bandra West, Mumbai, India",
      distance: "120 Km",
      payment: "₹2,800",
      isPaid: true,
    },
    {
      pickupLocation: "Airport Terminal 1",
      dropoffLocation: "Hotel Grand Plaza, Delhi",
      distance: "560 Km",
      payment: "₹20,000",
      isPaid: false,
    },
    {
      pickupLocation: "Central Station",
      dropoffLocation: "Tech Park, Bangalore",
      distance: "42 Km",
      payment: "₹850",
      isPaid: true,
    },
    {
      pickupLocation: "Shopping Mall",
      dropoffLocation: "Residential Complex, Pune",
      distance: "240 Km",
      payment: "₹1,200",
      isPaid: true,
    },
  ];

  return (
    <div className="ride-history-container">
      <div className="main-container">
        <div className="header-top">
          <button className="back-arrow" onClick={() => navigate(-1)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <h2>Ride History</h2>
        </div>

        <h3 className="section-title">Past Rides</h3>

        <div className="ride-history-list">
          {ridesData.map((ride, index) => (
            <div key={index} className="ride-card">
              <div className="dotted-line"></div>
              <div className="ride-card-content">
                <div className="location-icon-wrapper">
                  <span className="circle-icon pickup">
                    <i className="fas fa-dot-circle"></i>
                  </span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="circle-icon dropoff">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <div className="location-details">
                  <div className="label">PICKUP</div>
                  <div className="address">{ride.pickupLocation}</div>
                  <div className="mt-3"></div>
                  <div className="label">DROP-OFF</div>
                  <div className="address">{ride.dropoffLocation}</div>
                </div>
                <div className="ride-info">
                  <div className="label">Distance</div>
                  <div className="distance">{ride.distance}</div>
                  <div className="mt-3">
                    <hr />
                  </div>
                  <div className="label">Payment</div>
                  <div className={`payment ${ride.isPaid ? "paid" : "unpaid"}`}>
                    {ride.payment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ride-history-container {
          font-family: "Inter", sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 1rem;
          padding-bottom: 2rem;
        }

        .main-container {
          width: 100%;
          max-width: 500px;
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          overflow: hidden;
          padding-bottom: 0;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 2rem);
        }

        .header-top {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
        }

        .header-top .back-arrow {
          color: #343a40;
          font-size: 1.5rem;
          margin-right: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .header-top .back-arrow:hover {
          color: #0d6efd;
        }

        .header-top h2 {
          font-weight: 700;
          color: #343a40;
          font-size: 1.8rem;
          margin: 0;
          flex-grow: 1;
        }

        .section-title {
          font-weight: 700;
          color: #343a40;
          font-size: 1.4rem;
          margin: 1.5rem 1.5rem 1rem;
        }

        .ride-history-list {
          flex-grow: 1;
          overflow-y: auto;
          padding-bottom: 1rem;
        }

        .ride-card {
          background-color: #ffffff;
          border-radius: 2rem;
          box-shadow: 0 0.25rem 0.5rem rgba(153, 153, 153, 0.3);
          margin: 0 1.5rem 1.5rem;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .ride-card-content {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 1rem;
          position: relative;
          z-index: 2;
        }

        .location-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .location-icon-wrapper .circle-icon {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.6rem;
          color: white;
        }

        .location-icon-wrapper .circle-icon.pickup {
          background-color: #28a745;
        }

        .location-icon-wrapper .circle-icon.dropoff {
          background-color: #dc3545;
        }

        .location-icon-wrapper .dot {
          width: 4px;
          height: 4px;
          background-color: #ced4da;
          border-radius: 50%;
        }

        .dotted-line {
          position: absolute;
          top: 1.5rem;
          bottom: 1.5rem;
          left: 2.25rem;
          width: 2px;
          background-image: linear-gradient(
            to bottom,
            #ced4da 50%,
            transparent 50%
          );
          background-size: 2px 10px;
          z-index: 0;
        }

        .location-details {
          text-align: left;
          flex-grow: 1;
        }

        .location-details .label {
          font-size: 0.8rem;
          color: #6c757d;
          font-weight: 500;
          margin-bottom: 0.2rem;
        }

        .location-details .address {
          font-size: 1rem;
          font-weight: 600;
          color: #343a40;
          line-height: 1.3;
        }

        .ride-info {
          text-align: right;
          font-weight: 600;
        }

        .ride-info .label {
          font-size: 0.8rem;
          color: #6c757d;
          font-weight: 500;
          margin-bottom: 0.2rem;
        }

        .ride-info .distance {
          font-size: 1rem;
          color: #343a40;
          margin-bottom: 0.5rem;
        }

        .ride-info .payment {
          font-size: 1.1rem;
          color: black;
          background-color: rgb(188, 190, 245);
          font-size: small;
          border-radius: 20px;
          text-align: center;
          padding: 4px 8px;
        }

        .ride-info .payment.unpaid {
          background-color: #ffcccc;
          color: #dc3545;
        }

        .ride-info .payment.paid {
          background-color: rgb(188, 190, 245);
          color: black;
        }

        .mt-3 {
          margin-top: 1rem;
        }

        .mt-3 hr {
          border: none;
          height: 1px;
          background-color: #eee;
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
};

export default RideHistory;
