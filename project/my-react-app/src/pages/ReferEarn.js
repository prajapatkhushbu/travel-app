import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReferEarn = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [referralCode, setReferralCode] = useState("YN42S8");
  const [fullReferralLink, setFullReferralLink] = useState(
    "lorenzo/cruz.gvw-YN4258",
  );

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const generateReferralCode = (length = 6) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const updateReferralCode = () => {
    const newCode = generateReferralCode();
    const newFullLink = `lorenzo/cruz.gvw-${newCode}`;
    setReferralCode(newCode);
    setFullReferralLink(newFullLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(fullReferralLink)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch(() => {
        alert("Failed to copy");
      });
  };

  const shareViaWhatsApp = () => {
    const shareText = `Hey, check out GVW! Use my referral code: ${referralCode} to get started.`;
    const shareUrl = "https://www.example.com/gvw-app";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareViaFacebook = () => {
    const shareText = `Hey, check out GVW! Use my referral code: ${referralCode} to get started.`;
    const shareUrl = "https://www.example.com/gvw-app";
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, "_blank");
  };

  const shareViaTelegram = () => {
    const shareText = `Hey, check out GVW! Use my referral code: ${referralCode} to get started.`;
    const shareUrl = "https://www.example.com/gvw-app";
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, "_blank");
  };

  const genericShare = () => {
    const shareText = `Hey, check out GVW! Use my referral code: ${referralCode} to get started.`;
    const shareUrl = "https://www.example.com/gvw-app";

    if (navigator.share) {
      navigator
        .share({
          title: "GVW Refer & Earn",
          text: shareText,
          url: shareUrl,
        })
        .catch(() => {
          alert("Sharing failed. Please try copying the code manually.");
        });
    } else {
      alert(
        "Web Share API is not supported in this browser. Please copy the code manually or use specific social buttons.",
      );
    }
  };

  useEffect(() => {
    const newCode = generateReferralCode();
    const newFullLink = `lorenzo/cruz.gvw-${newCode}`;
    setReferralCode(newCode);
    setFullReferralLink(newFullLink);
  }, []);

  return (
    <div className="refer-earn-page">
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
          <h2>Refer & Earn</h2>
         
        </div>

        <div className="user-profile-section">
          <div className="user-profile-info">
            <h3>Lorenzo Cruz</h3>
            <p>
              <strong>GVW ID :</strong>
              <br />
              <span>lorenzocruz2005@gvw</span>
            </p>
            <p>
              <strong>+91 94XXXXXX28</strong>{" "}
              <span className="gvw-number-badge">
                <i className="fas fa-check-circle"></i> GVW number
              </span>
            </p>
          </div>
          <div className="user-profile-image-container">
            <img
              src="https://placehold.co/70x70/e0e0e0/343a40?text=LC"
              alt="User Profile"
            />
            <div className="qr-code-overlay">
              <i className="fas fa-qrcode"></i>
            </div>
          </div>
        </div>

        <div className="mid-bottom">
          <div className="invite-cta-section">
            <p className="invite-cta-text">
              Invite a family friend member, or colleague by clicking here
            </p>
            <button className="btn-refer-earn" onClick={updateReferralCode}>
              Refer & Earn
            </button>
          </div>

          <div className="reward-stats-section">
            <div className="stat-card earned">
              <div className="value">₹950</div>
              <div className="label">Reward earned</div>
            </div>
            <div className="stat-card refer-friend">
              <div className="value">₹150</div>
              <div className="label">Refer a friend</div>
            </div>
          </div>

          <div className="referral-code-section">
            <div className="code-display-wrapper">
              <input
                type="text"
                className="referral-code-text"
                value={fullReferralLink}
                readOnly
              />
              <button className="btn-copy" onClick={copyToClipboard}>
                Tap to copy
              </button>
            </div>
          </div>

          <div className="or-invite-via">
            <strong>OR INVITE VIA</strong>
          </div>
          <div className="combinedbtn">
            <div className="social-share-buttons">
              <button
                className="social-btn whatsapp"
                onClick={shareViaWhatsApp}
              >
                <i className="fab fa-whatsapp"></i> Via WhatsApp
              </button>
              <button
                className="social-btn facebook"
                onClick={shareViaFacebook}
              >
                <i className="fab fa-facebook-f"></i>
              </button>
              <button
                className="social-btn telegram"
                onClick={shareViaTelegram}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
              <button className="social-btn share" onClick={genericShare}>
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
          </div>

          <div className="invite-now-section">
            <button
              className="btn-invite-now"
              onClick={() => alert("Initiating general invitation process!")}
            >
              INVITE NOW
            </button>
            <span className="referral-code-label">
              Your Referral Code : <span>{referralCode}</span>
            </span>
          </div>

          <h3 className="hiw-title">How it works :</h3>
          <div className="how-it-works-section">
            <p className="hiw-head">
              Turn your network into earnings – Refer and get rewarded when they
              ride!
            </p>

            <div className="how-it-works-item">
              <div className="icon-wrapper">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="text-content">
                <p className="hiw-text">
                  Your Friend Registers with your Referral Code
                </p>
                <span className="reward-badge">You both get INR 50</span>
              </div>
            </div>

            <div className="how-it-works-item">
              <div className="icon-wrapper">
                <i className="fas fa-car-side"></i>
              </div>
              <div className="text-content">
                <p className="hiw-text">They Complete Their First Ride</p>
                <span className="reward-badge">You get INR 100</span>
              </div>
            </div>

            <div className="how-it-works-item">
              <div className="icon-wrapper">
                <i className="fas fa-redo-alt"></i>
              </div>
              <div className="text-content">
                <p className="hiw-text">Every time your friend rides!</p>
                <span className="reward-badge">You get more INR 50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .refer-earn-page {
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
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background-color: #ffffff;
        }

        .back-arrow {
          background: none;
          border: none;
          color: #343a40;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .back-arrow:hover {
          color: #0d6efd;
        }

        .header-top h2 {
          font-weight: 800;
          color: #343a40;
          font-size: 1.8rem;
          margin: 0;
          flex-grow: 1;
          text-align: center;
        }

        .menu-btn {
          background: none;
          border: none;
          color: #343a40;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .user-profile-section {
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .user-profile-info {
          flex-grow: 1;
          text-align: left;
        }

        .user-profile-info h3 {
          font-weight: 700;
          color: #050606;
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
        }

        .user-profile-info p {
          font-size: 0.95rem;
          color: #0b0b0b;
          margin-bottom: 0.5rem;
        }

        .gvw-number-badge {
          background-color: #0374a8;
          color: #ffffff;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .user-profile-image-container {
          position: relative;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #0d6efd;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
        }

        .user-profile-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .qr-code-overlay {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: white;
          border-radius: 50%;
          padding: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }

        .qr-code-overlay i {
          color: #343a40;
          font-size: 1rem;
        }

        .mid-bottom {
          background: rgba(255, 248, 217, 1);
          border-radius: 40px 40px 1px 1px;
          padding: 10px;
        }

        .invite-cta-section {
          padding: 1.5rem;
          text-align: center;
          background: rgba(255, 248, 217, 1);
          border-radius: 0.75rem;
          margin: 1.5rem;
        }

        .invite-cta-text {
          color: #000000;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .btn-refer-earn {
          background: rgba(255, 209, 57, 1);
          color: #343a40;
          border: none;
          border-radius: 0.75rem;
          padding: 0.85rem 2rem;
          font-weight: 700;
          font-size: 1.1rem;
          width: 100%;
          cursor: pointer;
          transition:
            background-color 0.2s ease,
            box-shadow 0.2s ease;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
        }

        .btn-refer-earn:hover {
          background-color: #e0a800;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .reward-stats-section {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 0 1.5rem 1.5rem;
        }

        .stat-card {
          flex: 1;
          background: rgba(24, 119, 242, 1);
          color: white;
          border-radius: 9rem;
          padding: 0.1rem 0.2rem;
          text-align: center;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-card .value {
          margin-left: 4.1rem;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          align-self: flex-start;
        }

        .stat-card .label {
          margin-left: 4.1rem;
          align-self: flex-start;
          font-size: 1rem;
          opacity: 1;
        }

        .referral-code-section {
          padding: 1.5rem;
          text-align: center;
        }

        .code-display-wrapper {
          display: flex;
          background-color: #ffffff;
          border: 1px solid #d1d2d2;
          overflow: hidden;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .referral-code-text {
          flex-grow: 1;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 600;
          color: #7d7d7d;
          text-align: left;
          background-color: transparent;
          border: none;
          outline: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .btn-copy {
          background: linear-gradient(270deg, #59238f 0%, #d1009d 100%);
          color: white;
          border: none;
          padding: 0.75rem 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-copy:hover {
          opacity: 0.9;
        }

        .or-invite-via {
          text-align: center;
          color: #050606;
          margin: 1.5rem 0;
          font-size: 0.9rem;
        }

        .social-share-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .social-btn {
          border: none;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          color: white;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
          cursor: pointer;
        }

        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .social-btn.whatsapp {
          gap: 10px;
          width: 171px;
          height: 42px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 12px;
          background: rgba(99, 199, 88, 1);
        }

        .social-btn.facebook {
          color: rgba(14, 100, 210, 1);
          width: 42px;
          height: 42px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 1);
          border: 0.5px solid #ddd;
        }

        .social-btn.telegram {
          width: 42px;
          height: 42px;
          border-radius: 6px;
          color: rgba(65, 148, 255, 1);
          background: rgba(255, 255, 255, 1);
          border: 0.5px solid #ddd;
        }

        .social-btn.share {
          color: rgba(0, 0, 0, 1);
          width: 42px;
          height: 42px;
          border-radius: 6px;
          background-color: rgba(255, 255, 255, 1);
          border: 0.5px solid #ddd;
        }

        .invite-now-section {
          padding: 0 1.5rem 1.5rem;
        }

        .btn-invite-now {
          width: 100%;
          height: 46px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          background: linear-gradient(270deg, #59238f 0%, #d1009d 100%);
          color: white;
          border: none;
          cursor: pointer;
          margin-bottom: 1.5rem;
          transition:
            background-color 0.2s ease,
            box-shadow 0.2s ease;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
        }

        .btn-invite-now:hover {
          opacity: 0.9;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .referral-code-label {
          font-size: 0.9rem;
          color: #343a40;
        }

        .hiw-title {
          font-weight: 600;
          font-size: 20px;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .how-it-works-section {
          background-color: rgba(255, 255, 255, 1);
          border: 1px solid #fffffe;
          border-radius: 6px;
          margin: 1.5rem;
          padding: 1.5rem;
        }

        .hiw-head {
          color: rgba(146, 18, 149, 1);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .how-it-works-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .how-it-works-item:last-child {
          margin-bottom: 0;
        }

        .how-it-works-item .icon-wrapper {
          background-color: #ffc107;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          color: #343a40;
          flex-shrink: 0;
        }

        .how-it-works-item .text-content {
          flex-grow: 1;
          text-align: left;
        }

        .how-it-works-item .text-content p {
          font-size: 0.95rem;
          color: #495057;
          margin: 0;
        }

        .how-it-works-item .text-content .reward-badge {
          background: rgba(255, 239, 253, 1);
          color: rgba(178, 10, 153, 1);
          padding: 0.2rem 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 2px;
          display: inline-block;
          margin-top: 0.5rem;
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
          .refer-earn-page {
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

          .user-profile-section {
            padding: 1rem;
          }

          .social-share-buttons {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .social-btn.whatsapp {
            width: 100%;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ReferEarn;
