const utils = require('../utils.js');

const input = utils.getInput();
const forest = input.split('\n').map(row => row.split(''));

function treesAtSlope(x, y) {
    let filteredForest = forest;
    if (y !== 1) {
        filteredForest = forest.filter((row, index) => index % y === 0);
    }
    return filteredForest.reduce((acc, row, index) => {
        const position = (index * x) % row.length ;
        if (row[position] === '#') {
            acc++;
        } 
        return acc;
    }, 0);
}

//solution to part 1
console.log(`The number of trees incountered would be ${treesAtSlope(3, 1)}`);

//solution to part 2
const testSlopes= [[1,1],[3,1],[5,1],[7,1],[1,2]];
const trees = testSlopes.map(slope => {
    return treesAtSlope(slope[0], slope[1]);
});
console.log(`The product of the trees encountered across multiple slopes is ${trees.reduce((acc, val) => acc ? acc * val : val)}`);

