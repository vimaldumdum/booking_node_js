import express from "express";
import config from "config";
import mongoose from "mongoose";
import orgRoute from "./routes/organization.js";

//connect to DB
var connect = async () => {
    try {
        await mongoose.connect(config.get("DB.mongo"));
    } catch {
        console.log("Initial DB connection failed");
        throw console.error();
    }
}

//Connection listeners
mongoose.connection.on("disconnected", () => {
    console.log("DB disconnected");
})

mongoose.connection.on("connected", () => {
    console.log("DB connected");
})

//initialize express
const app = express();

// Middlewares
app.use(express.json());
app.use("/org", orgRoute);

//Error handling middleware
app.use((err, req, res, next) => {
    console.log("Error handling middleware");
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    res.status(errorStatus).json({
        "success" : false,
        "status" : errorStatus,
        "message" : errorMessage,
        "trace" : err.stack
    });
});

//listen to port
app.listen(config.get("Server.port"), ()=>{
    connect();
    console.log("Server is up on port: " + config.get("Server.port"));
})
