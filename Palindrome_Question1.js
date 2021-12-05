//Check wheter a string is a palindrome.
let prompt= require('prompt-sync')()
//requesting a user input
userInput = prompt('Enter a string: ')
let reserve ="" ;
let i=userInput.length-1;
while(i>=0)
{
    reserve+=userInput.charAt(i)
    console.log(reserve)
    i--
}
if(reserve==userInput)
{
    console.log(userInput + " is a palindrome")
}
else{
    console.log(userInput + " is not palindrome")
}

