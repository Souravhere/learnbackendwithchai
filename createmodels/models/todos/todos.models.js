import mongoose from 'mongoose';

const todosSchema = new mongoose.Schema(
    {
        content:{
            type: String,
            required: true,
        },
        completed:{
            type: Boolean,
            default: false,
        },
        createdby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        subtodos: [ // here by defaule we will created arry
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'SubTodo '
            } //here we will added the subtodo 
        ]
    },
    {timestamps:true}
)

export const Todo = mongoose.model('Todo ', todosSchema);