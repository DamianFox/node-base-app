var mongoose = require('mongoose');

// Example
// var User = mongoose.model('User');


// module.exports.usersGetAll = function(req, res) {

//   console.log('GET the users');
//   console.log(req.query);

//   User
//     .find()
//     .exec(function(err, users) {
//       console.log(err);
//       if (err) {
//         console.log("Error finding users");
//         res
//           .status(500)
//           .json(err);
//       } else {
//         console.log("Found users", users.length);
//         res
//           .json(users);
//       }
//     });
// };