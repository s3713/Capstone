import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Login/NavBar';
import EMI from './LoanComparison/emi';
import PersonalLoanForm from './Login/body';
import ForgotPassword from './ForgotPassword/forgot';
import SignupPage from './Signup/signup';
import Details from './Signup/details';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element={<PersonalLoanForm />} />
          <Route path="/emi" element={<EMI />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          {/* <Route path="/signup" element={<SignupPage />} /> */}
          <Route path="/details" element={<Details />} />
        </Routes>
        
    </Router>
  );
}

export default App;
