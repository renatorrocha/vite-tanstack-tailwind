import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/global.css";
import App from '@components/providers/app';

const container = document.getElementById("root");

if (container) {
    const root = createRoot(container);

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)

}
