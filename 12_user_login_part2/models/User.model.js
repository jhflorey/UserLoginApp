var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var minlength = [3,
'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).'
];

var requiredStringValidator = [
  function(val) {
    var testVal = val.trim();
    return (testVal.length > 0)
  },
  '{PATH} cannot be empty'
];

var UserSchema = new Schema({
  username: {
    type: String,
    minlength: minlength,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);