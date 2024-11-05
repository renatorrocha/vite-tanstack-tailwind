import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), TanStackRouterVite()],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@constants": path.resolve(__dirname, "./src/constants"),
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
