import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/dbConnection.js";
import { AppError } from "./src/utilities/AppError.js";
import { errorHandling } from "./src/middleware/errorHandling.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin:
      process.env.FRONTEND_URL ||
      "http://127.0.0.1:5500"
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Nightmare Cinema API is running",
    cinema: "Royal Mall"
  });
});

app.use((req, res, next) => {
  next(new AppError("url not found", 404));
});

app.use(errorHandling);

const port = process.env.PORT || 3000;

await dbConnection();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
