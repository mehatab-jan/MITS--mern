let todos = [];
let id = 1;



exports.getTodo = (request,response)=>{
     //response.send("get Working")
    response.status(200).json(todos)
};




exports.createTodo = (request,response)=>{
    //response.send("Put Working")
    const {task} = request.body;
    const newTodo = {
        id:id++,
        task,
        Completed:true
    }
    todos.push(newTodo)
    response.json(newTodo)
};

exports.updateTodo = (request,response)=>{
    //response.send("Update working")
   const todo =  todos.find((t)=>t.id===parseInt(request.params.id))
   if(!todo){
    response.json({message:"todo not found"})
   }
   todo.task = request.body.task || todo.task;
   todo.Completed = request.body.Completed === undefined?todo.Completed:request.body.Completed
   response.json(todo)  
   
};

exports.deleteTodo = (request,response)=>{
    //response.send("delete working")
    const  index = todos.findIndex((t)=>t.id===parseInt(request.params.id))
    if(index===-1)
        return response.status(404).json({message:"Task not found"})
    todos=todos.filter((_,i)=>i!==index);
    response.status(200).json({message:"Task deleted successfully"});
};