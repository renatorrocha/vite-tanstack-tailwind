import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    const BASE_URL = env.VITE_BASE_URL || "/";
    const APP_PORT = Number(env.VITE_APP_PORT) || 5173;

    return {
        base: BASE_URL,
        server: {
            port: APP_PORT,
        },
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
    };
});
