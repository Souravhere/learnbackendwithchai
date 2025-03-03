import mongoose from 'mongoose';

const todosSchema = new mongoose.Schema(
    {

    },
    {timestamps:true}
)

export const Todos = mongoose.model('Todos', todosSchema);