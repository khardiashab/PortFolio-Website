import mongoose, { Schema } from "mongoose"

const SpecificationSchema = new Schema({
  title :{
    type : String,
    required : [true, "Please Provide a title."],
    trim : true,
    maxlength  : 50,
  },
  imageIcon : {
    type : String
  },
  description : {
    type : String,
  },
  color1:{
    type : String,
    default : "#ff8a00"
  },
  color2:{
    type : String,
    default : "#e52e71"
  },
})
const  Specification = mongoose.model("Specification", SpecificationSchema)
export default Specification 