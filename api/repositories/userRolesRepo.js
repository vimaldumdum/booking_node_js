import RolesModel from "../models/UserRoles.js";

export const getUserRoleById = async (id, next) => {
    try {
        const role = await RolesModel.findById(id);
        return role;
    } catch (err) {
        next(err);
    }
}

export const createUserRole = async (body, next) => {
    try {
        const role = new RolesModel(body);
        const savedRole = await role.save();
        return savedRole;
    } catch (err) {
        next(err);
    }
}

export const updateUseRoleById = async (id, body, next) => {
    try {
        const updatedUserRole = await RolesModel.findByIdAndUpdate(
            id,
            {$set: body},
            {new: true}
        );
        return updatedUserRole;
    } catch(error) {
        return next(error);
    }
}

export const getAllUserRoles = async (next) => { 
    try {
        const allUserRoles = await RolesModel.find();
        return allUserRoles;
    } catch (error) {
        next(error);
    }
}

export const findUserRoleBy = async (where, next) => {
    try {
        const userRole = await RolesModel.findOne(where);
        return userRole;
    } catch (err) {
        next(err);
    }
}

export const deleteUserRoleById = async (id, next) => {
    try {
        const deletedUserRole = await RolesModel.findByIdAndDelete(id);
        return deletedUserRole;
    } catch (error) {
        next(error);
    }
}