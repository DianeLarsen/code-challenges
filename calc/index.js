function calculator(num1, op, num2) {
    // code here
    switch(op){
        case '+':
            return num1+num2
         
        case '-':
            return num1-num2
        case '*':
            return num1*num2   
        case '/':
            if (num2 === 0){
                return ("Can't divide by 0!");
                
            }else{
                return num1/num2
            }
            
        default:
            console.log('Something went wrong :(');
            break     
    }
 }
 
 console.log(calculator(2, "+", 2)) // ➞ 4
 
 console.log(calculator(2, "*", 2)) // ➞ 4
 
 console.log(calculator(4, "/", 2)) // ➞ 2
 
 console.log(calculator(2, "/", 0)) // ➞ "Can't divide by 0!"
 
 console.log(calculator(2, '-', 2)) // ➞ 0