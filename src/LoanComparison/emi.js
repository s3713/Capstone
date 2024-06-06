import React, { useState } from 'react';
import Footer from '../Footer/footer';

const EMI = () => {
  const [principal, setPrincipal] = useState('');
  const [interest, setInterest] = useState('');
  const [months, setMonths] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interest) / 12 / 100;
    const n = parseFloat(months);

    const emiResult = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiResult.toFixed(2));
  };

  return (
    <>
    <div>
      <h1>EMI Calculator</h1>
      <div>
        <label htmlFor="principal">Principal Amount:</label>
        <input
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="interest">Annual Interest Rate (%):</label>
        <input
          type="number"
          id="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="months">Loan Tenure (Months):</label>
        <input
          type="number"
          id="months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </div>
      <button onClick={calculateEMI}>Calculate EMI</button>
      {emi && <p>Your EMI is: {emi}</p>}
    </div>
    </>
  );
};

export default EMI;
