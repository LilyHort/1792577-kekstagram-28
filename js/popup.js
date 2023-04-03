/**
 * @param {KeyboardEvent & {target: Element}} event
 */
const onDocumenKeydown = (event) => {
  const isEscepeKey = event.key.startsWith('Esc');
  const isTextField = event.target.matches('input[type = "text"], textarea');
  if (isEscepeKey && !isTextField) {
    /**
     * @type {HTMLButtonElement}
     */
    const cancelButton = document.querySelector('.overlay:not(.hidden) .cancel');

    cancelButton.click();
  }
};

/**
 * @param {MouseEvent & {target: Element}} event
 */
const onCancelButtonClick = (event) => {
  const popup = event.target.closest('.overlay');
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumenKeydown);
};
/**
 * @param {Element} popup
 */
const openPopup = (popup) => {

  const cancelButton = popup.querySelector('.cancel');

  popup.classList.remove('hidden');
  popup.scroll(0,0);
  cancelButton.addEventListener('click', onCancelButtonClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumenKeydown);
};

export default openPopup;
