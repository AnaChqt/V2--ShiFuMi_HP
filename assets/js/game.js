let player;
let ia;
let resultat = '';
let playerScore = 0;
let iaScore = 0;
let countRound = 0
let playerChoice = document.querySelectorAll('.player');
let iaChoice = document.querySelectorAll('.ia');
let btn = document.querySelectorAll('button');
let playerScoreBox = document.querySelectorAll('playerScoreBox')
let iaScoreBox = document.querySelectorAll('iaScoreBox')

for (let i = 0; i < btn.length; i++) {
    playerChoice[i].addEventListener('click', () => {
        player = btn[i].innerHTML;
        ia = Math.floor(Math.random() * 3);
        let iaPicture = btn[ia].innerHTML;
        if (i == ia) {
            resultat = 'Egalité';
        }
        else if
                ((i == 0 && ia == 1) ||
                (i == 1 && ia == 2) ||
                (i == 2 && ia == 0)) {
                resultat = 'Défaite...';
                iaScore++;
        }
        else {
            resultat = 'Victoire !';
            playerScore++;
        }
        document.getElementById('result_player').innerHTML = `${player}`
        document.getElementById('result_sentance').innerHTML = `${resultat}`
        document.getElementById('result_ia').innerHTML = `${iaPicture}`
        document.getElementById('playerScoreBox').innerHTML = playerScore
        document.getElementById('iaScoreBox').innerHTML = iaScore
    })
}