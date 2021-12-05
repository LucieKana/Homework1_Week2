//Write a program to find how many letters, numbers, and special characters are in a user entered string.
let prompt= require('prompt-sync')()
 // requesting a user input
userInput = prompt('Enter an input: ')
// initializing
letter = 0;
numbers = 0;
specharc = 0;
for(let i = 0; i<userInput.length; i++)
{
    if((userInput.charCodeAt(i)>=65 && userInput.charCodeAt(i)<=90) || (userInput.charCodeAt(i)>=97 && userInput.charCodeAt(i)<=122))
    
        letter++
    else if(userInput.charCodeAt(i)>=47 && userInput.charCodeAt(i)<=57)
         numbers++
    else
     specharc++
     
}
console.log("The number of letter is " + letter)
console.log("The number of number is "+ numbers)
console.log("The number of special characters is "+ specharc)
   
        