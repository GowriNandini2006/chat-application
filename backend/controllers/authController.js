const User = require("../models/User");
const bcrypt = require("bcryptjs");

//register
exports.register = async(req,res)=>{
    try{
        const {name,email,password} = req.body
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            });
        }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User({
        name,
        email,
        password:hashedPassword
    })
    await user.save();
    res.json({
        success:true,
        message:"User Registered Successfully"
    });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Registration Error"
        })
    }
}

//login
exports.login = async(req,res)=>{
    try{
        const {email,password}=req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
            message:"User not Found"
        });
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            message:"Invalid Password"
        });
    }
    res.json({
        success:true,
        message:"Login Successfully",
        userId:user._id
    })
}catch(err){
    console.err(err);
    res.status(500).json({
        message:"Login Error"
    })
 }
}