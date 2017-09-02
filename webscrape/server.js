var request = require('request');
var cheerio = require('cheerio');

request('https://www.grocerygateway.com/store/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(html);

    var className = '.link-page';
    $(className).each(function(i, el) {
        var name = $(this).text().trim().replace(/(\r\n|\n|\r)/gm,"");
        var category = $(this).prev('.link-category visible-md visible-lg').text();

        var data = {
            category : category,
            name : name
        }
        console.log(data);
    });
  }
});