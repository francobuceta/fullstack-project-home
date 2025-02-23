import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import favoriteRoute from "./routes/favorite.route";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

//Initial config.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(limiter);

//Routes.
app.use("/favorites", favoriteRoute.getRouter());

//Exclude express header on response.
app.disable("x-powered-by");

// Init server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
