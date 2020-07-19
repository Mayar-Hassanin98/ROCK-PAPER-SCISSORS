
    let computerscore=0;
    let playerscore=0;
    let Rounds=0;

        function computerPlay(){
            let choice=Math.random();
                if(0<=choice<0.33){
                    choice='scissors';}
                else if(0.33<choice<0.66){
                    choice='paper';}
                else{
                    choice='rock';}

                return choice;
            }
        
       
    
        function playRound(playerSelection, computerSelection) {
               Rounds++;
               const select=document.querySelector('#selection')
               const result=document.querySelector('#result')
               const round=document.querySelector('#round') 
               select.textContent=`Player:${playerSelection}  Cpu:${computerSelection}`;
               const winner=document.querySelector('#winner');
               winner.textContent=" ";
               if (Rounds<6){
                
                if( playerSelection=='rock'&& computerSelection=='rock' || playerSelection=='paper'&& computerSelection=='paper' || playerSelection=='scissors'&& computerSelection=='scissors'){
                    result.textContent= 'A draw';
                                }
                if( playerSelection=='rock' && computerSelection=='paper'  ){
                    computerscore++;
                    result.textContent='lose! paper beats rock';
                    }  
                
                if (playerSelection=='paper' && computerSelection=='rock' ){ 
                  playerscore++;
                  result.textContent= 'won! paper beats rock';
                  }

                
                if( playerSelection=='rock' && computerSelection=='scissors' ){
                    playerscore++;
                    result.textContent='won! rock beats scissors';
                    }  
                
                if (playerSelection=='scissors' && computerSelection=='rock' ){ 
                    computerscore++;
                    result.textContent= 'lose! rock beats scissors';
                  }
            
                if(playerSelection=='scissors'&& computerSelection=='paper'){
                    playerscore++;
                    result.textContent='won! scissors beats paper';
                  }
                
                if(playerSelection=='paper'&& computerSelection=='scissors'){
                    computerscore++;
                   result.textContent= 'lose! scissors beats paper';
                  }
      
                }
 
              if(Rounds==5){
                const winner=document.querySelector('#winner');
                if(playerscore > computerscore){
                   winner.textContent="Winner Winner Chicken Dinner!";
                }
    
                else if(playerscore < computerscore){
                    winner.textContent="You Lose :("
                }
    
                else{
                    winner.textContent="Oucch A Draw Match!"
                }
                
              }
              round.textContent=`Round:${Rounds} playerscore:${playerscore} computerscore:${computerscore}`;

    }



    const buttons = document.querySelectorAll('.choice_btn');


    buttons.forEach((b) => {
        b.addEventListener('click', (a) => {
    
            if (Rounds < 5) {
                playRound(b.id, computerPlay());
            } else {
                Rounds= 0;
                playerscore = 0;
                computerscore = 0;
                playRound(b.id, computerPlay());
            }
         });
    });
