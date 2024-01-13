import mongoose from "mongoose";

let blogSchema = mongoose.Schema({
    title: String,
    desc: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
})

export const blogModel = mongoose.model('blog', blogSchema)