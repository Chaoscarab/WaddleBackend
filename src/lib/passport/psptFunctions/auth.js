function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()) { return next() }
    res.json({type: "error", error: 'Client Not Authenticated'})
  }

module.exports = {checkAuthenticated}