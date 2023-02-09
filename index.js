const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true},
    () => console.log("connected to db")
);

// Import routes
const sampleRoutes = require("./routes/sample");

// route Middlewares
app.use("/api/sample", sampleRoutes);

// Middlewares
app.use(express.json());
app.use(cors());

app.listen(4000, () => console.log("server up and running on port 4000!"));

