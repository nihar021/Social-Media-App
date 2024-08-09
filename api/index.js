const express = require("express");

const app=express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const multer = require("multer");
const path = require("path");


dotenv.config();
mongoose.set('strictQuery', true);
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
   
//    console.log("Mongoose is connected");
//});
//const db = mongoose.connection;
//db.on("error", console.error.bind(console, "connection error: "));
//db.once("open", function () {
 // console.log("Connected successfully");
//});
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnected Succesfully!"));

app.use("/images",express.static(path.join(__dirname,"public/images")));

//middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"public/images");
  },
  filename:(req,file,cb)=>{
    cb(null,req.body.name);
  },
})

const upload = multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
  try{
return res.status(200).json("File uploaded successfully");
  }catch(err){
    console.log(err)
  } 
})

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes);


app.listen(4000,() => {console.log("Server is Running")});