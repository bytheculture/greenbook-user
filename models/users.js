const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
  username: String,
  emailAddress: String,
  profilePhoto: String,
  favorites: [{ businessID: String, freelancerID: String }],
  phoneNumber: String,
  events: String,
});
module.exports = mongoose.model('Users', UsersSchema);
