import Specification from "../Models/Specification-schema.js";

export const getSpecification = async(req, res) =>{
  let specification = await Specification.find({})
  res.status(200).json(specification)
}
export const createSpecification = async(req, res) =>{
  let specification = await Specification.create(req.body)
  res.status(200).json(specification)
}
export const getOneSpecification = async(req, res) =>{
  let specificationId = req.params.Id
  let specification = await Specification.findById(specificationId)
  res.status(200).json(specification)
}
export const updateSpecification = async(req, res) =>{
  let specificationId = req.params.Id
  let specification = await Specification.findByIdAndUpdate(specificationId, req.body, {
    $set : true,
    "new" : true
  })
  res.status(200).json(specification)
}
export const deleteSpecification = async(req, res) =>{
  let specificationId = req.params.Id
  let specification = await Specification.findByIdAndDelete(specificationId)
  res.status(200).send()
}