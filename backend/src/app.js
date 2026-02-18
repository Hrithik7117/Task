import { configDotenv } from "dotenv";
configDotenv();
import express from 'express'
import cors from "cors";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import taskRoutes from "./routes/task.route.js"
import connectDB from "./config/db.js";
import { errorHandler } from "./middlewares/error.middleware.js";
connectDB()



const app=express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded());

app.use(cookieParser());


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.use(errorHandler);


export {app}