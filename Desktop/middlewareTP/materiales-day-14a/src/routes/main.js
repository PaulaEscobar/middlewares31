const express = require('express');
const router = express.Router();
// const userLogs  = require('../middlewares/userLogs');
const mainConrtroller = require('../controllers/mainController')

router.get('/', mainConrtroller.index)



module.exports = router;