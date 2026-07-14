import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RCMDashboard from "../app/rcm-dashboard";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RCMDashboard />
  </StrictMode>,
);
