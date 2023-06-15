import express from "express"; 
import { createProject, deleteProject, getProject, updateProject, getOneProject } from "../Routes-helper/Project-helper.js";

const ProjectRoute = express.Router()

ProjectRoute.route("/").get(getProject).post(createProject)
ProjectRoute.route("/:Id").patch(updateProject).delete(deleteProject).get(getOneProject)


export default ProjectRoute