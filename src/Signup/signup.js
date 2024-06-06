// SignupPage.js
import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="signup-page">
        <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <a href='/signup/details'><button>Submit</button></a>
      </form>
    </div>
  );
};

export default SignupPage;
