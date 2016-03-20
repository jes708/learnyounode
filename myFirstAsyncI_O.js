var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  var newLines = data.match(/\n/g).length;
  console.log(newLines);
});