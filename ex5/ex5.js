const numbers = [];
const length = Math.floor(Math.random() * 11) + 10; // Từ 10 đến 20 phần tử

for (let i = 0; i < length; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Số từ 1 đến 100
  numbers.push(randomNumber);
}

let oddSum = 0;
let evenSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum = evenSum + numbers[i];
  } else {
    oddSum = oddSum + numbers[i];
  }
}

alert(`Mảng: ${numbers.join(", ")}\nTổng các số lẻ: ${oddSum}`);
alert(`Mảng: ${numbers.join(", ")}\nTổng các số chẵn: ${evenSum}`);
