const ShoeModel = require("../models/shoe.model");

const getShoes = (req, res) => {
    res.json({
        message: "getShoes"
    });
}

const getShoe = (req, res) => {
    res.json({
        message: "getShoe"
    });
}

const addShoe = async (req, res) => {
    const {
        title,
        mrp,
        price,
        color
    } = req.body;

    if(!title, !mrp, !price, !color) {
        res.json({
            message: "Required fields can't be empty!"
        });
    }

    const newShoe = await ShoeModel.create({
        title,
        mrp,
        price,
        color
    });

    return res.json({
        newShoe
    });
}

const editShoe = (req, res) => {
    res.json({
        message: "editShoe"
    });
}

const deleteShoe = (req, res) => {
    res.json({
        message: "deleteShoe",
        id: req.params.id
    });
}

module.exports = {
    getShoes,
    getShoe,
    addShoe,
    editShoe,
    deleteShoe
}