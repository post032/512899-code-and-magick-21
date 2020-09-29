'use strict';

let setupElement = document.querySelector(`.setup`);
setupElement.classList.remove(`hidden`);

let setupSimilar = setupElement.querySelector(`.setup-similar`);
setupSimilar.classList.remove(`hidden`);

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const WIZERD_NAME = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZERD_SURNAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZERD_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZERD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];

let generatorWizards = function(arr) {
  return Math.floor(Math.random() * arr.length);
};

let wizards = [{
  name: WIZERD_NAME[generatorWizards(WIZERD_NAME)] + ` ` + WIZERD_SURNAME[generatorWizards(WIZERD_SURNAME)],
  coatColor: WIZERD_COLOR[generatorWizards(WIZERD_COLOR)],
  eyesColor: WIZERD_EYES[generatorWizards(WIZERD_EYES)]
},
{
  name: WIZERD_NAME[generatorWizards(WIZERD_NAME)] + ` ` + WIZERD_SURNAME[generatorWizards(WIZERD_SURNAME)],
  coatColor: WIZERD_COLOR[generatorWizards(WIZERD_COLOR)],
  eyesColor: WIZERD_EYES[generatorWizards(WIZERD_EYES)]
},
{
  name: WIZERD_NAME[generatorWizards(WIZERD_NAME)] + ` ` + WIZERD_SURNAME[generatorWizards(WIZERD_SURNAME)],
  coatColor: WIZERD_COLOR[generatorWizards(WIZERD_COLOR)],
  eyesColor: WIZERD_EYES[generatorWizards(WIZERD_EYES)]
},
{
  name: WIZERD_NAME[generatorWizards(WIZERD_NAME)] + ` ` + WIZERD_SURNAME[generatorWizards(WIZERD_SURNAME)],
  coatColor: WIZERD_COLOR[generatorWizards(WIZERD_COLOR)],
  eyesColor: WIZERD_EYES[generatorWizards(WIZERD_EYES)]
}
];

let renderWizard = function(wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
setupElement.querySelector(`.setup-similar`).classList.remove(`hidden`);