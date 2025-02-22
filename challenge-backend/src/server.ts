import express from "express";
import cors from "cors";
//import UserRouter from "./routes/user.router.js";

const app = express();

//Initial config.
app.use(
  express.json()
);
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

//Route.
//app.use("/api/users", UserRouter.getRouter());

//Exclude express header on response.
app.disable('x-powered-by');

// Init server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});