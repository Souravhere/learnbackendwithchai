import mongoose  from "mongoose";

const subTodosSchema = new mongoose.Schema(
    {},
    {timestamps:true}
);

export  const SubTodo = mongoose.model('SubTodo', subTodosSchema);