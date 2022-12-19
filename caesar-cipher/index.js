var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
let letters = "abcdefghijklmnopqrstuvwxyz"
let adjLetters = ""
adjust(shift)
console.log("Your encoded results: " + encode(input))
function adjust(num){
    for (let i = 0; i < letters.length; i++){
		let offset = (i + num) % letters.length;
        adjLetters += letters[offset];
	}
}

function encode(message){
    let result = "";
    
    for (let i = 0; i < message.length; i++){
        let index = letters.indexOf(message[i]);
        result += adjLetters[index];
    }
    return result;
}