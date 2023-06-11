// const formRadioButtons = document.querySelector('.form__radio-buttons');
const formNumbersMetric = document.querySelector('.form__number--metric');
const formNumbersImperial = document.querySelector('.form__number--imperial');
const inputMetric = document.getElementById('metric');
const inputImperial = document.getElementById('imperial');

function hideImperial() {
  formNumbersImperial.classList.add('hidden');
  formNumbersMetric.classList.remove('hidden');
}

function hideMetric() {
  formNumbersMetric.classList.add('hidden');
  formNumbersImperial.classList.remove('hidden');
}

inputMetric.addEventListener('input', hideImperial);
inputImperial.addEventListener('input', hideMetric);

// Test submit

form = document.querySelector('.form');

function testFunc(e) {
  e.preventDefault();
  // console.log(e.target[0].value, inputMetric.value);
  // Get checked value
  console.log(document.querySelector('.form__radio-btn:checked').value);
}

form.addEventListener('submit', testFunc);

// Möjligen finns olika sätt att lösa det med submit-grejen. Har dels gjort en submit-knapp som gör validering och beräkning när man trycker. Men möjligen istället gör så att beräkningen sker "automatiskt" när man trycker in siffrorna - i designen finns ingen submit-knapp.
