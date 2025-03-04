import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        orderPrice:{
            type: Number,
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true
        },
        orderItems:{
            type: []
        }
    },
    {timestamps: true}
);

export const Order = mongoose.model("Order", orderSchema);