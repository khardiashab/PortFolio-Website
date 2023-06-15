import mongoose, { Schema } from "mongoose";

const HeroSchema = new Schema({
  bigHeading : {
    type : String,
  },
  desc : {
    type : String,
  },
  imageUrl : {
    type : String
  },
  btnText : {
    type : String
  },
  btnLink : {
    type : String
  }
})

const Hero = new mongoose.model("Hero", HeroSchema)
export  default Hero