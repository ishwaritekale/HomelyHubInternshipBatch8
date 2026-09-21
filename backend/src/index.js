import express from "express";     //import the what we installed  //import the library
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"
import {router} from "./Routes/userRoutes.js";
import { propertyRouter } from "./Routes/propertyRouter.js";
import { bookingRouter } from "./Routes/bookingRouter.js";
import {tripRouter} from "./Routes/tripRouter.js";

import connectDB from "./utils/db.js";

dotenv.config()
const app = express();              //create an application


//Express.json  
app.use(express.json({limit:"100mb"}))   //experss take 100kb data but our project needs 100mb becauz have large data

//urlencoded
app.use(express.urlencoded({limit:"100mb",extended:true}))

//cookieparser
app.use(cookieParser())

app.use(cors({
    origin:process.env.ORIGIN_ACCESS_URL,
    credentials:true
}))

const PORT= process.env.PORT;              //diff no we can take   

//one test route
app.get("/",(req,res)=>{          //request passed by client going to the server  //get= fetch the data
    res.send("Homelyhub server is running")      

})          
app.use("/api/v1/rent/user",router)
app.use("/api/v1/rent/listing",propertyRouter)
app.use("/api/v1/rent/user/booking",bookingRouter)
app.use("/api/v1/rent/trip",tripRouter)
connectDB();

app.listen(PORT,()=>{             //Start the server and keep it running
    console.log(`App is running on port no:${PORT}`);
})

