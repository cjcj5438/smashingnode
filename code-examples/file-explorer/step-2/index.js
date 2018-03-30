
/**
 * Module dependencies.
 */

//var fs = require('fs');
// fs.readdir(__dirname, function (err, files) {
//   console.log(files);
// });

function async(err, files) {
    console.log(files)
}
require('fs').readdir('.',async)