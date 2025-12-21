require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connection.db");
const cors = require("cors");

const shoeRoute = require("./routes/shoe.route");
const userRoute = require("./routes/user.route");

const app = express();
app.use(express.json());  //for body
app.use(cors());  //cors
app.use(express.static("public"));  //public directory as static

connectDB();

//routes
app.use('/api/shoe', shoeRoute);
app.use("/api/user", userRoute);

//Server start
const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});