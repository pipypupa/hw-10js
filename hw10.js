// 1
let isConfirmed;
const handleAction = (callback) => {
  while (true) {
    isConfirmed = confirm("Підтвердити дію");
    if (isConfirmed) {
      callback();
      continue;
    } else {
      break;
    }
  }
};
const sayHello = () => {
  console.log("Hello world");
};
handleAction(sayHello);

// 2
const targetNumber = Math.floor(Math.random() * 100) + 1;
const userInput = Number(prompt("Введіть число з 1 до 100"));
const validateGuess = () => {
  if (userInput === targetNumber) {
    console.log("Вітаємо! Ви вгадали число!");
  } else if (userInput < targetNumber) {
    console.log("Загадане число більше. Спробуйте ще раз!");
  } else if (userInput > targetNumber) {
    console.log("Загадане число менше. Спробуйте ще раз!");
  } else {
    console.log("Будь ласка, введіть коректне число!");
  }
};
validateGuess();
console.log(targetNumber);

// 3
let userChoice;
let attempts = 0;
while (true) {
  userChoice = confirm("Натисніть на кнопку");
  attempts += 1;
  if (!userChoice) break;
}
console.log(attempts);

// 4
function processArray(array, transformFunction) {
  const transformedArray = [];
  for (let i = 0; i < array.length; i++) {
    transformedArray.push(transformFunction(array[i]));
  }
  return transformedArray;
}
const numbers = [1, 2, 3, 4, 5];
const doubleValue = (num) => num * 2;
console.log(processArray(numbers, doubleValue));

// 5
const calculateDiscountedPrice = (price, discountRate, displayCallback) => {
  const finalPrice = price - (price * discountRate) / 100;
  displayCallback(finalPrice);
};
const showPrice = (finalPrice) => {
  console.log(`Ціна після знижки: ${finalPrice}грн.`);
};
const originalPrice = 1000;
const discountPercentage = 10;
calculateDiscountedPrice(originalPrice, discountPercentage, showPrice);
