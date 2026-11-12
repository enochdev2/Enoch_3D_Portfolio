import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import enochToonLogo from "./assets/hero/Enoch Toon.jpg";
import "./index.css";
import App from "./App.tsx";

// Use the existing Enoch Toon artwork as the browser-tab icon too.
// This updates an existing Vite favicon without requiring changes to index.html.
const favicon =
  document.querySelector<HTMLLinkElement>('link[rel~="icon"]') ??
  document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/jpeg";
favicon.href = enochToonLogo;
if (!favicon.isConnected) document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
