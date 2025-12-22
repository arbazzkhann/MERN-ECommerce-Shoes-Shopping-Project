const express = require("express");
const router = express.Router();

const controller = require("../controller/shoe.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get('/', controller.getShoes);  //get all shoes

router.get('/:id', controller.getShoe); //get shoe by id

router.post(
    '/',
    controller.upload.single('image'),  //upload from "multer"
    authMiddleware.varifyToken,  //token varify middleware
    controller.addShoe //controller
); // add shoe

router.put('/:id', controller.editShoe); //update shoe

router.delete('/:id', controller.deleteShoe); //delete shoe

module.exports = router;