import express, { response } from "express";
import OrgRepo from "../repositories/orgRepo.js"

const route = express.Router();

route.post("/create", async (req, res) => {
    console.log("req rec: " + JSON.stringify(req.body));
    var response = await OrgRepo.createHotel(req.body);
    res.status(response.status).json(response.body);
});

route.put("/update:id", async (req, res) => {
    console.log("req rec: " + JSON.stringify(req.body));
    var response = await OrgRepo.updateHotel(req.params.id, req.body);
    res.status(response.status).json(response.body);
});

export default route;