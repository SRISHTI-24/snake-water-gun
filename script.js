const choices = document.querySelectorAll('.choice')
const restartt = document.querySelector('#restart')
const score = document.querySelector('#score')
const results = document.querySelector('#result')
const modal = document.querySelector('.modal')
const scoreboard = {
    player: 0,
    computer: 0
};
choices.forEach(choice => choice.addEventListener('click', playgame))

function playgame(e)
{
    const playerchoice = e.target.id
    const computerchoice = getcomputerchoice();
    let winner = getwinner(playerchoice,computerchoice)
    showwinner(winner, computerchoice)

}
function getcomputerchoice(){
    const cc = Math.random()*100;
    if(cc < 33)
        return 'snake'
    else if(cc>=33 && cc<=66)
        return 'water'
    else
        return 'gun'
}
function getwinner(p,c)
{
    if(p==c)
        return 'draw'
    if(p=='snake')
    {
        if(c=='water')
            return 'player'
        else
            return 'computer'
    }
    else if(p=='water')
    {
        if(c=='snake')
            return 'computer'
        else
            return 'player'
    }
    else{
        if(c=='snake')
            return 'player'
        else 
            return 'computer'
    }
}
function showwinner(w,c)
{
    if(w=='player')
    {
        scoreboard.player++;
        results.innerHTML = `
        <h1 class="text-win">You win!!</h1>
        `
    }
    else{
        scoreboard.computer++;
        results.innerHTML = `
        <h1 class="text-lose">You lose !!!</h1>
        `
    }
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `
    modal.style.display='block'
}
restartt.addEventListener('click', restartgame)
function restartgame()
{
    scoreboard.player=0
    scoreboard.computer=0
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `
}
