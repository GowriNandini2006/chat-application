require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

//Builtin Middlwares
app.use(cors())
app.use(express.json());

connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/",chatRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on port : ${process.env.PORT}`);
})
