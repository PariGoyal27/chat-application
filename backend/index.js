import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import connectDB from "./config/database.js";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/user", userRoute);

// app.get("/", (req, res) => {
//     res.send("Server started working");
// });


app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});
// // const express = require('express') // method-1
// import express from "express"; // method-2
// import dotenv from "dotenv";
// import connectDB from "./config/database.js";
// import userRoute from "./routes/userRoute.js"

// dotenv.config({});

// const app = express();

// const PORT = process.env.PORT || 5000;

// //middleware
// app.use(express.json());

// // routes
// app.use("api/v1/user", userRoute);
// // http://localhost:080/api/v1/user/register

// app.listen(PORT, ()=>{
//     connectDB();
//     console.log(`Server listen at port ${PORT}`);
// });  

