const jwt = require('jsonwebtoken');

module.exports.Middleware = async(req,res,next) => {
  const token = req.cookies.jwt;

  jwt.verify(token, process.env.SECRET_KEY, (err,user)=>{
    if(err){
      res.status(401).send({message:"ACCESS DENIED"});
      return;
    }
    req.user=user;
    next();
  })
}