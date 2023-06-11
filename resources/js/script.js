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
