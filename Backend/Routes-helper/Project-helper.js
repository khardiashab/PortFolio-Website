import Project from "../Models/Project-schema.js";

export const getProject = async(req, res) =>{
  let project = await Project.find({})
  res.status(200).json(project)
}
export const createProject = async(req, res) =>{
  let project = await Project.create(req.body)
  res.status(200).json(project)
}
export const getOneProject = async(req, res) =>{
  let projectId = req.params.Id
  let project = await Project.findById(projectId)
  res.status(200).json(project)
}
export const updateProject = async(req, res) =>{
  let projectId = req.params.Id
  let project = await Project.findByIdAndUpdate(projectId, req.body, {
    $set : true,
    "new" : true
  })
  res.status(200).json(project)
}
export const deleteProject = async(req, res) =>{
  let projectId = req.params.Id
  let project = await Project.findByIdAndDelete(projectId)
  res.status(200).json(project)
}