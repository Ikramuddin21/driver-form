import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DriverContextProvider from "./context/DriverContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DriverContextProvider>
      <App />
    </DriverContextProvider>
  </StrictMode>
);
