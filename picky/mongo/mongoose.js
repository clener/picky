var mongoose = require('mongoose');

var disconnectDB = function(){
  mongoose.disconnect();
  console.log("disconnected");
  return;
};

var connectMongoDB = function(url){
  mongoose.connect(url);
  var db = mongoose.connection;
  return new Promise(function(resolve, reject) {
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("connected");
      resolve(db);
   });
 });
};

module.exports = {
  disconnectDB: disconnectDB,
  connectMongoDB: connectMongoDB
};
  