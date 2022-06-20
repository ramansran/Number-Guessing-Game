

// Settiing up constants and variables to store our data

let randomNumber = Math.floor(Math.random() * 100)+1;

const guessField = document.querySelector('.guessField');
const PreviousGuessField = document.querySelector('.PreviousGuessField');
const ResultMessage = document.querySelector('.ResultMessage');
const Hint = document.querySelector('.Hint');
const SubmitButton = document.getElementById("guessSubmit");

let count = 1;
let resetButton;


// main function 

function mainGame(){
    let yourNumber = Number(guessField.value);
    PreviousGuessField.textContent += yourNumber + ' ';

    if(yourNumber===randomNumber && count<10){
        ResultMessage.textContent = 'you got it right';
        ResultMessage.style.backgroundColor ='green';
        gameOver();
    }
    else if(yourNumber < randomNumber && count<10){   
        ResultMessage.textContent = 'Wrong!';
        ResultMessage.style.backgroundColor ='red';
        Hint.textContent = 'last guess was low';
    }
    else if(yourNumber > randomNumber && count<10){
        ResultMessage.textContent = 'Wrong!';
        ResultMessage.style.backgroundColor ='red';
        Hint.textContent = 'last guess was high';
    }
    else{
        ResultMessage.textContent = 'chances are over'
        ResultMessage.style.backgroundColor ='red';
        Hint.textContent = ' ';
        gameOver();
    }

    count++;
    guessField.value = '';
    guessField.focus();
    
}

// gameOver function to run in case of chances are over on the right guess

function gameOver(){
   Hint.textContent = '';
    guessField.disabled = true;
    SubmitButton.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// reset function to reset the game 
function resetGame(){
    count = 1;
    const Params= document.querySelectorAll('.Paras p');
    for (const Param of Params ){
        Param.textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      SubmitButton.disabled = false;

      guessField.textContent = '';
      guessField.focus();

      ResultMessage.style.backgroundColor= 'white';


randomNumber = Math.floor(Math.random() * 100)+1;
}


SubmitButton.addEventListener('click',mainGame);