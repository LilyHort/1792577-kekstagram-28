//Функция для проверки длины строки

const compareLengthString = function(text, length) {
  if(text.length <= length) {
    return true;
  }
  return false;
};

compareLengthString('проверяемая строка', 20);
compareLengthString('проверяемая строка', 18);
compareLengthString('проверяемая строка', 10);

//Функция для проверки палидром

const checksPalindrome = function (text) {
  const convertedWord = text.replace(/ /g,'').toLowerCase();
  const mirrorWord = convertedWord.split('').reverse().join('');
  if (convertedWord === mirrorWord) {
    return true;
  }
  return false;
};

checksPalindrome('топот');
checksPalindrome('ДовОд');
checksPalindrome('Кекс');
checksPalindrome('Лёша на полке клопа нашёл ');

//Функция для извлечения цифр из строки

const extractsNumbers = function (text) {
  const result = text.replace(/[^0-9]/g, '');
  if (result === '') {
    return NaN;
  }
  return Number(result);
};

extractsNumbers('2023 год');
extractsNumbers('ECMAScript 2022');
extractsNumbers('1 кефир, 0.5 батона');
extractsNumbers('агент 007');
extractsNumbers('а я томат');

//Функция дополняющая строку указанными символами до заданной длины

const formAddress = function (originalString, minLength, additionalCharacters) {
  let resultString = originalString;
  while (resultString.length < minLength) {
    const padding = minLength - resultString.length;
    resultString = additionalCharacters.slice(0, padding) + resultString;
  }
  return resultString;
};


formAddress('1', 2, '0');
formAddress('1', 4, '0');
formAddress('q', 4, 'werty');
formAddress('q', 4, 'we');
formAddress('qwerty', 4, '0');
