import mongoose from "mongoose";

const categroySchema = new mongoose.Schema(
    {
        
    },
    {timestamps:true}
);

export const Categroy = mongoose.model('Categroy', categroySchema);
