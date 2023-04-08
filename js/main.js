import initGallary from './gallery.js';
import openStatusPopup from './status-popup.js';
import './upload.js';
import { request } from './util.js';


try {
  /**
   * @type {PictureState[]}
   */
  const data = await request('https://28.javascript.pages.academy/kekstagram/data');

  initGallary(data);

} catch (exteption) {
  const title = `Ошибка: ${exteption.message}`;
  const button = 'Закрыть';

  openStatusPopup('error', {title, button});
}

