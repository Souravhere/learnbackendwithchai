import mongoose, { mongo } from "mongoose";

const doctorSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    specialest: {
        type: String,
        required: ture
    },
    salary:{
        type: Number,
        default:0,
    },
    roomNo:{
        type: String,
        required: true
    },
    activeDay:{
        type: Boolean,
        default: true
    }
},
    {timestamps:ture});

export const Doctor = mongoose.model("Doctor", doctorSchema);