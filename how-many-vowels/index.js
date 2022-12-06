const readline = require('readline-sync');
let word = readline.question('What word would you like to check? ');

function countVowels(str){
const count = str.match(/[aeiou]/gi).length
return count
}

const result = countVowels(word)



console.log(result + " vowels in the word " + word)


var num = 6
if (num === "6"){
    console.log("Yay!");
}else{
    console.log("Oh no!");
}


function calculator(num1, op, num2) {
    // code here
 }
 
 console.log(calculator(2, "+", 2)) // ➞ 4
 
 console.log(calculator(2, "*", 2)) // ➞ 4
 
 console.log(calculator(4, "/", 2)) // ➞ 2
 
 console.log(calculator(2, "/", 0)) // ➞ "Can't divide by 0!"
 
 console.log(calculator(2, '-', 2)) // ➞ 0