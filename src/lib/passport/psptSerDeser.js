const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const psptGetInfo = require('./psptFunctions/psptGetInfo')
const psptDeserialize = require('./psptFunctions/psptDeserialize')



passport.use(new LocalStrategy(psptGetInfo.getInfo))

passport.serializeUser( (user, done) => {
  console.log(`user serialized`, user)
  done(null, user)
})


passport.deserializeUser((id, done) => {
  console.log('user deserialized')
return done(null, psptDeserialize.deserialize(id))
})