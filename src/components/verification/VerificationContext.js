import React, { useState } from "react";

export const VerificationContext = React.createContext({
  isVerified: false,
  onVerification: () => {},
  onGoBack: () => {},
});

const EmailVerificationProvider = function (props) {
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

export default EmailVerificationProvider;
