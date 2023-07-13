// Illustration on a task that uses sync 

const { log } = require('console')
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Creates a file and adds the content from the files above inside the result sync file. 
writeFileSync('./content/result-sync.txt',
    `Here is the result ${first}, ${second},`,
    { flag: 'a' }
)
// We are overwriting everything and the flag creates a new value.

console.log('Done with this task');
console.log('Starting the next one');