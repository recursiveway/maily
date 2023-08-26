const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const userSchema = require('../models/User')

passport.serializeUser((user, cb) => {
    cb(null, user.id)

});


passport.deserializeUser(async (id, cb) => {
    const user = await userSchema.findById(id)
    cb(null, user)

});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        const previousUser = await userSchema.findOne({ googleId: profile.id })
        if (previousUser) {
            cb(null, previousUser)

        } else {
            const newUser = await new userSchema({ googleId: profile.id })
            await newUser.save()
            cb(null, newUser)

        }
    }
));
