var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/picky-db');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const userSchema = mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// an example
db.once('open', function() {
  const Kyle = new User({
    username: "Kyle",
    password: "secret"
  });

  Kyle.save(function(err, Kyle) {
    if (err) return console.error(err);
  });
  
});



