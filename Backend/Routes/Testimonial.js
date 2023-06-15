import express from "express"; 
import { createTestimonial, deleteTestimonial, getTestimonial, updateTestimonial, getOneTestimonial } from "../Routes-helper/Testimonial-helper.js";

const TestimonialRoute = express.Router()

TestimonialRoute.route("/").get(getTestimonial).post(createTestimonial)
TestimonialRoute.route("/:Id").patch(updateTestimonial).delete(deleteTestimonial).get(getOneTestimonial)


export default TestimonialRoute