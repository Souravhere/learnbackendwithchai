import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
        productname:{
            type: String,
            required:true
        },
        productDescription:{
            type: String,
            required:true 
        },
        productImages:{
            type: String,
            required: true
            //majorly we will stored the images on the third party like aws and cloudnary etc
        },
        category:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categroy",
            required: true
        },
        price:{
            type: Number,
            required:true
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true
        }
    },
    {timestamps:true}
);

export const Product = mongoose.model('Product', productsSchema )