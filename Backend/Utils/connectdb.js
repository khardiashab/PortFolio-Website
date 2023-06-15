import mongoose from "mongoose";

const connectDb = async ()=>{
  mongoose.set("strictQuery", true)
  return mongoose.connect(process.env.MONGO_URI)
}

export default connectDb