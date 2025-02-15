const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Registro de un nuevo usuario y login
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
