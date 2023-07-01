import React, { createContext, useContext } from "react";

const VerificationContext = createContext({
  isVerified: false,
  onVerification: () => {},
});

export default VerificationContext;
