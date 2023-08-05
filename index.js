// To connect through mongodb
const mongoose = require ("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Blog");

// Use and require express
const express = require ("express");
const app = express();

 const isBlog = require("./middlewares/isBlog");
 app.use(isBlog.isBlog);
   
 // For Admin Route
 const adminRoute = require ("./routes/adminRoute");
 app.use("/",adminRoute);

 // For User Route

 const userRoute = require ("./routes/userRoute");
 app.use("/",userRoute);

// For Blog Route

const blogRoute = require ("./routes/blogRoute");
app.use("/",blogRoute);


// Listen on port 

 app.listen(3000, function(){
    console.log("Server running on port 3000");
 });