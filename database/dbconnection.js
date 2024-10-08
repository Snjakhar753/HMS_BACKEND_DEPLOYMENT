import mongoose from "mongoose";

export const dbconnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"HMS_DEPLOYED",
    })
    .then(()=>{
        console.log("Connected to database!");
    })
    .catch((err)=>{
        console.log(`Some error is occured while connecting to database: ${err}`);
    });
};