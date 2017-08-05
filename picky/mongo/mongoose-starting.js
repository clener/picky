var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const userSchema = mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// an example
const Kyle = new User({username: "Kyle", password: "secret"});



