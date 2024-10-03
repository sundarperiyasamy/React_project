
const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   image:{
    type:String,
    required:true
   }
});

module.exports = mongoose.model('Add_Product', formSchema);