import mongoose from "mongoose";
import validator from "validator";

const messageschema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minLength:[3,"First name must contain atleast 3 characters!"]
    },
    lastName:{
        type: String,
        required:true,
        minLength:[3,"Last name must contain atleast 3 characters!"]
    },
    email:{
        type: String,
        required:true,
        validator:[validator.isEmail,"Please provide a valid email!"]
    },
    phone:{
        type: String,
        required:true,
        minLength:[10,"Phone number must conatin exact 10 digit!"],
        maxLength:[10,"Phone number must conatin exact 10 digit!"],
    },
    message:{
        type: String,
        required:true,
        minLength:[10,"Message  must contain atleast 10 characters!"]
    },
});

export const Message = mongoose.model("message",messageschema);

