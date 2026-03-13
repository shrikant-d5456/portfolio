import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";

import aboutRoutes from "./routes/aboutRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import workRoutes from "./routes/workRoutes.js";
import complimentRoutes from "./routes/complimentRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "Portfolio API is running" });
});

app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/work", workRoutes);
app.use("/api/compliments", complimentRoutes);
app.use("/api/education", educationRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    message: err.message || "Server error",
  });
});

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

startServer();
