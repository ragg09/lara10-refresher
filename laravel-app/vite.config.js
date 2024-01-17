import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            refresh: true,
        }),
    ],
    server: {
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"),
            "@Components": resolve(__dirname, "resources/js/Components"),
            "@Pages": resolve(__dirname, "resources/js/Pages"),
        },
    },
});
