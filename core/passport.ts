import passport from 'passport'
import {createHash} from 'crypto'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import {Strategy as JWTStrategy, StrategyOptions} from 'passport-jwt'
import {Strategy as LocalStrategy} from 'passport-local'
import {ExtractJwt} from 'passport-jwt'
import TodosModel from '../models/Todos'
import User, {IDocumentUser, IUser} from '../models/User'

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
      const data = {
        tasks: [],
        columns: [],
        owner: user._id
      }
      await TodosModel.create(data)
      return cb(undefined, user)
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
    const user = await User.findById(userPayload._id)
    if (!user) {
      return done(null, false)
    }
    return done(null, user)
  } catch (error) {return done(error, false)}
}))

passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},
  async (email, password, done) => {
    try {
      const user = await User.findOne({email})
      if (!user) {
        return done(null, false, {message: 'wrong email'})
      }
      if (user.password === createHash('md5').update(password + process.env.SECRET_KEY).digest('hex')) {
        return done(null, user)
      }
      return done(null, false, {message: 'wrong password'})
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
