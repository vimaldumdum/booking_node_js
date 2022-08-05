import UserModel from "../models/User.js";

export const createUser = async (body, next) => {
    const newUser = new UserModel(body);
    try {
        const savedUser = await newUser.save();
        return savedUser;
    } catch(err) {
        next(err);
    }
}

export const updateUserById = async (id, body, next) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            {$set: body},
            {new: true}
        );
        return updatedUser;
    } catch(error) {
        return next(error);
    }
}

export const getAllUsers = async (next) => { 
    try {
        const allUsers = await UserModel.find();
        return allUsers;
    } catch (error) {
        next(error);
    }
}

export const getUserById =  async (id, next) => {
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (error) {
        next(error);
    }
}

export const findUserBy = async (where, next) => {
    try {
        const user = await UserModel.findOne(where);
        return user;
    } catch (err) {
        next(err);
    }
}

export const deleteUserById = async (id, next) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        return deletedUser;
    } catch (error) {
        next(error);
    }
}