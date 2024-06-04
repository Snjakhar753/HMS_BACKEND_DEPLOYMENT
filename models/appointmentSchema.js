import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from "validator";
const appointmentSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "First Name Is Required!"],
        minLength:[3,"First Name Must Contain Atleast 3 Characters!"]
    },
    lastName:{
        type: String,
        required: [true, "Last Name Is Required!"],
        minLength:[3,"Last Name Must Contain Atleast 3 Characters!"]
    },
    email:{
        type: String,
        required: [true, "Email Is Required!"],
        validator:[validator.isEmail,"Please Provide A Valid Email!"]
    },
    phone:{
        type: String,
        required:[true, "Phone Is Required!"],
        minLength:[10,"Phone Number must Conatin Exact 10 Digit!"],
        maxLength:[10,"Phone Number Must Conatin Exact 10 Digit!"],
    },
    nic:{
        type: String,
        required:[true, "NIC Is Required!"],
        minLength:[5,"Nic Must Conatin Exact 5 Digit!"],
        maxLength:[5,"Nic Must Conatin Exact 5 Digit!"],
    },
   dob:{
    type: Date,
    required:[true,"DOB is required!"],
   },
   gender:{
    type: String,
    required: [true, "Gender Is Required!"],
    enum:["Male","Female"],
   },
   appointment_date: {
    type: String,
    required: [true, "Appointment Date Is Required!"],
  },
    department:{
         type:String,
         required: [true, "Department Name Is Required!"],
    },
    doctor:{
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
    },
    hasVisited:{
        type: Boolean,
        default:false,
    },
    address:{
        type:String,
        required:true,
    },
    
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required:true,
    },
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending",
    },
});

export const Appointment =  mongoose.model("Appointment",appointmentSchema);