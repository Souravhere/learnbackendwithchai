import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    problemName:{
        type: String,
        required:true
    },
    problemDescription:{
        type: String,
        required:true
    },
    treatmentBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    bill:{
        type: Number,
        required: true,
        default: 0
    }
},
{timestamps: true})