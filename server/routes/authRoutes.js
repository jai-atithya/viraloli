const express = require('express')
const authController = require('../controllers/authController')
const router=express.Router();
const passport = require('passport');


router.post('/signup', authController.signup);
router.post('/login', authController.login);
// router.post('/refresh-token', authController.refreshToken);
// router.post('/logout', authController.logout);

// router.get('/google', (req, res, next) => passport.authenticate('google', { scope: ['profile', 'email'],prompt: 'select_account', session: false, state: req.query.flow })(req, res, next));
// router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect:  `${process.env.FRONTEND_URL}/signup?error=GOOGLE_AUTH_FAILED` }), authController.googleCallback);
// router.post('/google/verify', authController.verifyTempGoogleToken);

module.exports = router;