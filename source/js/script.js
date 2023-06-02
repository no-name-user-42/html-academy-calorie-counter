const form = document.querySelector('.counter__form');

const genderElements = form.querySelectorAll('.gender');

const ageElement = form.querySelector('#age');
const heightElement = form.querySelector('#height');
const weightElement = form.querySelector('#weight');

const activityElements = form.querySelectorAll('.activity');

const submitElement = form.querySelector('#submit');
const resetElement = form.querySelector('#reset');

const resultSection = document.querySelector('.counter__result');
const caloriesElements = resultSection.querySelectorAll('.calories-value');


const formInputHandler = (event) => {
  if (event.target.maxLength) {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
  }

  if (event.target.type === 'number') {
    if (event.target.max) {
      if (parseInt(event.target.value, 10) > parseInt(event.target.max, 10)) {
        event.target.value = event.target.max;
      }
    }

    if (event.target.min) {
      if (parseInt(event.target.value, 10) < parseInt(event.target.min, 10)) {
        event.target.value = event.target.min;
      }
    }
  }

  resetElement.disabled = !(ageElement.value !== '' || heightElement.value !== '' || weightElement.value !== '');
  submitElement.disabled = !(ageElement.value !== '' && heightElement.value !== '' && weightElement.value !== '');
};

const formSubmitHandler = (event) => {
  event.preventDefault();

  let genderParameter = 0;
  for (const genderElement of genderElements) {
    if (genderElement.checked) {
      genderParameter = parseInt(genderElement.getAttribute('data-value'), 10);
      break;
    }
  }

  let activityFactor = 0;
  for (const activityElement of activityElements) {
    if (activityElement.checked) {
      activityFactor = parseFloat(activityElement.getAttribute('data-factor'));
      break;
    }
  }

  const normalCaloriesValue = ((10 * parseInt(weightElement.value, 10)) + (6.25 * parseInt(heightElement.value, 10)) - (5 * parseInt(ageElement.value, 10)) + genderParameter) * activityFactor;

  caloriesElements.forEach((caloriesElement) => {
    caloriesElement.textContent = Math.round(normalCaloriesValue * parseFloat(caloriesElement.getAttribute('data-factor'))).toString();
  });

  resultSection.classList.remove('counter__result--hidden');
};

const resetForm = () => {
  resultSection.classList.add('counter__result--hidden');

  genderElements[0].checked = true;

  ageElement.value = '';
  heightElement.value = '';
  weightElement.value = '';

  activityElements[0].checked = true;

  resetElement.disabled = true;
  submitElement.disabled = true;
};

const formResetHandler = (event) => {
  event.preventDefault();
  resetForm();
};

const initialize = () => {
  resetForm();

  form.addEventListener('input', formInputHandler);
  form.addEventListener('submit', formSubmitHandler);
  form.addEventListener('reset', formResetHandler);
};

initialize();
