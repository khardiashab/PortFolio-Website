import mongoose, { Schema } from "mongoose";
import { comparePassword, hashPassword } from "../Utils/bcrypt.js";
import { createJwt } from "../Utils/jwt.js";

const UserSchema = new Schema({
  username : {
    type : String,
    require : [true, "Please provide a username"]
  },
  email : {
    type : String,
    require : [true, "Please provide a username"],
    unique : true
  },
  password : {
    type : String,
    require : [true, "Please provide a password."]
  },
  isAdmin : {
    type : Boolean,
    default : false
  }
})

UserSchema.pre("save", hashPassword)

UserSchema.methods.comparePassword = comparePassword

UserSchema.methods.createJwt = createJwt



export const User = new mongoose.model("User", UserSchema)