let todos = [];
let id = 1;

const { response } = require("express");
const Todo = require("../models/todo")

exports.getTodo = async(request,response)=>{
     //response.send("get Working")
    //response.status(200).json(todos)
    try{
        const todos =  await Todo.find()
        response.status(200).json(todos);
    }catch(err){
       response.status(500).send(err);
        
    }

};




exports.createTodo =  async(request,response)=>{
    try{

        const {task} = request.body;
        if(task===undefined)
            return response.status(404).json({message:"task not found"});
        const todos = await Todo.create({
            task,
            Completed:false
        })
        response.status(201).json(todos);
    }
    // todos.push(newTodo)
    // response.json(newTodo)
    catch(err){
        response.status(500).send(err)

    }
};



exports.updateTodo = async(request,response)=>{
    //response.send("Update working")
   try{
    const todo =  await Todo.findById(request.params.id);
   if(!todo){
    response.status(404).json({message:"todo not found"})
   }
   todo.task = request.body.task || todo.task;
   todo.completed = request.body.completed === undefined?todo.completed:request.body.completed
   await todo.save();
   response.status(200).json(todo)  
   }
   catch(err){

    response.status(500).send(err);
   }
   
};

exports.deleteTodo = async(request,response)=>{
    //response.send("delete working")
   try{
     await Todo.findByIdAndDelete(request.params.id)
     response.status(200).json({message:"task deleted successfully"});
   }catch(err){
    response.status(500).send(err);

   }
};