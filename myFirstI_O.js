var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var newLines = str.match(/\n/g).length;

console.log(newLines);