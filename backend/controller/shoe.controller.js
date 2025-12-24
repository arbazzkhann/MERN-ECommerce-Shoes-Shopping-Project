const ShoeModel = require("../models/shoe.model");
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + '-' + file.fieldname + ".jpeg";
    cb(null, fileName);
  }
});

const upload = multer({ storage });


const getShoes = async (req, res) => {
    const getShoes = await ShoeModel.find();

    res.status(200).json({
        message: "All shoes",
        getShoes
    });
}

const getShoe = async (req, res) => {
    const getShoe = await ShoeModel.findById(req.params.id)

    res.status(200).json({
        getShoe
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
        color,
        image: req.file.filename,
        addedBy: req.user.id
    });

    return res.status(200).json({
        newShoe
    });
}

const editShoe = async (req, res) => {
    const shoe = await ShoeModel.findById(req.params.id);

    try {
        if(shoe) {
            await ShoeModel.findByIdAndUpdate(
                req.params.id, //shoe ID,
                {...req.body, image: req.file.filename},
                {new: true}
            );

            res.status(200).json(shoe);
        }
        else {
            res.json("NOT")
        }
    }
    catch(err) {
        return res.status(500).json({
            message: "Error while updating shoe",
            error: err.message
        });
    }
}

const deleteShoe = async (req, res) => {
    const shoe = await ShoeModel.findById(req.params.id);

    try {
        await ShoeModel.deleteOne({
            _id: req.params.id
        })
        res.json(200).json({
            message: "Item successfully deleted :)",
            id: req.params.id
        });
    }
    catch {
        res.status(400).json({
            message: "Error while deleting item :("
        });
    }
}

module.exports = {
    getShoes,
    getShoe,
    addShoe,
    editShoe,
    deleteShoe,

    upload //variable
}