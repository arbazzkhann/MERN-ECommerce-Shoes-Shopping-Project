const mongoose = require("mongoose");

const shoeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: true
    },
    addedBy: {
        type: mongoose.Types.ObjectId,
        ref: "UserModel"
    }
}, { collection: "shoe" });

module.exports = mongoose.model("shoe", shoeSchema);