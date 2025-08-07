import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tips = () => {
  const navigate = useNavigate();
  const [currentDateIndex, setCurrentDateIndex] = useState(1);

  const dateRanges = [
    "Apr 14 – May 14",
    "May 14 – June 14",
    "June 14 – July 14",
    "July 14 – Aug 14",
    "Aug 14 – Sep 14",
    "Sep 14 – Oct 14",
    "Oct 14 – Nov 14",
    "Nov 14 – Dec 14",
    "Jan 14 – Feb 14",
    "Mar 14 – Apr 14",
  ];

  const tipsData = [
    { name: "Nick Oberoy", trip: "Trip: 10 June", amount: "₹100" },
    { name: "Sophia Bennett", trip: "Trip: 5 June", amount: "₹50" },
    { name: "Ethan Walker", trip: "Trip: 30 May", amount: "₹200" },
    { name: "Olivia Hughes", trip: "Trip: 25 May – 26 May", amount: "₹500" },
    { name: "Emily Carter", trip: "Trip: 20 May", amount: "₹150" },
    { name: "Liam Thompson", trip: "Trip: 15 May", amount: "₹100" },
  ];

  const changeDate = (direction) => {
    setCurrentDateIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return 0;
      if (newIndex >= dateRanges.length) return dateRanges.length - 1;
      return newIndex;
    });
  };

  const CoinIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="24"
      viewBox="0 0 32 32"
    >
      <g fill="none">
        <path
          fill="#f9c23c"
          d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14"
        />
        <path
          fill="#d3883e"
          d="M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16S9.925 5 16 5s11 4.925 11 11m-4.68 3.89a.54.54 0 0 0-.51-.37h.03v-7.76c.43-.28.51-.97-.01-1.28l-5.39-3.26a.73.73 0 0 0-.78 0l-5.4 3.26c-.52.31-.44 1-.02 1.28v7.77h-.11c-.24 0-.45.16-.51.39l-.35 1.25c-.1.34.16.68.51.68h12.45c.35-.01.61-.36.5-.71zM11.9 11.88v7.64h1.66v-7.64zm3.31 0v7.64h1.69v-7.64zm3.35 0v7.64h1.62v-7.64z"
          opacity="0.53"
        />
      </g>
    </svg>
  );

  const totalAmount = tipsData.reduce(
    (sum, tip) => sum + parseInt(tip.amount.replace("₹", "").replace(",", "")),
    0,
  );

  return (
    <div className="tips-container">
      <div className="container-fluid">
        <div className="d-flex align-items-center mb-2">
          <button className="me-3 back-btn" onClick={() => navigate(-1)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="header-title">Tips Received</span>
        </div>

        <div className="date-nav">
          <i
            className="fas fa-caret-left date-arrow"
            onClick={() => changeDate(-1)}
          ></i>
          <span className="date-text">{dateRanges[currentDateIndex]}</span>
          <i
            className="fas fa-caret-right date-arrow"
            onClick={() => changeDate(1)}
          ></i>
        </div>

        <div className="flex-grow-1 overflow-auto">
          {tipsData.map((tip, index) => (
            <div key={index} className="tip-card">
              <div>
                <div className="tip-user">{tip.name}</div>
                <div className="tip-trip">{tip.trip}</div>
              </div>
              <div className="tip-amount">
                + {tip.amount} <CoinIcon />
              </div>
            </div>
          ))}
        </div>

        <div className="total-box">
          <div>
            Total
            <br />
            <span className="text-muted small">Tips: {tipsData.length}</span>
          </div>
          <div className="text-end">
            ₹{totalAmount.toLocaleString()}
            <CoinIcon />
          </div>
        </div>

        <button
          className="btn btn-wallet mt-2"
          onClick={() => navigate("/wallet")}
        >
          View GVW Wallet
        </button>
      </div>

      <style jsx>{`
        .tips-container {
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
          background-color: #fff;
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .container-fluid {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .tip-card {
          padding: 12px 0;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tip-user {
          font-weight: 600;
          font-size: 16px;
        }

        .tip-trip {
          font-size: 14px;
          color: gray;
        }

        .tip-amount {
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .date-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          padding: 25px 0px;
          border-bottom: 3px solid grey;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .total-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-top: 2px solid #eee;
          font-weight: 600;
          margin-top: auto;
        }

        .btn-wallet {
          background-color: black;
          color: white;
          font-weight: 600;
          border-radius: 8px;
          padding: 10px;
          width: 40%;
          align-self: center;
          margin-bottom: 1rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        .btn-wallet:hover {
          background-color: #333;
          color: white;
        }

        .date-arrow {
          font-size: 16px;
          color: black;
          cursor: pointer;
        }

        .date-text {
          margin: 0 5px;
        }

        .back-btn {
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          color: black;
          display: flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
        }

        .back-btn i {
          margin-right: 5px;
        }

        .header-title {
          font-weight: 700;
          font-size: 18px;
        }

        .flex-grow-1 {
          flex-grow: 1;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Tips;
