// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them

function oneWordOnly(words){
    let arr = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(' ') < 0){
            arr.push(words[i])
        }
    }
    return arr
    // code goes here
}

console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]
   