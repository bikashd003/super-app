import React from "react";
import "./Signup.css";
const TermAndCondition = () => {
  return (
    <>
      <h5 className="terms">
        By clicking on Sign up. you agree to Superapp{" "}
        <span>Terms and Conditions of Use</span>
      </h5>
      <h5 className="privacy">
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp <span>Privacy Policy</span>
      </h5>
    </>
  );
};

export default TermAndCondition;
