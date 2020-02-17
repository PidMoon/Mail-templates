const fs = require('fs');
const juice = require('juice'); 
 
const source = fs.readFileSync('build/index.html', 'utf-8');
const inlinecss = juice(source, {removeStyleTags: true});
 
fs.writeFileSync("build/index.html", inlinecss);