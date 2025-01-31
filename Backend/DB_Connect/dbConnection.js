const mongoose =require('mongoose');

const connectDB= async ()=>{
       try{
        const conn= mongoose.connect("mongodb://127.0.0.1:27017/HackthonTeams",{
          family:4
        });
        console.log("Connected successfully") ;
       }
       catch(err){
         console.log(`Error in connection : ${err}`);
       }
}
module.exports =connectDB;