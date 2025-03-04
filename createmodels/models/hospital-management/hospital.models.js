import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema(
    {
        patientName:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        contactNo:{
            type: Number,
        },
        toDoctor:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },
        caseType: {
            type: String,
            enum: ["ACC", "DIS", "OTHER"],
            default: "OTHER"
        }
    },
    {timestamps: true});

export const Hospital = mongoose.model("Hospital", hospitalSchema);