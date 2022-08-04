import express from "express";
import {create, updateOrg, deleteOrg, getOneOrg, getOrgs} from "../controllers/organization.js";

const route = express.Router();

route.get("/", getOrgs);

route.get("/:id", getOneOrg);

route.delete("/:id", deleteOrg);

route.post("/create", create);

route.put("/:id", updateOrg);

export default route;