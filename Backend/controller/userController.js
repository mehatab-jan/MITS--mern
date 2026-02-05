// let users = [];
// let id = 1;
const User = require("../models/user")
exports.createUser = async(request,response)=>{
    try{
        const {name,email} = request.body;
        const  exist = await User.findOne({email})
        if(exist)
            return response.status(401).json({message:"user already exist"})
   
       const user =  await User.create({
            name,
            email

        })
        response.status(200).json(user);
    }catch(err){
        response.status(500).send(err);

    }
        
    
    // users.push(newUser);
    // response.status(200).json(newUser);
}

exports.getUser = async(request,response)=>{
    try{
        const users = await User.find();
        response.status(200).json(users)


    }catch(err){
        response.status(500).json(err);

    }
};
exports.getUserById =  async(request,response)=>{

    try{
        const user = await User.findById(request.params.id);
        if(!user)
            return response.status(404).json({message:"User not found"})
        response.status(200).json(user)


    }catch(err){
        response.status(500).send(err)
    }







    // const user = users.find((u)=>u.id===parseInt(request.params.id));
    // if(user===undefined) 
    //     return response.status(404).json({message:"user not found"})
    // response.status(200).json(user)
};
exports.editUser = async(request,response)=>{
    try{
       const user =  await  User.findByIdAndUpdate(request.params.id,request.body,{new:true});
        if(!user)
            return response.status(404).json({message:"user not found"})
        response.status(200).json(user)
    



    }catch(err){
        response.status(500).send(err);

    }








    // const user = users.find((u)=>u.id===parseInt(request.params.id));
    // if(user===undefined)
    //     return response.status(404).json({message:"user not found"});
    // user.name = request.body.name===undefined?user.name:request.body.name;
    // user.email = request.body.email || user.email
    // response.status(200).user.json(user)

};
exports.deleteUser = async(request,response)=>{
    try{
        const user =   await  User.findByIdAndDelete(request.param.id);
        if(!user)
            return response.status(404).json({message:"user not found"})
        response.status(200).json({message:"user delted successfully"})
       }catch(err){
        response.status(500).send(err);
     }









    // const index = users.findIndex((u)=>u.id===parseInt(request.params.id));
    // if(index===-1) 
    //     return response.status(404).json({message:"user not found"});
    // users = users.filter((u,i)=>i!==index);
    // response.status(200).json({message:"user deleted successfully"});
};