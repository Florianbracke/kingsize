const express = require('express');

const { body } = require('express-validator');

//allows to make request from other location
const router = express.Router()

const USer = require('../model/user');

//perhaps change path if needed for sign up
router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty(),
        
        body('email').isEmail().withMessage('Please enter a valid email.').custom( async (email) => {                    // to see if email is not duplicate
            const user = await User.find(email); 
            if (user[0].length > 0) {
                return Promise.reject('This email address is already in use.')
            }
        })
        
        .normalizeEmail(),
        
        body('password').trim().isLength({min: 6 })
    ], authController.signup
);

module.exports = router;