import express, { Request, Response } from "express";
import connectToDB from "./database/db";
import dotenv from "dotenv";
import routers from "./routes/uploadRoutes";
import { config } from "./config/config";
dotenv.config();

const app = express();
const PORT = config.server.port;

// Middlewares
app.use(express.json());
app.use("/api/v1/", routers);

// Connect to DB
try {
  connectToDB();
} catch (err: any) {
  console.error("Error connecting to the database:", err.message);
  process.exit(1);
}

// Send a response indicating a database connection error
app.get("*", (req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: "Error connecting to the database",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
