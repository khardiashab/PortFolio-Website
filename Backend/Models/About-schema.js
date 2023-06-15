import mongoose, { Schema } from "mongoose";

const AboutSchema = new Schema({
  desc : {
    type : String,
  },

  btn1Text : {
    type : String
  },
  btn1Link : {
    type : String
  },
  btn2Text : {
    type : String
  },
  btn2Link : {
    type : String
  },
})

const About = new mongoose.model("About", AboutSchema)
export  default About