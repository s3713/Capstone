// import React from 'react';
// import './login.css';

// const PersonalLoanForm = () => {
//     return (
//       <div className="container">
//         <div className="header">
//           <h1>Looking for a Personal Loan?</h1>
//           <p>Let us help you find the most suitable offers.</p>
//         </div>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" placeholder="Enter your username" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Enter your password" />
//         </div>
//         <button className="proceed-button">Proceed</button>
//         <div className="disclaimer">
//           <p>
//             By clicking on proceed, you have read and agree to the
//             Paisabazaar's creditReport TermsOfUseLink,
//             pbTermsOfUseLink & privacyPolicyLink.
//           </p>
//         </div>
//       </div>
//     );
//   };

//   export default PersonalLoanForm;

// import React from 'react';
// import './login.css';
// import myImage from './loan.jpg'; // Adjust the path to your image file


// const PersonalLoanForm = () => {
//   return (
//     <div className="page-container">
//       <div className="image-container">
//         <img src={myImage} alt="Your Image" />
//       </div>
//       <div className="login-container">
//         <div className="login-box">
//         <div className="header">
//           <h1>Looking for a Personal Loan?</h1>
//           <p>Let us help you find the most suitable offers.</p>
//         </div>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" placeholder="Enter your username" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Enter your password" />
//         </div>
//         <button className="proceed-button">Proceed</button>
//         <div className="disclaimer">
//           <p>
//             By clicking on proceed, you have read and agree to the
//             Paisabazaar's creditReport TermsOfUseLink,
//             pbTermsOfUseLink & privacyPolicyLink.
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default PersonalLoanForm;

import React from 'react';
import './login.css';
import myImage from './loan.jpg'; // Adjust the path to your image file
import Footer from '../Footer/footer';

const PersonalLoanForm = () => {

  return (
    <>
    <div className="page-container">
      <div className="image-container">
        <img src={myImage} alt="Your Image" />
      </div>
      <div className="login-container">
        <div className="login-box">
          <div className="header">
            <h1>Looking for a Personal Loan?</h1>
            <p>Let us help you find the most suitable offers.</p>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div>
          <a href="/forgot">Forgot Password</a>
          </div><br/>
          <button className="proceed-button">Proceed</button>
          <a href="/details"><button className="proceed-button">SignupPage</button></a>
          <div className="disclaimer">
            <p>
              By clicking on proceed, you have read and agree to the
              Paisabazaar's creditReport TermsOfUseLink,
              pbTermsOfUseLink & privacyPolicyLink.
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonalLoanForm;

