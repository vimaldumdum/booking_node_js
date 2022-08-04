import mongoose from 'mongoose';
const { Schema } = mongoose;

const organization = new Schema ({
    name : {
        type : String,
        required : true
    },
    industry : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    province : {
        type : String,
        required : true
    },
    strength : {
        type : Number,
        required : true
    },
    teams : {
        type : Number,
        required : true
    }
})

export default mongoose.model("Organization", organization);