'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


document.querySelector('.setup-similar').classList.remove('hidden');

// Wizard элемент <template>
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// функция вывода рандомного элемента массива
var randomArrayItem = function (array) {
  var rand = Math.random() * (array.length);
  rand = Math.floor(rand);
  return array[rand];
};

var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyeColors = ['black', 'red', 'blue', 'yellow', 'green'];

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  var wizardName = randomArrayItem(wizardNames) + ' ' + randomArrayItem(wizardLastnames);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardName;

  similarListElement.appendChild(wizardElement);

  var wizardCoat = document.querySelector('#similar-wizard-template').content.querySelector('.wizard-coat');
  wizardCoat.style.fill = randomArrayItem(wizardCoatColors);

  var wizardEye = document.querySelector('#similar-wizard-template').content.querySelector('.wizard-eyes');
  wizardEye.style.fill = randomArrayItem(wizardEyeColors);
}

// ---------------- открытие окна настройки персонажа ------------------
var setupWindow = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setupWindow.querySelector('.setup-close');

setupOpenButton.addEventListener('click', function () {
  setupWindow.classList.remove('hidden');
});

setupCloseButton.addEventListener('click', function () {
  setupWindow.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    setupWindow.classList.add('hidden');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setupWindow.classList.remove('hidden');
  }
});

// ---------------- меняем цвета персонажа при клике ------------------
var setupWizardCoat = setupWindow.querySelector('.wizard-coat');
var setupWizardEye = setupWindow.querySelector('.wizard-eyes');
var setupWizardFireball = setupWindow.querySelector('.setup-fireball-wrap');

// находим формы для inputs заполнения
var inputWizardCoatColor = document.getElementsByName('coat-color');
var inputWizardEyeColor = document.getElementsByName('eyes-color');
var inputWizardFireballColor = document.getElementsByName('fireball-color');

// массивы цветов
var setupWizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var setupWizardEyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var setupWizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getSetupColors = function (element, colors, input) {
  element.addEventListener('click', function () {
    var random = randomArrayItem(colors);

    element.style.fill = random;
    input.value = random;
  });
};

getSetupColors(setupWizardCoat, setupWizardCoatColors, inputWizardCoatColor);
getSetupColors(setupWizardEye, setupWizardEyeColors, inputWizardEyeColor);
getSetupColors(setupWizardFireball, setupWizardFireballColors, inputWizardFireballColor);
