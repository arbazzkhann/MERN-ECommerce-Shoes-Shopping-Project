const mongoose = require("mongoose");

const connectDB = async function () {
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("DB Connected successfully!");
    })
    .catch((err) => {
        console.log("Error while connection to DB: ", err);
    });
}

module.exports = connectDB;