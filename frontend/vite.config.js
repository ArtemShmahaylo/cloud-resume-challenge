import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),

    {
      name: "mock-counter",
      configureServer(server) {
        let count = 0; // in-memory mock database

        server.middlewares.use("/counter", async (req, res) => {
          res.setHeader("Content-Type", "application/json");

          if (req.method === "GET") {
            res.end(JSON.stringify({ count }));
            return;
          }

          if (req.method === "POST") {
            count++;
            res.end(JSON.stringify({ count }));
            return;
          }
        });
      }
    }
  ]
});
