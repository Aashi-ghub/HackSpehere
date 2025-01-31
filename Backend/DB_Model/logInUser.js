const mongoose =require('mongoose');

const user=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    accountId:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    }
})
const loggedInUser= mongoose.model('loggedInUser',user);
module.exports=loggedInUser;