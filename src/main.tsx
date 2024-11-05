import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <p className="text-red-400">test</p>
    </StrictMode>
);
