import express from "express"; 
import { createSkills, deleteSkills, getSkills, updateSkills, getOneSkills } from "../Routes-helper/Skills-helper.js";

const SkillsRoute = express.Router()

SkillsRoute.route("/").get(getSkills).post(createSkills)
SkillsRoute.route("/:Id").patch(updateSkills).delete(deleteSkills).get(getOneSkills)


export default SkillsRoute