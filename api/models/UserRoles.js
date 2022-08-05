import mongoose from "mongoose";

const UserRolesSchema = new mongoose.Schema({
    role : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String
    }
});

export default mongoose.model("UserRoles", UserRolesSchema);