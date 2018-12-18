var express = require('express');
var router = express.Router();

// Add controllers below
// var ctrlUser = require('../controller/user.controller.js');

router.route('/health-check').get(function(req, res) {
  res.status(200);
  res.send('Health Check');
});

// router
//   .route('/users')
//   .get(ctrlUser.usersGetAll);

module.exports = router;