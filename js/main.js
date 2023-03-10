const NUMBER_OBGECTS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 1;
const MAX_COMMENTS = 20;
const DESCRIPTIONS = [
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон',
  'Смысл жизни состоит в том, чтобы умереть молодым ... как можно позже',
  'Поймала дзен',
  'Live without regrets',
  'И мое сердце остановилось, мое сердце замерло',
  'Как мало нужно для счастья',
  'Теплые воспоминания в холодное время года',
  'Что бы ни случилось завтра, у нас есть еще сегодня',
  'Будь голосом, а не эхом',
  'Плюс одна страна в копилку',
  'Я люблю свою работу. Особенно тогда, когда наступает отпуск',
  'Где надо, там и где',
  'Лучшая тренировка – это бег на короткие дистанции. От холодильника к дивану, например',
  'Следуй за своей мечтой',
  'Делай, что должен, и будь, что будет',
  'Правда ранит, купите бинт',
  'Ещё один прекрасный день, испорченный обязанностями',
  'От воспоминаний и эмоций некуда не деться',
  'Я сделаю всё, чтобы запомнить это лето',
  'Ещё немного моего летнего спама',
  'Летняя пора – это самое прекрасное в моей жизни',
  'Солнечный свет – лучшее моё лекарство',
  'Весна – для меня это время начать всё с начала',
  'Жизнь должна быть яркой и фееричной, чтобы потом не жалеть',
  'Стирая грани – не сотри, случайно, себя'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME_COMENTATORS = [
  'Иван',
  'Андрей',
  'Яков',
  'Юрий',
  'Татьяна',
  'Мария',
  'Авдотья',
  'Елизавета'
];

/**
 * @template Item
 * @param {Item[]} list
 * @return {Item}
 */
const pikItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

/**
 * @param {number} min
 * @param {number}  max
 * @returns {number}
 */
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

/**
 * @param {number} id
 * @returns {CommentState}
 */
const createCommentState = (id) => {
  const avatar = `img/avatar-${getRandomInteger(1, 6)}.svg`;
  const message = pikItemFromList(MESSAGES);
  const name = pikItemFromList(NAME_COMENTATORS);

  return {id, avatar, message, name};
};

/**
 * @param {number} length
 * @returns {CommentState[]}
 */
const createCommentStateList = (length) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createCommentState(start + index));
};

/**
 * @param {number} id
 * @returns {ImageState}
 */
const createImageState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pikItemFromList(DESCRIPTIONS);
  const likes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const comments = createCommentStateList(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS));

  return {id, url, description, likes, comments};
};

/**
 * @param {number} length
 * @return {ImageState[]}
 */
const createImageStateList = (length) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createImageState(start + index));
};

createImageStateList(NUMBER_OBGECTS);
