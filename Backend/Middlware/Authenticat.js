import { InvalidError, UnAuthorisedError } from "../errors/errors.js"
import { verifyJwt } from "../Utils/jwt"

export const verifyUser = async(req, res, next)=>{
  verifyJwt(req, res, next, () => {
    if(req.params.userId === req.user.userId || req.user.isAdmin){
      return next()
    }
    else {
      throw InvalidError("Your are not a valid user.")
    }
  })
}
export const verifyAdmin = async(req, res, next)=>{
  verifyJwt(req, res, next, () => {
    if(req.user.isAdmin){
      return next()
    }
    else {
      throw UnAuthorisedError("Your are not authorized.")
    }
  })
}
