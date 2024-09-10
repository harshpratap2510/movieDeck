import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


import connectDb from "./config/db.js"

import userRoutes from "./routes/userRoutes.js"


dotenv.config();
connectDb();


const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



const PORT = process.env.PORT || 3000 ;

 
 
//Routes
app.use("/api/v1/users",userRoutes);

app.listen(PORT, ()=> console.log(`Running on port ${PORT}`))