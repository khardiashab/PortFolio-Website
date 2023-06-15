import mongoose, { Schema } from "mongoose";

const TestmonialSchema = new Schema({
  name:{
    type : String,
    required : true,
    trim  : true,
    maxlenght : 50
  },
  companyName:{
    type : String,
    required : true,
    trim  : true,
    maxlenght : 50
  },
  comment:{
    type : String,
    required : true,
    trim  : true,
    maxlenght : 1000
  },
  imageUrl :{
    type :String,
  }
})
const Testimonial = new mongoose.model("Testimonial", TestmonialSchema)
export default Testimonial