//Write a program to find how many times a user entered word occurs in given string
let prompt= require('prompt-sync')()

//requesting a user input
userInput = prompt("Enter an input: ")
//split the above string into an array of strings whenever a blank space is encountered , 
//initialiazing my counter and declaring the string that i will be looking for
let text = userInput.split(" ");
let counter=0;
let word = "portal";
for(let i = 0; i<text.length; i++)
{    
    if(word == text[i])
    {
        counter++;
    }
    
}
console.log(counter)  
     


