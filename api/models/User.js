import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true
    },
    org_id : {
        type : String,
        required : true
    },
    role_id : {
        type : String,
        required : true
    }
});

export default mongoose.model("Users", UserSchema);