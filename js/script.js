function getPlayerName(NameId) {
    const playerName = document.getElementById(NameId);
    const playerNameText = playerName.innerText;

    const bestPlayers = document.getElementById('best-players');
    const bestPlayer = document.createElement('li');
    bestPlayer.innerText = playerNameText;
    bestPlayers.appendChild(bestPlayer);


    const allPlayer = bestPlayers.childElementCount;
    const playerNames = bestPlayers.innerText;

    if (allPlayer > 5) {

        alert('Choose only five players');
        bestPlayer.style.display = 'none';

    }

}

document.getElementById('btn-select-1').addEventListener('click', function () {
    getPlayerName('player-name-1');
})
document.getElementById('btn-select-2').addEventListener('click', function () {
    getPlayerName('player-name-2');

})
document.getElementById('btn-select-3').addEventListener('click', function () {
    getPlayerName('player-name-3');

})
document.getElementById('btn-select-4').addEventListener('click', function () {
    getPlayerName('player-name-4');

})
document.getElementById('btn-select-5').addEventListener('click', function () {
    getPlayerName('player-name-5');

})
document.getElementById('btn-select-6').addEventListener('click', function () {
    getPlayerName('player-name-6');

})
document.getElementById('btn-select-7').addEventListener('click', function () {
    getPlayerName('player-name-7');

})
document.getElementById('btn-select-8').addEventListener('click', function () {
    getPlayerName('player-name-8');

})
document.getElementById('btn-select-9').addEventListener('click', function () {
    getPlayerName('player-name-9');

})