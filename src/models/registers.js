const mongoose =require("mongoose");
const validator=require("validator");
const studentSchema = new mongoose.Schema({
    First : {
         type:String,
        required :true
    },

    Last : {
        type:String,
        required:true
    },
    user:
    {
        type:String,
        required:true,
        unique:true

    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    course :{
        type:String,
        required:true
      //  unique:true
    },
   

    password:
    {
        type:String,
        required:true
    },
    cpassowrd:
    {
        type:String,
        required:true
    },
    gender:
    {
        type:String,
        required:true
       
    }
  
 

});
//we need to create a collection

const Registers =  mongoose.model('Registers',studentSchema);
module.exports= Registers