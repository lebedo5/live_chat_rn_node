const express = require('express');
const { registerUser, loginUser, findUser, findUsers } = require('../Controllers/userController')

const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/find/:userId', findUser)
// findUsers
router.get('/', findUsers)

module.exports = router;
