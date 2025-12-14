const express = require("express");
const router = express.Router();

const controller = require("../controller/controller.shoe");

router.get('/', controller.getShoes);  //get all shoes
router.get('/:id', controller.getShoe); //get shoe by id
router.post('/', controller.addShoe); // add shoe
router.put('/:id', controller.editShoe); //update shoe
router.delete('/:id', controller.deleteShoe); //delete shoe

module.exports = router;