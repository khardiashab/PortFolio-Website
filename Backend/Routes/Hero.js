import express from "express"; 
import { createHero, deleteHero, getHero, updateHero, getOneHero } from "../Routes-helper/Hero-helper.js";

const HeroRoute = express.Router()

HeroRoute.route("/").get(getHero).post(createHero)
HeroRoute.route("/:Id").patch(updateHero).delete(deleteHero).get(getOneHero)


export default HeroRoute

