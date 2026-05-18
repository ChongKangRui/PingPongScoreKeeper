
const p1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: document.querySelector('#p1s')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: document.querySelector('#p2s')
}




// const p1Btn = document.querySelector('#p1btn');
// const p2Btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#resetBtn');

// const p1Display = document.querySelector('#p1s');
// const p2Display = document.querySelector('#p2s');

const winScoreSelection = document.querySelector('#winningScoreSelection');




let p1score = 0;
let p2score = 0;

let allowMinWinningScore = 5;
let allowMaxWinningScore = 10;

let winningScore = allowMinWinningScore;



function updateScore(player, opponent) {
    player.score += 1;
    player.display.innerText = player.score;

    if (player.score === winningScore) {
        disableScoringBtn();
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
    }
}

// Initialize the max score allow
for (let i = allowMinWinningScore; i <= allowMaxWinningScore; i++) {
    let newOption = document.createElement('option');
    newOption.value = i;
    newOption.textContent = i;

    winScoreSelection.append(newOption);
}

// get the max winning score
winScoreSelection.addEventListener('change', function () {
    let selectedValue = this.value;
    let selectedText = this.options[this.selectedIndex].text;

    resetScore();

    console.log(`Selected value: ${selectedValue}`);
    console.log(`Selected text: ${selectedText}`);

    winningScore = parseInt(selectedValue);
});

// Add for player 1 score
p1.button.addEventListener('click', function () {
    console.log('player 1 add score');
    // p1score += 1;
    // p1Display.innerText = p1score;

    // if (p1score === winningScore) {
    //     disableScoringBtn();
    //     p1Display.classList.add('winner');
    //     p2Display.classList.add('loser');
    // }
    updateScore(p1, p2);
});

// Add for player 2 score
p2.button.addEventListener('click', function () {
    // console.log('player 2 add score');
    // p2score += 1;
    // p2Display.innerText = p2score;

    // if (p2score === winningScore) {
    //     disableScoringBtn();
    //     p2Display.classList.add('winner');
    //     p1Display.classList.add('loser');
    // }
    updateScore(p2, p1);
});

// reset the scoring
resetBtn.addEventListener('click', function () {
    console.log('resetBtn click');

    resetScore();
});

function resetScore() {
    p1.score = 0;
    p1.display.innerText = p1score;

    p2.score = 0;
    p2.display.innerText = p2score;

    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('winner', 'loser');

    resetScoringBtn();
}

// Buttons disable or reset function
function disableScoringBtn() {
    p1.button.disabled = true;
    p2.button.disabled = true;
}

function resetScoringBtn() {
    p1.button.disabled = false;
    p2.button.disabled = false;
}