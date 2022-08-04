import {createOrg, updateOrgById, deleteOrgById, getAllOrgs, getOrgById} from "../repositories/orgRepo.js"

export const getOrgs = async (req, res, next) => {
    const allOrgs = await getAllOrgs(next);
    if(allOrgs) res.status(200).json(allOrgs);
}

export const getOneOrg = async (req, res, next) => {
    const org = await getOrgById(req.params.id, next);
    if(org) res.status(200).json(org);
}

export const deleteOrg = async (req, res, next) => {
    const deletedOrg = await deleteOrgById(req.params.id, next);
    if(deletedOrg) res.status(200).json(deletedOrg);
}

export const updateOrg = async (req, res, next) => {
    const updatedOrg = await updateOrgById(req.params.id, req.body, next);
    if(updatedOrg) res.status(200).json(updatedOrg);
}

export const create = async (req, res, next) => {
    const createdOrg = await createOrg(req.body, next);
    if(createdOrg) res.status(200).json(createdOrg);
}