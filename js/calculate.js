document.getElementById('btn-claculator').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputValueString = inputField.value;
    const inputValue = parseInt(inputValueString);
    inputField.value = '';

    const bestPlayers = document.getElementById('best-players');
    const allPlayer = bestPlayers.childElementCount;

    const playerCost = inputValue * allPlayer;
    const dollarField = document.getElementById('total-cost');
    dollarField.innerText = playerCost;
})

document.getElementById('btn-calculator-total').addEventListener('click', function () {
    const managerInputField = document.getElementById('manager-field');
    const managerValueString = managerInputField.value;
    const managerValue = parseInt(managerValueString);
    managerInputField.value = '';

    const coachInputField = document.getElementById('coach-field');
    const coachValueString = coachInputField.value;
    const coachValue = parseInt(coachValueString);
    coachInputField.value = '';

    const dollarField = document.getElementById('total-cost');
    const dollarFieldString = dollarField.innerText;
    const dollarValue = parseInt(dollarFieldString);

    const totalValue = managerValue + coachValue + dollarValue;

    const totalDollarField = document.getElementById('total-dollar');
    totalDollarField.innerText = totalValue;
})