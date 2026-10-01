const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/api/students", studentRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");

        app.listen(process.env.PORT || 3000, () => {
            console.log(
                `Server running on port ${process.env.PORT || 3000}`
            );
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });