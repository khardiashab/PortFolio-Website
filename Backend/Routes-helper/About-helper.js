import About from "../Models/About-schema.js";

export const getAbout = async(req, res) =>{
  let about = await About.find({})
  res.status(200).json(
    about
  )
}
export const createAbout = async(req, res) =>{
  let about = await About.create(req.body)
  res.status(200).json(about)
}
export const getOneAbout = async(req, res) =>{
  let aboutId = req.params.Id
  let about = await About.findById(aboutId)
  res.status(200).json(about)
}
export const updateAbout = async(req, res) =>{
  let aboutId = req.params.Id
  let about = await About.findByIdAndUpdate(aboutId, req.body, {
    $set : true,
    "new" : true
  })
  res.status(200).json(about)
}
export const deleteAbout = async(req, res) =>{
  let aboutId = req.params.Id
  let about = await About.findByIdAndDelete(aboutId)
  res.status(200).json(about)
}