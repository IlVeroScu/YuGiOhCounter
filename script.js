let settingsOpen = false;

function toggleSettingsTab() {
    const mainTab = document.getElementById('main-tab');
    const settingsTab = document.getElementById('settings-tab');
    const settingsButton = document.querySelector('.settings-icon img');

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
    const settingsButton = document.querySelector('.settings-icon img');

    mainTab.classList.remove('hidden');
    settingsTab.classList.add('hidden');
    settingsButton.src = 'https://img.icons8.com/ios-filled/50/ffffff/settings.png';

    settingsOpen = false;
}

// Funzioni per il contatore zucca e lancio moneta (aggiungi al tuo script.js)
function togglePumpkinCounter() {
    const pumpkinCounter = document.getElementById('pumpkin-counter');
    pumpkinCounter.classList.toggle('hidden');
}

function toggleCoin() {
    const coinFlip = document.getElementById('coin-flip');
    coinFlip.classList.toggle('hidden');
}
