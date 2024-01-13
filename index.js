import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import router from './src/modules/user/user.router.js'
import blogRouter from './src/modules/blog/blog.router.js'
import cors from 'cors'
// dotenv لازم تكتب السطرين دول عشان تشغل ملف ال 
import * as dotenv from 'dotenv'
dotenv.config()



const app = express()
const port = process.env.PORT

app.use(cors())

// Connection DataBase 
dbConnection()

// Medal ware
app.use(express.json())

// Routing
app.use(router)
app.use(blogRouter)

// Server
app.listen(port, () => console.log(`Server Is Running : ${port}!`))