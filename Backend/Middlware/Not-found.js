export const NotFound = (req, res)=>{
  res.status(404).json("This route is not defined for this url.")
}