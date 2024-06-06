import React from 'react';
import './dashBoard.css';

function Dashboard() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Products</li>
          <li>Support</li>
          <li>Log Out</li>
        </ul>
      </div>
      <div className="main">
        <h1>Welcome, Tiyasha!</h1>
        <h2>Personalized Offers</h2>
        <p>Handpicked for your Credit Needs</p>
        <div className="offer-card">
          <h3>Personal Loan</h3>
          <img src="https://www.kreditbee.com/assets/images/logo-dark.svg" alt="Kredit Bee Logo" />
          <ul>
            <li>Get Instant Loan of upto 1 Lakh</li>
            <li>in less than 5 minutes</li>
            <li>No Documentation</li>
            <li>Instant Money Transfer</li>
            <li>No Hidden Charges</li>
          </ul>
          <button>Apply Now</button>
        </div>
        <div className="offer-card">
          <h3>Credit+</h3>
          <img src="https://www.creditplus.in/images/logo.svg" alt="Credit+ Logo" />
          <ul>
            <li>In Depth Credit Report Analysis</li>
            <li>Tips to build healthy Credit Score</li>
            <li>Step Up Credit Card to boost score</li>
          </ul>
          <button>Apply Now</button>
        </div>
        <div className="offer-card">
          <h3>Step Up Credit Card</h3>
          <img src="https://www.paisabazaar.com/images/paisabazaar-step-up-credit-card.jpg" alt="Paisabazaar Step Up Credit Card" />
          <ul>
            <li>An FD Backed Credit Card.</li>
            <li>Helps building CIBIL score.</li>
            <li>Card Limit is 90% of FD Amount</li>
          </ul>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;