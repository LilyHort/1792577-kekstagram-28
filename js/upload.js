import updatePreview from './upload-preview.js';
import openPopup from './popup.js';
import openStatusPopup from './status-popup.js';
import {request} from './util.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');

/**
 * @type {HTMLElement}
 */
const popup = form.querySelector('.img-upload__overlay');

// @ts-ignore
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

/**
 * @param {string} message
 * @param {(tags: string[]) => boolean} validate
 */

const addHashtadsValidator = (message, validate) => {
  pristine.addValidator(form.hashtags,(value) => {
    const tags = value.toLowerCase().split(' ').filter(Boolean);

    return validate(tags);
  }, message, 1, true);
};

/**
 * @param {string} message
 * @param {(discription: string) => boolean} validate
 */
const addDescriptionValidator = (message, validate) => {
  pristine.addValidator(form.description, validate, message);
};

const sendFormDate = async () => {
  const url = form.getAttribute('action');
  const method = form.getAttribute('method');
  const body = new FormData(form);

  form.submitButton.setAttribute('disabled', '');

  try {
    await request(url, {method, body});

    form.resetButton.click();
    openStatusPopup('success');
  } catch (exception) {
    openStatusPopup('error');
  }

  form.submitButton.removeAttribute('disabled');

};

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
const onFormChange = (event) => {
  if (event.target === form.filename) {
    const data = event.target.files.item(0);

    updatePreview(data);
    openPopup(popup);
  }
};

const onFormReset = () => {
  pristine.reset();
};

/**
 * @param {SubmitEvent} event
 */
const onFormSubmit = (event) => {
  event.preventDefault();

  if(pristine.validate()) {
    sendFormDate();
  }
};

addHashtadsValidator(
  'ХэшТеги должны начинаться с символа # (решетка)',
  (tags) => tags.every((tag) => tag.startsWith('#'))
);

addHashtadsValidator(
  'После решетки должны содержаться буквы или цифры',
  (tags) => tags.every((tag) => /^#[a-zа-яё0-9]+$/.test(tag))
);

addHashtadsValidator(
  'Максимальная длинна ХэшТега 20 символов',
  (tags) => tags.every((tag) => tag.length <= 20)
);

addHashtadsValidator(
  'Не более 5 ХэшТегов',
  (tags) => tags.length <= 5
);

addHashtadsValidator(
  'ХэшТеги не должны повторяться',
  (tags) => tags.length === new Set(tags).size
);

addDescriptionValidator (
  'Длинна описания не должна привышать 140 символов',
  (description) => description.length <= 140
);

form.addEventListener('change', onFormChange);
form.addEventListener('submit', onFormSubmit);
form.addEventListener('reset', onFormReset);
