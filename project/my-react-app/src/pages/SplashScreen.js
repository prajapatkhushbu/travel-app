import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/role-selection");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src="/images/logo new.png" alt="Logo" className="logo" />
      <img
        src="https://www.gvwtravels.com/assets/img/logo.png"
        alt="GVW Logo"
        className="company-logo"
      />

      <style jsx>{`
        .splash-screen {
          background: radial-gradient(circle at center, #3b9aff, #0e64d2 100%);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          text-align: center;
        }

        .logo {
          width: 220px;
          max-width: 80vw;
        }

        .company-logo {
          position: absolute;
          bottom: 20px;
          width: 192px;
          max-width: 70vw;
          height: auto;
        }

        @media (max-width: 400px) {
          .logo {
            width: 160px;
          }

          .company-logo {
            width: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
