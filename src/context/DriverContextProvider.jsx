/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const DriverContext = createContext(null);

const DriverContextProvider = ({ children }) => {
  const [driver, setDriver] = useState([]);
  return (
    <DriverContext.Provider value={{ driver, setDriver }}>
      {children}
    </DriverContext.Provider>
  );
};

export const useDriver = () => {
  return useContext(DriverContext);
};
export default DriverContextProvider;
