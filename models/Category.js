const mongoose=require("mongoose");

const categorySchema = new mongoose.Schema({
   categoryName:{
    type:String,
    required:true,
   },
   status:{
    type:Boolean,
    required:true,
   },
   userId:{
    type:String,
    required:true,
   },
   createdAt:{
    type:Date,
    default:Date.now,
   }

});

const category = mongoose.model("category", categorySchema);
module.exports = category;