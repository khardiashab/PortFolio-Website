import Skills from "../Models/Skills-schema.js";

export const getSkills = async(req, res) =>{
  let skills = await Skills.find({})
  res.status(200).json(skills)
}
export const createSkills = async(req, res) =>{
  let skills = await Skills.create(req.body)
  res.status(200).json(skills)
}
export const getOneSkills = async(req, res) =>{
  let skillsId = req.params.Id
  let skills = await Skills.findById(skillsId)
  res.status(200).json(skills)
}
export const updateSkills = async(req, res) =>{
  let skillsId = req.params.Id
  let skills = await Skills.findByIdAndUpdate(skillsId, req.body, {
    $set : true,
    "new" : true
  })
  res.status(200).json(skills)
}
export const deleteSkills = async(req, res) =>{
  let skillsId = req.params.Id
  let skills = await Skills.findByIdAndDelete(skillsId)
  res.status(200).json(skills)
}