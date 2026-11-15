const numbers = [];
const length = Math.floor(Math.random() * 11) + 10;

for (let i = 0; i < length; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  numbers.push(randomNumber);
}
const input = prompt("Nhập một số nguyên k:");
const k = Number(input);
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === k) {
    count++;
  }
}

alert(`Mảng: ${numbers.join(", ")}\nSố ${k} xuất hiện ${count} lần.`);
