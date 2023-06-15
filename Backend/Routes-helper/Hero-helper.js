import Hero from "../Models/Hero-schema.js";

export const getHero = async(req, res) =>{
  let hero = await Hero.find({})
  res.status(200).json(
    hero
  )
}
export const createHero = async(req, res) =>{
  let hero = await Hero.create(req.body)
  res.status(200).json({
    hero
  })
}
export const getOneHero = async(req, res) =>{
  let heroId = req.params.Id
  let hero = await Hero.findById(heroId)
  res.status(200).json({
     hero
  })
}
export const updateHero = async(req, res) =>{
  let heroId = req.params.Id
  let hero = await Hero.findByIdAndUpdate(heroId, req.body, {
    $set : true,
    "new" : true
  })
  res.status(200).json({
    hero
  })
}
export const deleteHero = async(req, res) =>{
  let heroId = req.params.Id
  let hero = await Hero.findByIdAndDelete(heroId)
  res.status(200).json({
    hero
  })
}