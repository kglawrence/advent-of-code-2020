const fs = require('fs');

function getInput() {
    const file = process.argv[2];
    console.log(file);
    
    return fs.readFileSync(file, 'utf8');
}

module.exports = {getInput};