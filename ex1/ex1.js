const numbers = [];

while (numbers.length < 10) {
  const randomNumber = Math.floor(Math.random() * 100);
  numbers.push(randomNumber);
}

console.log(numbers);
