import mongoose from "mongoose";

const categroySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        }
    },
    {timestamps:true}
);

export const Categroy = mongoose.model('Categroy', categroySchema);
