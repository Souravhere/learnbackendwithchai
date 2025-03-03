import mongoose  from "mongoose";

const subTodosSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        completed:{
            type: Boolean,
            default: false
        },
        createdby:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    },
    {timestamps:true}
);

export  const SubTodo = mongoose.model('SubTodo', subTodosSchema);