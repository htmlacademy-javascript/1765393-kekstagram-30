/* Функции для тренировки

Задача 1

Напишите несколько функций и убедитесь, что они работают правильно. Аргументы для тестирования функций можете брать из примеров ниже или придумать
самостоятельно.
На данном этапе можно не беспокоиться о типах данных аргументов и о том, как должна вести себя функция, если ей были переданы неверные аргументы.
Задание считается выполненным, если в проекте описаны следующие функции:
Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или
равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
Примеры использования функции:

// Строка короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false

Что использовать?
Для решения этой задачи вам потребуется объявить функцию с двумя параметрами: строкой и максимальной длиной.
В теле функции используйте оператор сравнения меньше или равно (<=), чтобы сравнить длину полученной строки (свойство length) с максимальной длиной.
Функция должна вернуть результат этого сравнения.
Обратите внимание, что для решения этой задачи можно использовать if/else или тернарный оператор, однако это избыточно, так как операция сравнения
сама по себе возвращает нужный нам результат.
Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
Например:

// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false

Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке!

// Это палиндром
имяФункции('Лёша на полке клопа нашёл '); // true

Что использовать?
Для решения этой задачи вам потребуется объявить функцию с одним параметром — строкой.
Проверить строку на «палиндромность» можно разными способами. Например, вы можете:
«Нормализовать» полученную строку, для чего:

убрать с помощью метода replaceAll() все пробелы,
привести строку к верхнему (метод toUpperCase()) или к нижнему (метод toLowerCase()) регистру,
записать полученную строку в новую переменную.
Создать новую пустую строку и сохранить её в ещё одну переменную.
Создать цикл for, переменная-счётчик которого отсчитывает порядковые номера (индексы) символов в «нормализованной»
строке с конца к началу, то есть:

изначально счётчик равен индексу последнего символа (он на 1 меньше длины строки),
цикл останавливается при достижении начала строки (нулевого индекса),
на каждой итерации счётчик уменьшается на 1.
В теле цикла на каждой итерации получать очередной символ «нормализованной» строки (с помощью квадратных скобок или метода at()).

С помощью оператора += дозаписать этот символ в созданную на втором шаге строку.
После того, как цикл отработает, полученную перевёрнутую строку сравнить (===) с «нормализованной».
Вернуть результат этого сравнения.
*/

//Решение:

//В первой функции isStringLengthValid мы просто сравниваем длину строки с максимальной длиной.
// Функция для проверки длины строки
function isStringLengthValid(str, maxLength) {
  return str.length <= maxLength;
}

//Во второй функции isPalindrome мы нормализуем строку, убираем пробелы и приводим к нижнему регистру.
//Затем создаем перевернутую строку и сравниваем её с исходной строкой после нормализации.
//Если они равны, то строка является палиндромом.
// Функция для проверки, является ли строка палиндромом
function isPalindrome(str) {
  // Нормализуем строку: убираем пробелы и приводим к нижнему регистру
  const normalStr = str.replace(/\s/g, '').toLowerCase();

  // Создаем перевернутую строку
  let reversedStr = '';
  for (let i = normalStr.length - 1; i >= 0; i--) {
    reversedStr += normalStr[i];
  }

  // Сравниваем исходную и перевернутую строки
  return normalStr === reversedStr;
}

/*
// Проверка длины строки
console.log(isStringLengthValid('проверяемая строка', 20)); // true
console.log(isStringLengthValid('проверяемая строка', 18)); // true
console.log(isStringLengthValid('проверяемая строка', 10)); // false

// Проверка на палиндром
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
*/



/* Задача 2
Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN

Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число. Обратите внимание, что возвращать функция по-прежнему должна только целые положительные числа:

имяФункции(2023); // 2023
имяФункции(-1);   // 1
имяФункции(1.5);  // 15

Что использовать?
Для решения этой задачи вам пригодятся:

цикл — для перебора полученной строки,
функция parseInt() — для превращения в число отдельных символов и результирующей строки,
функция Number.isNaN() — чтобы проверить, получилось ли превратить символ в число,
метод toString() — на случай, если в качестве параметра пришло число.
*/

//Решение:
function extractDigits(str) {
  let result = ''; // Переменная для хранения извлеченных цифр

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== ' ') {
      // Если текущий символ является цифрой (и не является пробелом), добавляем его к результату
      result += str[i];
    }
  }

  if (result === '') {
    return NaN; // Если не было извлечено ни одной цифры, возвращаем NaN
  }

  return parseInt(result, 10); // Преобразуем результат в целое число
}

/*
console.log(extractDigits('2023 год')); // 2023
console.log(extractDigits('ECMAScript 2022')); // 2022
console.log(extractDigits('1 кефир, 0.5 батона')); // 105
console.log(extractDigits('агент 007')); // 7
console.log(extractDigits('а я томат')); // NaN
console.log(extractDigits(2023)); // 2023
console.log(extractDigits(-1)); // 1
console.log(extractDigits(1.5)); // 15
*/
