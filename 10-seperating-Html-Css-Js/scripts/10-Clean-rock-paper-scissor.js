let score;
try{
        score = JSON.parse(localStorage.getItem('score')) || {win:0, lose : 0,tie :0};
    }
    catch(error){
        console.error('An error occurred:', error);
        // Set a fallback value if needed
        score = {win:0, lose:0, tie:0};
        localStorage.setItem('score',JSON.stringify(score));
    };
        
displayScore();
function game(userChoice){

    let compChoice = computerAction();
    let result ='';

    if(userChoice === compChoice){
        result = 'Tie';
    }
    else if(userChoice === 'Paper'){
        if(compChoice === 'Rock'){
            result = 'Win';
        }
        else {
            result = 'Lose';
        }
    }
    else if(userChoice === 'Rock'){
        if(compChoice === 'Scissor'){
            result = 'Win';
        }
        else {
            result = 'Lose';
        }
    }
    else if(userChoice === 'Scissor'){
        if(compChoice === 'Paper'){
            result = 'Win';
        }
        else {
            result = 'Lose';
        }
    }

    if(result === 'Win'){
        score.win +=1;
    }
    else if(result === 'Lose'){
        score.lose +=1;
    }
    else{
        score.tie +=1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-result').innerHTML = `You ${result}`;
    // document.querySelector('.js-moves').innerHTML = `You choose ${userChoice} || Computer choose ${compChoice}`;

    document.querySelector('.js-moves').innerHTML = `You 
<img src="./images/${userChoice}-emoji.png" class="move-icon">
<img src="./images/${compChoice}-emoji.png" class="move-icon">
Computer`

    displayScore();
//             alert(`You ${result}
// Win : ${score.win}
// Lose: ${score.lose}
// Tie : ${score.tie}`)

}
function computerAction(){
    const value = Math.random();
    if(value <1/3){
        return 'Rock';
    }
    else if (value >= 1/3 && value <2/3){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}

function resetScore(){
    score.win =0;
    score.lose = 0;
    score.tie = 0;
    localStorage.setItem('score',score);
    displayScore();
}

function displayScore(){
    document.querySelector('.js-score').innerHTML = `Wins : ${score.win}, Losses : ${score.lose}, Ties : ${score.tie}`;

}