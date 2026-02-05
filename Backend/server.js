// const express = require("express")
// const todoRoute = require("./router/todoRouter")
// const dotenv = require("dotenv")
// const userRoute = require("./router/userRouter");
// const connectDB = require("./config/db")
// const cors = require("cors")
// app.use(cors());

// const app = express(); 
// app.use(cors());
// dotenv.config();
// connectDB();

// app.use(express.json())
// //function usin app we can create our app
// app.use("/api/todo",todoRoute);
// app.use("/api/user", userRoute);

// // app.get("/",(request,response)=>{
// //     response.send("Get route is working")

// // })
// // app.post("/create",(request,response)=>{
// //     response.json({
// //         message:"post route is working"
// //     })
    
// // })
// // app.put("/put",(request,response)=>{
// //     response.status(200).json({
// //         message:"Put Route is Working"

// //     })

    
    

// // })
// // app.delete("/delete",(request,response)=>{
// //     response.status(200).json({
// //         message:"delete route is working"
// //     })
// // })
// const PORT = process.env.PORT;
// app.listen(PORT,()=>{
//     console.log(`server running on port  http://localhost:${PORT}`);
    
// })
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const todoRoute = require("./router/todoRouter");
const userRoute = require("./router/userRouter");
const connectDB = require("./config/db");

dotenv.config();          // load env variables

const app = express();   // ✅ create app FIRST

// middlewares
app.use(cors());
app.use(express.json());

// database
connectDB();

// routes
app.use("/api/todo", todoRoute);
app.use("/api/user", userRoute);

// port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

