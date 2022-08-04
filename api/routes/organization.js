import express, { response } from "express";
import OrgRepo from "../repositories/orgRepo.js"

const route = express.Router();

route.post("/create", async (req, res) => {
    console.log("req rec: " + JSON.stringify(req.body));
    var response = await OrgRepo.createHotel(req.body);
    if(response['status'] == 200) {
        res.send(JSON.stringify(response['body']));
        console.log("res rec: " + JSON.stringify(response.body));
    } else {
        res.send("error");
    }
});

route.put("/update:id", async (req, res) => {
    console.log("req rec: " + JSON.stringify(req.body));
    var response = await OrgRepo.updateHotel(req.params.id, req.body);
    if(response['status'] == 200) {
        res.send(JSON.stringify(response['body']));
        console.log("res rec: " + JSON.stringify(response.body));
    } else {
        res.send("error");
    }
});

export default route;