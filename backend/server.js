require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connection.db");
const cors = require("cors");

const shoeRoute = require("./routes/route.shoe");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

//routes
app.use('/shoe', shoeRoute);

//Server start
const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});