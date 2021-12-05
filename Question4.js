// Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, display a message 'Invalid Option' and end the program.
let prompt= require('prompt-sync')()
// defining my menu base on operators(+, *, -, or /)
let menu = Number(prompt("choose a number between 1 and 5: "))
// requesting a user input
let userInput = Number(prompt('enter a number: '))

switch(menu)
{
    case 1 :{
            userInput += 2;
            console.log(userInput);
        break;
    }
   case 2 :{    
        userInput -= 2;
        console.log(userInput);
      break;
   }    
    case 3 :{  
            userInput *=2;
            console.log(userInput); 
         
        break;
    } 
    case 4 :{
            userInput /=2;
            console.log(userInput);
        break;
    }
    case 5 :{
            console.log('Exit');    
        break;
    }      
default:
    console.log("You choose a wrong number, Please choose a number between 1 and 5")
}