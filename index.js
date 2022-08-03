import express from "express";
import config from "config";

const app = express()
app.listen(config.get("Server.port"), ()=>{
    console.log("Server is up on port " + config.get("Server.port"));
})
