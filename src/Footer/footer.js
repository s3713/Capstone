import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="overview-container">
      <h2>OVERVIEW</h2>
      <h3>Personal Loan Features & Benefits</h3>
      <ul>
        <li>No end-usage restriction</li>
        <li>Loan amount of up to Rs. 40 lakh, which can exceed depending on lenders discretion</li>
        <li>Repayment tenure of up to 5 years, with some banks/NBFCs offering longer tenures</li>
        <li>Minimal documentation</li>
        <li>Quick disbursals</li>
        <li>Applicants having excellent credit profiles may also qualify for pre approved/pre qualified personal loans with instant disbursal</li>
      </ul>

      <h3>Personal Loan Eligibility</h3>
      <ul>
        <li>Age: 18 - 60 years</li>
        <li>Income: Minimum Rs 15,000/month for salaried applicants</li>
        <li>Credit Score: Preferably 750 and above as having higher credit scores increase the chances of your loan approval at lower interest rates</li>
      </ul>

      <p className="address">Address: Paisabazaar Marketing & Consulting Pvt. Ltd. 135 P, Sector 44, Gurugram (HR) 122001</p>

      <p className="disclaimer">Disclaimer: Paisabazaar is a loan aggregator and is authorized to provide services on behalf of its partners.</p>
    </div>
  );
}

export default Footer;