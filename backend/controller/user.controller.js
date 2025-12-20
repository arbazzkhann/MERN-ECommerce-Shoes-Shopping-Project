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
        user: newUser
    });
    
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
        email
    });

    if(!user) {
        return res.status(400).json({
            message: "Invalid credentials!"
        });
    }

    const decryptPassword = await bcrypt.compare(password, user.password);

    if(!decryptPassword) {
        return res.status(400).json({
            message: "Invalid credentials!"
        });
    }

    let token = jwt.sign({email, id: user._id}, process.env.SECRET_KEY);

    res.status(200).json({
        message: "User found successfully :)",
        user,
        token
    });    
}

const getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    
    res.status(200).json({
        message: "User Found",
        id: user._id,
        email: user.email
    });
}


module.exports = {
    userSignup,
    userLogin,
    getUser,
}