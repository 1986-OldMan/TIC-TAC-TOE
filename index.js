document.querySelectorAll('.square').forEach(square => square.addEventListener('click', insertXOrY, { once: true }));

let xOrY = 'X';

function insertXOrY(index) {

    let elementClicked = index.target;
    id = elementClicked.getAttribute('id');

    console.log(id);

    elementClicked.innerHTML = xOrY;
    checkWinner()

    if (xOrY == 'X') {
        xOrY = 'O';
    } else {
        xOrY = 'X';
    }

    let gameInfo = document.querySelector('.player-turn');

    gameInfo.innerHTML = xOrY;

}


function checkWinner() {


    let squareOne = document.getElementById('s1').innerHTML;
    let squareTwo = document.getElementById('s2').innerHTML;
    let squareThree = document.getElementById('s3').innerHTML;
    let squareFour = document.getElementById('s4').innerHTML;
    let squareFive = document.getElementById('s5').innerHTML;
    let squareSix = document.getElementById('s6').innerHTML;
    let squareSeven = document.getElementById('s7').innerHTML;
    let squareEight = document.getElementById('s8').innerHTML;
    let squareNine = document.getElementById('s9').innerHTML;



    if ((squareOne == 'X') && (squareTwo == 'X') && (squareThree == 'X') || (squareOne == 'O') && (squareTwo == 'O') && (squareThree == 'O')) {
        alert('winner ' + xOrY);
    }

    if ((squareFour == 'X') && (squareFive == 'X') && (squareSix == 'X') || (squareFour == 'O') && (squareFive == 'O') && (squareSix == 'O')) {
        alert('winner ' + xOrY);
    }

    if ((squareSeven == 'X') && (squareEight == 'X') && (squareNine == 'X') || (squareSeven == 'O') && (squareEight == 'O') && (squareNine == 'O')) {
        alert('winner ' + xOrY);
    }

    if ((squareOne == 'X') && (squareFour == 'X') && (squareSeven == 'X') || (squareOne == 'O') && (squareFour == 'O') && (squareSeven == 'O')) {
        alert('winner ' + xOrY);
    }

    if ((squareTwo == 'X') && (squareFive == 'X') && (squareEight == 'X') || (squareTwo == 'O') && (squareFive == 'O') && (squareEight == 'O')) {
        alert('winner ' + xOrY);
    }

    if ((squareThree == 'X') && (squareSix == 'X') && (squareNine == 'X') || (squareThree == 'O') && (squareSix == 'O') && (squareNine == 'O')) {
        alert('winner ' + xOrY);
    }

    if ((squareOne == 'X') && (squareFive == 'X') && (squareNine == 'X') || (squareOne == 'O') && (squareFive == 'O') && (squareNine == 'O')) {
        alert('winner ' + xOrY);
    }
    if ((squareThree == 'X') && (squareFive == 'X') && (squareSeven == 'X') || (squareThree == 'O') && (squareFive == 'O') && (squareSeven == 'O')) {
        alert('winner ' + xOrY);
    }

}