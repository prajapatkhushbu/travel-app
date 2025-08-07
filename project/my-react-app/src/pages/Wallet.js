import React from "react";
import { useNavigate } from "react-router-dom";

const transactionsData = [
  {
    name: "Nick Oberoy",
    status: "Sent",
    amount: "- ₹2,400",
    type: "sent",
    date: "10 June, 2025",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Sophia Bennett",
    status: "Sent",
    amount: "- ₹1,270",
    type: "sent",
    date: "5 June, 2025",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Chris Do",
    status: "Sent",
    amount: "- ₹10,000",
    type: "sent",
    date: "24 May, 2025",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const Wallet = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'white',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 0,
      margin: 0,
      position: 'relative',
    }}>
      {/* Blue background with large bottom radius, behind header and main card */}
      <div style={{
        width: '100%',
        maxWidth: 440,
        background: '#e6f0ff',
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48,
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        height: 370,
        zIndex: 0,
        minHeight: 320,
      }}></div>
      {/* Main white card container */}
      <div style={{
        width: '100%',
        maxWidth: 400,
        background: '#fff',
        borderRadius: 40,
        boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.07)',
        margin: '32px 0',
        paddingBottom: 32,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1.2rem 1.2rem 0.5rem 1.2rem',
          background: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', fontSize: 22, color: '#222', marginRight: 10, cursor: 'pointer' }}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <span style={{ fontWeight: 700, fontSize: 22, color: '#222' }}>GVW Wallet</span>
        </div>
        {/* Wallet Card */}
        <div style={{
          background: '#111',
          borderRadius: 18,
          margin: '1.2rem 1.2rem 0.8rem 1.2rem',
          padding: '1.2rem 1.2rem 1.2rem 1.2rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        }}>
          {/* Car background image */}
          <img src={process.env.PUBLIC_URL + '/images/carimage.jpeg'} alt="car bg" style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.18,
            zIndex: 0,
          }} />
          {/* Card Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 2 }}>Neelesh Solanki</div>
                <div style={{ fontSize: 13, color: '#e0e0e0', fontWeight: 500 }}>+91 80XXXXXX01</div>
              </div>
              <span style={{ fontWeight: 700, fontSize: 13, color: '#fff', opacity: 0.8, letterSpacing: 2 }}>GVW CARD</span>
            </div>
            <div style={{ fontSize: 18, color: '#fff', letterSpacing: 3, fontWeight: 600, marginBottom: 18 }}>4283 XXXX XXXX 6529</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 32, color: '#fff', lineHeight: 1.1 }}>₹2,190</div>
                <div style={{ fontSize: 13, color: '#e0e0e0', fontWeight: 500 }}>GVW Wallet Balance</div>
              </div>
              <button style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid #fff', borderRadius: '50%', width: 30, height: 30, color: '#fff', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 10, cursor: 'pointer' }}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Action Buttons on blue background with rounded bottom */}
        <div style={{
          background: '#e6f0ff',
          borderRadius: 32,
          margin: '0 0.5rem',
          marginTop: 18,
          padding: '1.2rem 1.2rem 1.5rem 1.2rem',
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
        }}>
          <button style={{
            flex: 1,
            background: '#fff',
            color: '#222',
            border: 'none',
            borderRadius: 24,
            fontWeight: 700,
            fontSize: 16,
            padding: '0.7rem 0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            cursor: 'pointer',
          }}>Request</button>
          <button style={{
            flex: 1,
            background: 'linear-gradient(90deg, #1877f2 60%, #60aaff 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 24,
            fontWeight: 700,
            fontSize: 16,
            padding: '0.7rem 0',
            boxShadow: '0 2px 8px rgba(24,119,242,0.08)',
            cursor: 'pointer',
          }}>Transfer</button>
        </div>
        {/* History Section (inside the same card) */}
        <div style={{
          width: '100%',
          background: 'transparent',
          borderRadius: 24,
          margin: '18px 0 0 0',
          boxShadow: 'none',
          padding: '1.2rem 0.8rem 0.5rem 0.8rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 17, color: '#222' }}>History</span>
            <button style={{ background: 'none', border: 'none', color: '#888', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              View Details <i className="fas fa-chevron-right" style={{ fontSize: 13, marginLeft: 2 }}></i>
            </button>
          </div>
          {transactionsData.map((transaction, idx) => (
            <div key={idx} style={{
              display: 'flex', alignItems: 'center', background: '#f7f7f7', borderRadius: 16, padding: '0.8rem 0.7rem', marginBottom: 12,
            }}>
              <img src={transaction.img} alt={transaction.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', marginRight: 14, border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#222' }}>{transaction.name}</div>
                <div style={{ fontSize: 13, color: '#888', fontWeight: 500 }}>{transaction.status}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#dc3545' }}>{transaction.amount}</div>
                <div style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>{transaction.date}</div>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: 8 }}>
            <button style={{ background: 'none', border: 'none', color: '#dc3545', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>View all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
