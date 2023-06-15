import mongoose, { Schema } from "mongoose"

const SkillsSchema = new Schema({
  title :{
    type : String,
    required : [true, "Please Provide a title."],
    trim : true,
    maxlength  : 50,
  },
  logoUrl : {
    type : String
  },
  featured : {
    type : Boolean,
    default : false
  }
})
const Skills = mongoose.model("Skills", SkillsSchema)
export  default Skills