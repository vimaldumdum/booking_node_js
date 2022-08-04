import OrgModel from "../models/Organization.js";

export const createOrg = async (body, next) => {
    const newOrg = new OrgModel(body);
   try {
        const savedOrg = await newOrg.save();
        return savedOrg;
    } catch(error) {
        next(error);
    }
}

export const updateOrgById = async (id, body, next) => {
    try {
        const updatedOrg = await OrgModel.findByIdAndUpdate(
            id,
            {$set: body},
            {new: true}
        );
        return updatedOrg;
    } catch(error) {
        return next(error);
    }
}

export const getAllOrgs = async (next) => { 
    try {
        const allOrgs = await OrgModel.find();
        return allOrgs;
    } catch (error) {
        next(error);
    }
}

export const getOrgById =  async (id, next) => {
    try {
        const org = await OrgModel.findById(id);
        return org;
    } catch (error) {
        next(error);
    }
}

export const deleteOrgById = async (id, next) => {
    try {
        const org = await OrgModel.findByIdAndDelete(id);
        return org;
    } catch (error) {
        next(error);
    }
}