import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Rating = () => {
  const navigate = useNavigate();
  const [currentRating, setCurrentRating] = useState(4.5);

  const feedbackData = [
    {
      name: "Nick Oberoy",
      timeAgo: "1 day ago",
      rating: 4,
      review:
        "Very polite and professional driver. The ride was smooth and comfortable. Thank you!",
      profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
      liked: false,
    },
    {
      name: "Sophia Bennett",
      timeAgo: "6 day ago",
      rating: 5,
      review:
        "Great experience! The driver was friendly, helpful with luggage, and drove safely.",
      profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
      liked: false,
    },
  ];

  const [feedback, setFeedback] = useState(feedbackData);

  const updateRating = (newRating) => {
    setCurrentRating(newRating);
    console.log(`User selected overall rating: ${newRating}`);
  };

  const toggleLike = (index) => {
    setFeedback((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, liked: !item.liked } : item,
      ),
    );
  };

  const handleStarClick = (event) => {
    const stars = event.currentTarget.children;
    let newRating = 0;

    for (let i = 0; i < stars.length; i++) {
      const starRect = stars[i].getBoundingClientRect();
      if (event.clientX >= starRect.left && event.clientX <= starRect.right) {
        if (event.clientX - starRect.left < starRect.width / 2) {
          newRating = i + 0.5;
        } else {
          newRating = i + 1;
        }
        break;
      }
    }

    if (newRating > 0) {
      updateRating(newRating);
    }
  };

  const renderStars = (rating, isInteractive = false) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - i >= 1) {
        stars.push(<i key={i} className="fas fa-star selected"></i>);
      } else if (rating - i >= 0.5) {
        stars.push(<i key={i} className="fas fa-star-half-alt selected"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="rating-container">
      <div className="main-container">
        <div className="header-top">
          <button className="back-arrow" onClick={() => navigate(-1)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <h2>Rating & Feedback</h2>
        </div>

        <div className="overall-avg-rating-section">
          <div className="overall-avg-rating-stars" onClick={handleStarClick}>
            {renderStars(currentRating, true)}
          </div>
          <p className="overall-avg-rating-text">
            Your Average Rating is {currentRating}
          </p>
        </div>

        <div className="customer-feedback-section">
          <h3>Customer Feedback</h3>

          {feedback.map((item, index) => (
            <div key={index} className="feedback-card-display">
              <img
                src={item.profileImage}
                alt={`${item.name} Profile`}
                className="profile-img"
              />
              <div className="feedback-content">
                <div className="reviewer-header">
                  <p className="reviewer-name">{item.name}</p>
                  <span className="time-ago">{item.timeAgo}</span>
                </div>
                <div className="review-stars">{renderStars(item.rating)}</div>
                <p className="review-text">{item.review}</p>
                <button
                  className={`like-btn ${item.liked ? "liked" : ""}`}
                  onClick={() => toggleLike(index)}
                >
                  <i
                    className={`${item.liked ? "fas" : "far"} fa-thumbs-up`}
                  ></i>{" "}
                  Like
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="view-all-reviews-link"
          onClick={() =>
            alert("Navigating to the full reviews list! (Simulated)")
          }
        >
          View all 157 reviews
        </button>
      </div>

      <style jsx>{`
        .rating-container {
          font-family: "Inter", sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-bottom: 2rem;
        }

        .main-container {
          width: 100%;
          max-width: 500px;
          background-color: #ffffff;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          overflow: hidden;
          padding-bottom: 0;
          height: 100vh;
        }

        .header-top {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          background-color: #ffffff;
        }

        .header-top .back-arrow {
          color: #343a40;
          font-size: 1.4rem;
          margin-right: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .header-top h2 {
          font-weight: 700;
          color: #343a40;
          font-size: 1.5rem;
          margin: 0;
        }

        .overall-avg-rating-section {
          padding: 1rem;
          text-align: center;
          background-color: #ffffff;
        }

        .overall-avg-rating-stars {
          display: inline-block;
          white-space: nowrap;
          cursor: pointer;
        }

        .overall-avg-rating-stars .fa-star,
        .overall-avg-rating-stars .fa-star-half-alt {
          font-size: 2.2rem;
          color: #e0e0e0;
          cursor: pointer;
          transition: color 0.2s ease;
          margin: 0 3px;
        }

        .overall-avg-rating-stars .fa-star.selected,
        .overall-avg-rating-stars .fa-star-half-alt.selected {
          color: #ffc107;
        }

        .overall-avg-rating-text {
          font-size: 1.1rem;
          color: #6c757d;
          font-weight: 500;
          margin-top: 0.75rem;
          font-family: "Inter", sans-serif;
        }

        .customer-feedback-section {
          padding: 1.5rem;
          background-color: #ffffff;
          flex-grow: 1;
          overflow-y: auto;
        }

        .customer-feedback-section h3 {
          font-weight: 600;
          color: #343a40;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
        }

        .feedback-card-display {
          display: flex;
          align-items: flex-start;
          padding: 1rem 0;
          border-bottom: 1px solid #eee;
        }

        .feedback-card-display:last-of-type {
          border-bottom: none;
        }

        .feedback-card-display .profile-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 1rem;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
        }

        .feedback-card-display .feedback-content {
          flex-grow: 1;
          text-align: left;
        }

        .feedback-card-display .reviewer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: -20px;
        }

        .feedback-card-display .reviewer-name {
          font-weight: 600;
          color: #343a40;
          font-size: 1.1rem;
        }

        .feedback-card-display .time-ago {
          font-size: 0.85rem;
          color: #6c757d;
        }

        .feedback-card-display .review-stars .fa-star {
          color: #ffc107;
          font-size: 1rem;
          margin-right: 2px;
        }

        .feedback-card-display .review-text {
          color: #495057;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 0.75rem;
          letter-spacing: 1px;
        }

        .feedback-card-display .like-btn {
          background: none;
          border: none;
          color: #0d6efd;
          font-size: 0.9rem;
          cursor: pointer;
          gap: 0.25rem;
          padding: 0;
          transition: color 0.2s ease;
          margin-bottom: -20px;
        }

        .feedback-card-display .like-btn:hover {
          color: #0d6efd;
        }

        .feedback-card-display .like-btn.liked {
          color: #0d6efd;
        }

        .view-all-reviews-link {
          color: red;
          background: none;
          border: none;
          font-weight: 500;
          font-size: 0.9rem;
          display: block;
          text-align: left;
          padding: 1.5rem;
          border-top: 1px solid #eee;
          background-color: #ffffff;
          transition: background-color 0.2s ease;
          margin-bottom: 20px;
          cursor: pointer;
          width: 100%;
        }

        .view-all-reviews-link:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default Rating;
