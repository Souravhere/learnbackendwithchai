import mongoose from "mongoose";

const medicalRecordSchema = mongoose.Schema({
    patientName:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required: true
    },
    medicanName:{
        type: String,
        required:true,
    },
    doctorBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    bill:{
        type: Number,
        required: true,
        default: 0
    }
},
    {timestamps:true});

export const MedicalRecord = mongoose.Schema("MedicalRecord", medicalRecordSchema);