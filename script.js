// Pig Game in JavaScript
// Mohamad Hossein Bozorgi Projects
// I hope You ENJOY!!!


var scores, roundScore, activePlayer, gamePlaying, preDice;


var record = document.getElementById('winScore').value = 100;


function init() {
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    preDice = 0;
    
    document.querySelector('.dice').style.display = 'none';
    

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
}

init();


function final() {
    
    record = document.getElementById('winScore').value;
    init ();
}

final();


//dice = Math.floor(Math.random() *6) + 1;
//document.querySelector('#current-' + activePlayer).textContent = dice;




document.querySelector('.btn-roll').addEventListener('click', function(){
    
    
   if(gamePlaying) {
       
       
    var dice = Math.floor(Math.random() * 6) + 1;   
        
    
   
    var diceDom = document.querySelector('.dice');
    
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
       
    if (preDice === 6 && dice === 6) {
             
             scores[activePlayer] = 0;
             document.querySelector('#score-' + activePlayer).textContent = '0';
             nextPlayer();
            
    }
     else if (dice !== 1){
        
         preDice = dice;
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
       
        
      } else {
          
         nextPlayer();
      }
      
    
        preDice = dice
 }
 
 
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    
    
    if(gamePlaying) {
        
    
    scores[activePlayer] += roundScore; 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    if (scores[activePlayer] >= record ) {
        
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         //document.querySelector('.player-' + activePlayer + '-panel').classList.add('emoji');
         gamePlaying = false;
      }
    else {
        nextPlayer();
      }
        
    }
    
    
});





document.querySelector('.btn-record').addEventListener('click', final);

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
    
       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       roundScore = 0;
       
       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';
       
       
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
       
       
       document.querySelector('.dice').style.display = 'none';
}
