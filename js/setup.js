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
