const express = require("express")
const app = express()
import userRoutes from "./routes/userRoutes"
import connectDB from "./config/db";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()

app.use("/user", userRoutes)

app.listen(3000)
