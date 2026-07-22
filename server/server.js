const express = require("express");
const cors = require("cors");
const path = require("path");

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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", require('./routes/authRoutes'));
app.use("/api/upload", require('./routes/uploadRoutes'));
app.use("/api/user", require('./routes/userRoutes'));
app.use("/api/bloom", require('./routes/bloomRoutes'));
app.use("/api/character", require('./routes/characterRoutes'));
app.use("/api/words", require('./routes/wordRoutes'));
app.use("/api/unit", require('./routes/unitRoutes'));
app.use("/api/lesson", require('./routes/lessonRoutes'));
app.use("/api/session", require('./routes/dailySessionRoutes'));
app.use("/api/progress", require("./routes/progressRoutes"));

app.use(errorHandler);
app.listen(PORT, () => {
    dbConnect.ConnectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
})