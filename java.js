let i=0
let human=''
let computerPicks= ['rock','paper','scissors']
let humanScore=0
let computerScore=0
let humanWins=0
let computerWins=0

document.getElementById('rock').addEventListener('click', rockClick);
 function rockClick(){ 
   human='rock'
   theGame()
                   }
document.getElementById('paper').addEventListener('click', paperClick);
  function paperClick(){ 
    human='paper'
    theGame()
}
document.getElementById('scissors').addEventListener('click', scissorsClick);
  function scissorsClick(){
    human='scissors'
    theGame()
}

function theGame(){
  do{
  let computer=computerPicks[Math.floor(Math.random()*computerPicks.length)];
  if (human===computer){
    document.getElementById('winner').innerHTML="Tie";}
  else if (human==='rock' && computer==='paper'){
    console.log('you lose, paper beats rock');
    computerScore=computerScore+1;
  }
  else if (human==='paper' && computer==='scissors'){
    document.getElementById('winner').innerHTML='you lose, scissors beats paper'
    computerScore=computerScore+1;
  }
  else if (human==='scissors'&& computer==='rock'){
   document.getElementById('winner').innerHTML='you lose rock beats scissors'
    computerScore=computerScore+1;
  }
  else if (human==='rock'&& computer==='scissors'){
    document.getElementById('winner').innerHTML='you win, rock beats scissors';
    humanScore=humanScore+1;
  }
  else if (human==='paper'&& computer==='rock'){
   document.getElementById('winner').innerHTML='you win, paper beats rock';
    humanScore=humanScore+1;
  }
  else if (human==='scissors'&& computer==='paper'){
    document.getElementById('winner').innerHTML='you win, scissors beats paper';
    humanScore=humanScore+1;
  }
   
  if(humanScore>=5){
  document.getElementById('winner').innerHTML='YOU WIN THIS ROUND!';
     humanScore=0
 computerScore=0
    humanWins=humanWins+1
 
}
  if(computerScore>=5){
  document.getElementById('winner').innerHTML='The Computer Overloard has won this round....';
     humanScore=0
computerScore=0
    computerWins=computerWins+1
}  
    
document.getElementById('humansScore').innerHTML='Your Score:'+humanScore;
document.getElementById('computersScore').innerHTML='Computers Score:'+computerScore;
document.getElementById('humanRoundsWon').innerHTML='Rounds Won:'+humanWins;
document.getElementById('computerRoundsWon').innerHTML='Rounds Lost:'+computerWins;
  i++;
  }while('')}
 


