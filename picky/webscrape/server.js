const request = require('request');
const cors = require('cors');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(cors())

mongoose.Promise = require('bluebird');
var promise = mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true,
  /* other options */
});
promise.then(function (db) {
  /* Use `db`, for instance `db.model()`
});
// Or, if you already have a connection
connection.openUri('mongodb://localhost/myapp', { /* options */
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', function () {
  // we're connected!
});

var productSchema = mongoose.Schema({
  name: String
});

var ProductModel = mongoose.model('Product', productSchema);

// removing previous entries from the model
ProductModel.remove(true, function (err) {
  if (err) return handleError(err);
});

request('https://www.grocerygateway.com/store/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(html);

    var className = '.link-page';
    $(className).each(function (i, el) {
      var name = $(this).text().trim().replace(/(\r\n|\n|\r)/gm, "");
      // for now we won't be supporting a category as it returns an empty string
      var category = $(this).prev('.link-category visible-md visible-lg').text();

      var Product = new ProductModel({
        name: name
      });

      Product.save(function (err, Product) {
        if (err) return console.error(err);
      }).then();

    });
  }
});

// how to find all products (in this case all of them)
ProductModel.find(function (err, products) {
  if (err) return console.error(err);
  console.log("hey")

  app.get('/', function (req, res) {
    console.log("hey")
    res.send(products)
  })
})

app.listen(3100, function () {
  console.log('Example app listening on port 3100!')
})