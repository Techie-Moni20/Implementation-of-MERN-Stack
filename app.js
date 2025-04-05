import express from "express";
const app = express();
module.exports = app;
import cors from "cors";
import cookieParser from "cookie-parser";
import Razorpay from "razorpay";
const app = require('./app');
module.exports = app;
const db = require ('./src/database/db.js')




app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

export const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

// Student routes
import studentRouter from "./src/routes/student.routes.js";
app.use("/api/student", studentRouter);

// Teacher routes
import teacherRouter from "./src/routes/teacher.routes.js";
app.use("/api/teacher", teacherRouter);

// Course routes
import courseRouter from "./src/routes/course.routes.js";
app.use("/api/course", courseRouter);

// Admin routes
import adminRouter from "./src/routes/admin.routes.js";
app.use("/api/admin", adminRouter);

// Payment routes
import paymentRouter from "./src/routes/payment.routes.js";
app.use("/api/payment", paymentRouter);

export default app;