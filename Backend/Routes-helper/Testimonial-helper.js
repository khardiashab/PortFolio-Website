import Testimonial from "../Models/Testimonial-schema.js";

export const getTestimonial = async(req, res) =>{
  let testimonial = await Testimonial.find({})
  res.status(200).json({
    data : testimonial
  })
}
export const createTestimonial = async(req, res) =>{
  let testimonial = await Testimonial.create(req.body)
  res.status(200).json({
    data : testimonial
  })
}
export const getOneTestimonial = async(req, res) =>{
  let testimonialId = req.params.Id
  let testimonial = await Testimonial.findById(testimonialId)
  res.status(200).json({
    data : testimonial
  })
}
export const updateTestimonial = async(req, res) =>{
  let testimonialId = req.params.Id
  let testimonial = await Testimonial.findByIdAndUpdate(testimonialId, req.body, {
    $set : true,
    "new" : true
  })
  res.status(200).json({
    data : testimonial
  })
}
export const deleteTestimonial = async(req, res) =>{
  let testimonialId = req.params.Id
  let testimonial = await Testimonial.findByIdAndDelete(testimonialId)
  res.status(200).json({
    data : testimonial
  })
}