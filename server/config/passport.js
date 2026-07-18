const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      passReqToCallback: true, // gives you `req` in the callback
    },
    (req, accessToken, refreshToken, profile, cb) => {

      const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;

      if (!email) {
        return cb(new Error("No email found in Google profile"));
      }

      return cb(null, {
        email,
        googleId: profile.id,
        flow: req.query.state,
        fullName: profile.displayName,
      });
    }
  )
);