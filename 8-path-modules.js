// Getting the path seperator " / "
const path = require('path');
console.log(path.sep);

// Method that joins the specified path segments into one path. 
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

// Method that returns the last portion of a path, in this case test.txt
const base = path.basename(filePath)
console.log(base);

// The resolve method shows the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);