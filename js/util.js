/**
 * @template Item
 * @param {Item[]} list
 * @return {Item}
 */
export const pikItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

/**
 * @param {number} min
 * @param {number}  max
 * @returns {number}
 */
export const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};
