const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({
            message: "username or password can't be empty"
        });
    }

    const user = await UserModel.findOne({
        email
    });

    if(user) {
        return res.status(400).json({
            message: "user already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserModel.create({
        email,
        password: hashedPassword
    });

    let token = jwt.sign(
        //payload
        {
            email,
            id: newUser._id
        },

        //secret key
        process.env.SECRET_KEY,

        //expire duration
        // {expiresIn: "1hr"}
    );

    //final response after userCreated
    res.status(200).json({
        message: "User created successfully :)",
        token,
        email: newUser.email
    });
    
}

const userLogin = async (req, res) => {

}


const getUser = async (req, res) => {

}


module.exports = {
    userSignup,
    userLogin,
    getUser,
}