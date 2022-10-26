const readline = require('readline-sync');
let word = readline.question('What word would you like to check? ');

function countVowels(str){
const count = str.match(/[aeiou]/gi).length
return count
}

const result = countVowels(word)



console.log(result + " vowels in the word " + word)



