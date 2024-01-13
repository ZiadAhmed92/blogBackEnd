import express from "express"
import { addBlogs, deleteBlogs, getAllBlogs, getOneBlog, getUserBlog, updateBlogs } from "./blog.controller.js";
import { authToken } from "../../middleware/middleware.js";


let blogRouter = express.Router();

// blogRouter.get("/blogs", authToken, getAllBlogs)
blogRouter.get("/blogs", getAllBlogs)
blogRouter.get("/blogs/:id", getUserBlog)
blogRouter.get("/userBlog/:id", getOneBlog)
blogRouter.post("/blogs", addBlogs)
blogRouter.delete("/delete/:id", deleteBlogs)
blogRouter.put("/blogs", updateBlogs)



export default blogRouter;