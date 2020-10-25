import passport from "passport";
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import {Strategy as JWTStrategy, StrategyOptions} from 'passport-jwt'
import {ExtractJwt} from 'passport-jwt'
import User, { IUser } from "../models/User";
import {createHash} from "crypto";

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async function (accessToken, refreshToken, profile, cb) {
  try {
    const user = await User.findOne({ googleId: profile.id })
    if (!user) {
      const user = await User.create({
        email: profile.emails![0].value,
        username: profile.displayName,
        googleId: profile.id,
        confirmHash: createHash('md5').update(profile.emails![0].value + process.env.SECRET_KEY).digest('hex'),
      })
      await user.save()
    }
    return cb(undefined, user)
  } catch (error) {return cb(error, null)}
}))


const jwtOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY || 'SECRET_KEY'
}

passport.use(new JWTStrategy(jwtOptions, async ({data: userPayload}, done) => {
  try {
    console.log(userPayload)
    const user = await User.findById(userPayload._id)
    console.log(user)
    if (!user) {
      return done(null, false)
    }
    return done(null, user)
  } catch (error) {return done(error, false)}
}))


passport.serializeUser(function(user: IUser, done) {
  done(null, user._id);
});


passport.deserializeUser(function(id, done) {
  User.findById(id, function(err,user){
    err
      ? done(err)
      : done(null,user);
  });
});


export { passport }
