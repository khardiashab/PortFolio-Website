// import bcrypt from "bcrypt"

async function hashPassword (){
  // let salt = await bcrypt.genSalt(10)
  // return bcrypt.hash(this.password, salt)
  this.password = "hash-" + this.password + "-password"
}

async function comparePassword (givenPassword){
  // return bcrypt.compare(givenPassword, this.password)
  return this.password.split("-")[1] === givenPassword ? true : false
}

export {hashPassword, comparePassword}