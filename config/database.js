const mongoose=require("mongoose")
require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{

        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("db connected carefully"))
    .catch((error)=>console.error(error.message))
}
module.exports=dbconnect;

