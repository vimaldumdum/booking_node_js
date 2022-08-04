import express, { response } from "express";
import OrgRepo from "../repositories/orgRepo.js"

const route = express.Router();

route.get("/", async (req, res) => {
    var response = await OrgRepo.getAllOrgs();
    res.status(response.status).json(response.body);
});

route.get("/:id", async (req, res) => {
    var response = await OrgRepo.getOrgById(req.params.id);
    res.status(response.status).json(response.body);
});

route.delete("/remove:id", async (req, res) => {
    var response = await OrgRepo.deleteOrgById(req.params.id);
    res.status(response.status).json(response.body);
});

route.post("/create", async (req, res) => {
    console.log("req rec: " + JSON.stringify(req.body));
    var response = await OrgRepo.createOrg(req.body);
    res.status(response.status).json(response.body);
});

route.put("/update:id", async (req, res) => {
    console.log("req rec: " + JSON.stringify(req.body));
    var response = await OrgRepo.updateOrg(req.params.id, req.body);
    res.status(response.status).json(response.body);
});

export default route;