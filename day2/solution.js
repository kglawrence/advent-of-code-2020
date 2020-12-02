const utils = require('../utils.js');

//common 
const input = utils.getInput().split('\n');

function parseInput(policyPassword) {
    const val = policyPassword.split(' ');
    const frequencey = val[0].split('-');
    const character = val[1][0];
    const password = val[2];
    return {
        frequencey,
        character,
        password
    }
}

//solution to part 1
const validPasswords = input.reduce((acc, value) => {
    const pwdObj = parseInput(value);
    const regex = new RegExp(pwdObj.character, 'g');
    const charOccurance = pwdObj.password.match(regex);
    const freq = charOccurance ? charOccurance.length : 0;
    if (freq >= pwdObj.frequencey[0] && freq <= pwdObj.frequencey[1]) {
        acc++;
    }
    return acc;
},0);
console.log(`The number of valid passwords is when looking at frequency ${validPasswords}`);

//solution to part 2
const validPasswordsChar = input.reduce((acc, value) => {
    const pwdObj = parseInput(value);
    let counter = 0;
    if (pwdObj.password[pwdObj.frequencey[0] - 1] === pwdObj.character) {counter++};
    if (pwdObj.password[pwdObj.frequencey[1]-1] === pwdObj.character) {counter++};
    if (counter === 1) {
        acc++;
    }
    return acc;
},0);
console.log(`The number of valid passwords is when looking at character placement ${validPasswordsChar}`);