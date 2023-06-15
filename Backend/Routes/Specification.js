import express from "express"; 
import { createSpecification, deleteSpecification, getSpecification, updateSpecification, getOneSpecification } from "../Routes-helper/Specification-helper.js";

const SpecificationRoute = express.Router()

SpecificationRoute.route("/").get(getSpecification).post(createSpecification)
SpecificationRoute.route("/:Id").patch(updateSpecification).delete(deleteSpecification).get(getOneSpecification)


export default SpecificationRoute