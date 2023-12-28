var allNumbers = document.querySelectorAll('.tabellaNumberText');

function hideAllNumbers() {
    allNumbers.forEach(function (allNumbers) {
        allNumbers.classList.add('hidden');
        allNumbers.classList.remove('visible');
    });
}

function showAllNumbers() {
    allNumbers.forEach(function (allNumbers) {
        allNumbers.classList.add('visible');
        allNumbers.classList.remove('hidden');
    });
}

hideAllNumbers();
let numbersUsed = [];
let i = 0;

function getNewNumber() {
    allNumbers.forEach(function (allNumbers) {
        allNumbers.classList.remove('current');
    });
    var repeat;
    var randomNewNumber;

    do {
        repeat = 0;
        randomNewNumber = Math.floor(Math.random() * 90) + 1;
        if (numbersUsed.includes(randomNewNumber)) {
            repeat = 1;
        } else {
            numbersUsed.push(randomNewNumber);
        }
    } while (repeat !== 0);
    i++
    document.getElementById('currentNumber').textContent = randomNewNumber;
    document.getElementById('_' + randomNewNumber).classList.remove('hidden');
    document.getElementById('_' + randomNewNumber).classList.add('visible');
    document.getElementById('_' + randomNewNumber).classList.add('current');
    var newRecentNumberElement = document.createElement('p');
    newRecentNumberElement.className = 'recentNumberText';
    newRecentNumberElement.textContent = randomNewNumber;
    var recentNumbersList = document.getElementById('recentNumbersList');
    recentNumbersList.appendChild(newRecentNumberElement);
    document.getElementById('numberOfUsed').textContent = 'Numeri estratti: ' + i
    var missing = 90-i;
    document.getElementById('numberOfMissing').textContent = 'Numeri mancanti: ' + missing
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (i < 90) {
            getNewNumber();
        }
    }
});

function updateDateAndTime() {
    var currentDate = new Date();
    var dayOfWeek = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'][currentDate.getDay()];
    var dayOfMonth = currentDate.getDate();
    var monthName = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'][currentDate.getMonth()];
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var formattedDateTime = dayOfWeek + ' ' + dayOfMonth + ' ' + monthName + ' | ' + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
    document.getElementById('dateAndTime').textContent = formattedDateTime;
  }

setInterval(function () {
    updateDateAndTime();
}, 500);