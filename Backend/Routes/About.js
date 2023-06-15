import express from "express"; 
import { createAbout, deleteAbout, getAbout, updateAbout, getOneAbout } from "../Routes-helper/About-helper.js";

const AboutRoute = express.Router()

AboutRoute.route("/").get(getAbout).post(createAbout)
AboutRoute.route("/:Id").patch(updateAbout).delete(deleteAbout).get(getOneAbout)


export default AboutRoute

