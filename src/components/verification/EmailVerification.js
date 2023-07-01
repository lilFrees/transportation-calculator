import React, { useState } from "react";
import VerificationContext from "./VerificationContext";

const EmailVerification = function (props) {
  const [isVerified, setIsVerified] = useState(false);

  const verificationHandler = function () {
    setIsVerified(true);
  };

  const goBackHandler = function () {
    setIsVerified(false);
  };

  const emailVer = {
    isVerified: isVerified,
    onVerification: verificationHandler,
    onGoBack: goBackHandler,
  };

  return (
    <VerificationContext.Provider value={emailVer}>
      {props.children}
    </VerificationContext.Provider>
  );
};

export default EmailVerification;
