let users = [];
let id = 1;
exports.createUser = (request,response)=>{
    const {name,email} = request.body;
    const newUser = {
        id:id++,
        name,
        email
    }
    users.push(newUser);
    response.status(200).json(newUser);
}

exports.getUser = (request,response)=>{
    response.status(200).json(users);
};
exports.getUserById = (request,response)=>{
    const user = users.find((u)=>u.id===parseInt(request.params.id));
    if(user===undefined) 
        return response.status(404).json({message:"user not found"})
    response.status(200).json(user)
};
exports.editUser = (request,response)=>{
    const user = users.find((u)=>u.id===parseInt(request.params.id));
    if(user===undefined)
        return response.status(404).json({message:"user not found"});
    user.name = request.body.name===undefined?user.name:request.body.name;
    user.email = request.body.email || user.email
    response.status(200).user.json(user)

};
exports.deleteUser = (request,response)=>{
    const index = users.findIndex((u)=>u.id===parseInt(request.params.id));
    if(index===-1) 
        return response.status(404).json({message:"user not found"});
    users = users.filter((u,i)=>i!==index);
    response.status(200).json({message:"user deleted successfully"});
};