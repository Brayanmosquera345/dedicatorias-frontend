import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/css/main.css";
import App from "./App.jsx";
import { queryClient } from "./config/queryClient.js";
import { QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
