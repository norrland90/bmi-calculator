const form = document.querySelector('.form');
const formNumbersMetric = document.querySelector('.form__number--metric');
const formNumbersImperial = document.querySelector('.form__number--imperial');

const inputMetric = document.getElementById('metric');
const inputImperial = document.getElementById('imperial');

const inputHeightCm = document.getElementById('height-cm');
const inputWeightKg = document.getElementById('weight-kg');
const inputHeightFt = document.getElementById('height-ft');
const inputHeightIn = document.getElementById('height-in');
const inputWeightSt = document.getElementById('weight-st');
const inputWeightLbs = document.getElementById('weight-lbs');

// Switch between metric and imperial
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

function calculateBMIMetric(height, weight) {
  return weight / (height / 100) ** 2;
}

function calculateBMIImperial(heightFt, heightIn, weightSt, weightLbs) {
  const totalInches = Number(heightIn) + Number(heightFt) * 12;
  const totalLbs = Number(weightLbs) + Number(weightSt) * 14;
  return (703 * totalLbs) / totalInches ** 2;
}

function calculateIdealWeightMetric(height) {
  let idealWeightLow = (height / 100) ** 2 * 18.5;
  let idealWeightHigh = (height / 100) ** 2 * 25;
  return [idealWeightLow, idealWeightHigh];
}

function calculateIdealWeightImperial(heightFt, heightIn) {
  const totalInches = Number(heightIn) + Number(heightFt) * 12;
  let idealWeightLow = (totalInches ** 2 * 18.5) / 703;
  let idealWeightHigh = (totalInches ** 2 * 25) / 703;
  return [idealWeightLow, idealWeightHigh];
}

function getWeightType(bmi) {
  if (bmi < 17.5) {
    return 'underweight';
  } else if (bmi > 17 && bmi < 25) {
    return 'healthy weight';
  } else if (bmi > 25 && bmi < 30) {
    return 'overweight';
  } else {
    return 'obese';
  }
}

function addBMIToDOM(bmi, idealWeight, meassureType) {
  const weightType = getWeightType(bmi);

  const formResult = document.querySelector('.form__results');
  formResult.innerHTML = '';

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('form__result-container');

  const yourBMIParagraph = document.createElement('p');
  yourBMIParagraph.classList.add('form__result-intro');
  yourBMIParagraph.innerText = 'Your BMI is...';

  const bmiText = document.createElement('h3');
  bmiText.classList.add('form__results-bmi');
  bmiText.innerText = bmi.toFixed(1);

  containerDiv.appendChild(yourBMIParagraph);
  containerDiv.appendChild(bmiText);

  const infoParagraph = document.createElement('p');
  infoParagraph.classList.add('form__result-info');
  infoParagraph.innerHTML = `Your BMI suggests you’re a ${weightType}. Your ideal weight is between <span class="form__result-info form__result-info--bold">${idealWeight[0].toFixed(
    1
  )} ${meassureType}</span> and <span class="form__result-info form__result-info--bold">${idealWeight[1].toFixed(
    1
  )} ${meassureType}</span>.`;

  formResult.appendChild(containerDiv);
  formResult.appendChild(infoParagraph);
}

function onSubmit(e) {
  e.preventDefault();
  let meassureType = document.querySelector('.form__radio-btn:checked').value;
  let bmi;
  let idealWeight;

  if (meassureType === 'metric') {
    bmi = calculateBMIMetric(inputHeightCm.value, inputWeightKg.value);
    idealWeight = calculateIdealWeightMetric(inputHeightCm.value);
    addBMIToDOM(bmi, idealWeight, 'kg');
  } else {
    bmi = calculateBMIImperial(
      inputHeightFt.value,
      inputHeightIn.value,
      inputWeightSt.value,
      inputWeightLbs.value
    );
    idealWeight = calculateIdealWeightImperial(
      inputHeightFt.value,
      inputHeightIn.value
    );
    addBMIToDOM(bmi, idealWeight, 'lbs');
  }
}

form.addEventListener('submit', onSubmit);
