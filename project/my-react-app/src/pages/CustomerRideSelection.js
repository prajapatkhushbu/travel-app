import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const carData = [
  {
    title: 'ECONOMY CLASS',
    price: '₹13/km',
    description: 'Perfect choice for short trips and smart savings.',
    capacity: 'Passenger Capacity - 5',
    img: process.env.PUBLIC_URL + '/images/hundaicar.jpg',
    alt: 'Economy Car',
  },
  {
    title: 'STANDARD CLASS',
    price: '₹18/km',
    description: 'The comfort you deserve at the price you love!',
    capacity: 'Passenger Capacity - 5',
    img: process.env.PUBLIC_URL + '/images/car.jpg',
    alt: 'Standard Car',
  },
  {
    title: 'BUSINESS CLASS',
    price: '₹25/km',
    description: 'Premium service with extra comfort and style.',
    capacity: 'Passenger Capacity - 4',
    img: process.env.PUBLIC_URL + '/images/standercar.jpg',
    alt: 'Business Car',
  },
  {
    title: 'SUV',
    price: '₹28/km',
    description: 'Spacious rides perfect for family or groups.',
    capacity: 'Passenger Capacity - 7',
    img: process.env.PUBLIC_URL + '/images/suv.jpg',
    alt: 'SUV',
  },
  {
    title: 'TRAVELLER BUS',
    price: '₹35/km',
    description: 'Ideal for larger groups and longer trips',
    capacity: 'Passenger Capacity - 15',
    img: process.env.PUBLIC_URL + '/images/travelerbus.jpg',
    alt: 'Traveller Bus',
  },
  {
    title: 'MINI BUS',
    price: '₹42/km',
    description: 'Comfortable group travel with extra seating space.',
    capacity: 'Passenger Capacity - 32',
    img: process.env.PUBLIC_URL + '/images/minibus.jpg',
    alt: 'Mini Bus',
  },
  {
    title: 'COACH BUS',
    price: '₹55/km',
    description: 'Perfect vehicle for weddings, tours and evets.',
    capacity: 'Passenger Capacity - 48',
    img: process.env.PUBLIC_URL + '/images/coachbus.jpg',
    alt: 'Coach Bus',
  },
];

const CustomerRideSelection = () => {
  const [activeTab, setActiveTab] = useState('driver');
  const [pickupLocation, setPickupLocation] = useState('My current location');
  const [dropoffLocation, setDropoffLocation] = useState('105 William St, Chicago, US');
  const navigate = useNavigate();

  return (
    <div style={{ background: '#222', minHeight: '100vh', padding: '0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 400, width: '100%', background: '#fff', minHeight: '100vh', boxShadow: '0 0 20px rgba(0,0,0,0.15)' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 1.2rem 0.5rem 1.2rem' }}>
          <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: 1 }}>GVW <span style={{ fontWeight: 400, fontSize: 14 }}>Rent a Car</span></div>
          <i
  className="fas fa-user"
  style={{ fontSize: 20, color: '#222', cursor: 'pointer' }}
  onClick={() => navigate('/profile')}
/>
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '1.2rem 0' }}>
          <button
            className={`btn ${activeTab === 'driver' ? 'btn-primary' : 'btn-outline-primary'}`}
            style={{
              borderRadius: 20,
              minWidth: 120,
              fontWeight: 600,
              background: activeTab === 'driver' ? '#1877f2' : '#fff',
              color: activeTab === 'driver' ? '#fff' : '#1877f2',
              border: '2px solid #1877f2',
              boxShadow: activeTab === 'driver' ? '0 2px 8px rgba(24,119,242,0.08)' : 'none',
            }}
            onClick={() => setActiveTab('driver')}
          >
            Driver
          </button>
          <button className={`btn ${activeTab === 'self' ? 'btn-primary' : 'btn-outline-primary'}`} style={{ borderRadius: 20, minWidth: 120 }} onClick={() => navigate('/self-drive')}>Self Drive</button>
        </div>
        {/* Location */}
        <div style={{ background: '#f8f9fa', borderRadius: 16, margin: '0 1.2rem', padding: '1rem', marginBottom: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <i className="fas fa-dot-circle" style={{ color: '#28a745', marginRight: 10 }}></i>
            <div>
              <div style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>PICKUP</div>
              <div style={{ fontWeight: 600, color: '#222', fontSize: 15 }}>{pickupLocation}</div>
            </div>
          </div>
          <div style={{ borderBottom: '1px solid #eee', margin: '8px 0' }}></div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-map-marker-alt" style={{ color: '#dc3545', marginRight: 10 }}></i>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>DROP-OFF</div>
              <div style={{ fontWeight: 600, color: '#222', fontSize: 15 }}>{dropoffLocation}</div>
            </div>
            <button
              className="btn"
              style={{
                background: '#e9f0fb',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                color: '#1877f2',
              }}
            >
              <i className="fas fa-map"></i>
            </button>
          </div>
        </div>
        {/* Title */}
        <div style={{ fontWeight: 700, fontSize: 20, color: '#222', margin: '1.2rem 0 1rem 1.2rem' }}>Choose Your Ride Style</div>
        {/* Car Grid */}
        <div className="container-fluid" style={{ padding: 0 }}>
          <div className="row g-3" style={{ margin: 0 }}>
            {carData.map((car, idx) => (
              <div className="col-6" key={car.title} style={{ padding: '0 0.5rem' }}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 18,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    padding: 16,
                    marginBottom: 12,
                    border: '1.5px solid #f0f0f0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: 260,
                    height: '100%',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  <img
                    src={car.img}
                    alt={car.alt}
                    style={{
                      width: 120,
                      height: 100,
                      objectFit: 'contain',
                      marginBottom: 12,
                      borderRadius: 8,
                      background: '#f8f8f8',
                    }}
                  />
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#222', marginBottom: 2 }}>
                    {car.title}
                  </div>
                  <div style={{ color: '#0d6efd', fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
                    {car.price}
                  </div>
                  <div style={{ fontSize: 12, color: '#666', marginBottom: 2, textAlign: 'center' }}>
                    {car.description}
                  </div>
                  <div style={{ fontSize: 12, color: '#222', fontWeight: 600, margin: '6px 0 12px 0' }}>
                    {car.capacity}
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    style={{
                      borderRadius: 8,
                      fontWeight: 600,
                      background: '#1877f2',
                      border: 'none',
                      transition: 'background 0.2s',
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRideSelection; 