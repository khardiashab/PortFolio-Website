import jwt from "jsonwebtoken"
import { InvalidError } from "../errors/errors.js"

async function createJwt(){
  let payload = {userId : this._id, name : this.username, isAdmin : this.isAdmin}
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn : process.env.JWT_LIFETIME})
}

async function verifyJwt(req, res, next){
  try {
    
    let token = req.cookies?.access_token
    let payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
  } catch (error) {
    return InvalidError("Invaild header token.")
  }
    //   let payload = jwt.verify(token, process.env.JWT_SECRET)
    // return  payload
}

export {createJwt, verifyJwt}