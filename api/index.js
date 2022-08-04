import express from "express";
import config from "config";
import mongoose from "mongoose";
import orgRoute from "./routes/organization.js";

var connect = async () => {
    try {
        await mongoose.connect(config.get("DB.mongo"));
    } catch {
        console.log("Initial DB connection failed");
        throw console.error();
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("DB disconnected");
})

mongoose.connection.on("connected", () => {
    console.log("DB connected");
})

const app = express();
app.listen(config.get("Server.port"), ()=>{
    connect();
    console.log("Server is up on port: " + config.get("Server.port"));
})

app.use(express.json());
app.use("/org", orgRoute);
app.get("/", (req, res) => {
    res.send("Hello");
})
