let settingsOpen = false;

function toggleSettingsTab() {
    const mainTab = document.getElementById('main-tab');
    const settingsTab = document.getElementById('settings-tab');
    const settingsButton = document.getElementById('settings-icon-img');

    if (!settingsOpen) {
        mainTab.classList.add('hidden');
        settingsTab.classList.remove('hidden');
        settingsButton.src = 'https://img.icons8.com/ios-filled/50/ffffff/back.png';
    } else {
        mainTab.classList.remove('hidden');
        settingsTab.classList.add('hidden');
        settingsButton.src = 'https://img.icons8.com/ios-filled/50/ffffff/settings.png';
    }

    settingsOpen = !settingsOpen;
}

function showMainTab() {
    const mainTab = document.getElementById('main-tab');
    const settingsTab = document.getElementById('settings-tab');
    const settingsButton = document.getElementById('settings-icon-img');

    mainTab.classList.remove('hidden');
    settingsTab.classList.add('hidden');
    settingsButton.src = 'https://img.icons8.com/ios-filled/50/ffffff/settings.png';

    settingsOpen = false;
}

function setBaseLifePoints(lp) {
    document.getElementById('player1-lifepoints').innerText = lp;
    document.getElementById('player2-lifepoints').innerText = lp;
}

function changeLifePoints(player) {
    const changeInput = document.getElementById(`${player}-change`);
    const changeValue = parseInt(changeInput.value);
    const lifePointsElement = document.getElementById(`${player}-lifepoints`);
    let currentLifePoints = parseInt(lifePointsElement.innerText);

    currentLifePoints -= changeValue;
    if (currentLifePoints < 0) currentLifePoints = 0;

    lifePointsElement.innerText = currentLifePoints;

    if (currentLifePoints <= 0) {
        declareWinner(player === 'player1' ? 'player2' : 'player1');
    }
}

function declareWinner(winner) {
    const winnerName = document.getElementById(`${winner}-name`).value;
    const winnerElement = document.getElementById('winner');
    winnerElement.innerText = `${winnerName} ha vinto!`;
}

function undoLastAction() {
    // Logica per annullare l'ultima azione
}

function resetLifePoints() {
    document.getElementById('player1-lifepoints').innerText = 7000;
    document.getElementById('player2-lifepoints').innerText = 7000;
    document.getElementById('winner').innerText = '';
}

function incrementPumpkinCounter() {
    const countElement = document.getElementById('pumpkin-count');
    let count = parseInt(countElement.innerText);
    count++;
    countElement.innerText = count;
}

function decrementPumpkinCounter() {
    const countElement = document.getElementById('pumpkin-count');
    let count = parseInt(countElement.innerText);
    if (count > 0) {
        count--;
        countElement.innerText = count;
    }
}

function flipCoin() {
    const resultElement = document.getElementById('coin-result');
    const result = Math.random() < 0.5 ? 'Testa' : 'Croce';
    resultElement.innerText = result;
}

function togglePumpkinCounter() {
    const pumpkinCounter = document.getElementById('pumpkin-counter');
    pumpkinCounter.classList.toggle('hidden');
}

function toggleCoin() {
    const coinFlip = document.getElementById('coin-flip');
    coinFlip.classList.toggle('hidden');
}
