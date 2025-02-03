import React from "react";

interface AuthLayOutProps {
  children: React.ReactNode;
}

const AuthLayOut: React.FC<AuthLayOutProps> = ({ children }) => {
  return <div className="flex justify-center pt-40">{children}</div>;
};

export default AuthLayOut;
