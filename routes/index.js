const express = require("express");
const router = express.Router();
console.log("Router Loaded");
const homeController = require('../controllers/home_controller');

router.use('/', homeController.home);
//router.use('/admin', adminController.home);


//router.use('/admin', adminController);
// router.get('/' , (req, res) => {
//     res.status(200).json({
//     message : "Welcome To Home Page"
//     })
// });


// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;