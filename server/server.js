const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
require("dotenv").config();
const dbConnect = require('./config/dbConnect');
const passport = require('passport');

const errorHandler=require('./middleware/errorHandler')
const { app } = require('./socket/socket');
const PORT = process.env.PORT;

app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"], 
  credentials: true,               
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));
app.use(express.json());
app.use(cookieParser());
require('./config/passport');
app.use(passport.initialize());

app.use("/api/auth", require('./routes/authRoutes'));
app.use("/api/user", require('./routes/userRoutes'));
app.use("/api/user", require('./routes/userRoutes'));
app.use("/api/bloom", require('./routes/bloomRoutes'));

app.use(errorHandler);
app.listen(PORT, () => {
    dbConnect.ConnectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
})