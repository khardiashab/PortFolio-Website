import dotenv from "dotenv"
import "express-async-errors"
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors";
import { NotFound } from "./Middlware/Not-found.js"
import { ErrorHandler } from "./Middlware/ErrorHandler.js"
import connectDb from "./Utils/connectdb.js"
import HeroRoute from "./Routes/Hero.js"
import TestimonialRoute from "./Routes/Testimonial.js"
import ProjectRoute from "./Routes/Project.js"
import SpecificationRoute from "./Routes/Specification.js"
import SkillsRoute from "./Routes/Skills.js"
import AboutRoute from "./Routes/About.js";
dotenv.config()

const app = express()
// middlware
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(cors())

// routes 
// app.use("/api/v1/auth/", authRouter)
app.use("/api/v1/Hero", HeroRoute)
app.use("/api/v1/Skills", SkillsRoute)
app.use("/api/v1/Specification", SpecificationRoute)
app.use("/api/v1/Project", ProjectRoute)
app.use("/api/v1/About", AboutRoute)
app.use("/api/v1/Testimonial", TestimonialRoute)

// error middleware 
app.use(NotFound)
app.use(ErrorHandler)

// start
const port = process.env.PORT || 7777

const start =  async ()=>{
  try {
    await connectDb()
    app.listen(port , console.log(`App is running on Port :${port}`))
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()