import { userModel } from "../../../database/models/user.model.js";
// import bcrypt from "bcrypt";
import { generateToken } from "../../utils/generateToken.js";
export const getAllUsers = async (req, res) => {
    let users = await userModel.find()
    res.json({ message: "success", users })
}

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;


    let user = await userModel.findOne({ email })
    if (user) {
        res.json({ message: "Email Already Exist" })
    } else {
        await userModel.insertMany({ name, email, password })
        // bcrypt.hash(password, Number(process.env.ROUND), async (err, hash) => {
        //     await userModel.insertMany({ name, email, password: hash })
        //     res.json({ message: "success" })
        // });
        res.json({ message: "success" })
    }

}

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email })
    if (user) {
        // const match = await bcrypt.compare(password, user.password);
        if (password == user.password) {
            
            let token = generateToken({ name: user.name, role: user.role, userId: user._id })
            res.json({ message: "login", token })
        } else {
            res.json({ message: "Password Not Valid" })
        }
    } else {
        res.json({ message: "Email Not Found" })
    }
}