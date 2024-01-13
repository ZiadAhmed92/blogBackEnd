import { blogModel } from "../../../database/models/blog.model.js"

const getAllBlogs = async (req, res) => {
    let blogs = await blogModel.find().populate("createdBy", "name ")
    res.json({ message: "success", blogs })
}
const getUserBlog = async (req, res) => {
    const { id } = req.params
    let blogs = await blogModel.find({ createdBy: id }).populate("createdBy", "name ")
    res.json({ message: "success", blogs })
}

const getOneBlog = async (req, res) => {
    const { id } = req.params
    let blogs = await blogModel.findById({ _id: id }).populate("createdBy", "name ")
    res.json({ message: "success", blogs })
}

const addBlogs = async (req, res) => {
    const { title, desc, createdBy } = req.body
    let blog = await blogModel.insertMany({ title, desc, createdBy })
    res.json({ message: "success", blog })
}

const deleteBlogs = async (req, res) => {
    const { id } = req.params
    let blog = await blogModel.findByIdAndDelete({ _id:id })

    blog ? res.json({ message: "success", blog }) : res.json({ message: "Blog Not Found" })

}

const updateBlogs = async (req, res) => {
    const { _id, title, desc } = req.body
    let blog = await blogModel.findByIdAndUpdate({ _id }, { title, desc }, { new: true })

    blog ? res.json({ message: "success", blog }) : res.json({ message: "Blog Not Found" })

}




export {
    getAllBlogs,
    addBlogs,
    deleteBlogs,
    updateBlogs,
    getUserBlog,
    getOneBlog
}
