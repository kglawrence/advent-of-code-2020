const utils = require('../utils.js');

//common variables
const input = utils.getInput();
const entries = input.split('\n').map(value => parseInt(value));

//solution to part 1
const matchedEntries = entries.filter(value => {
    return entries.includes(2020 - value);
});
console.log(`The product of the matched entries on the expense report is ${matchedEntries[0] * matchedEntries[1]}`);

//solution to part 2
const sumMissing = entries.map(value => 2020 - value);
let matchedTriple = [];
for (let i = 0; i < sumMissing.length; i++) {
    matchedTriple = entries.filter(value => {
        return entries.includes(sumMissing[i] - value);
    });
    if (matchedTriple.length > 0) {
        console.log(`The product of the three matched entries on the expense report is ${matchedTriple[0] * matchedTriple[1] * entries[i]}`);
        break;
    }
}


