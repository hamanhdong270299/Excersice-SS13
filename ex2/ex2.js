const numbers = [3, 7, 12, 18, 25, 31, 42, 56, 68, 90];
const input = prompt("Hãy nhập một số bất kỳ:");
const number = Number(input);

if (input !== null && numbers.includes(number)) {
  alert("Bingo");
} else {
  alert("Chúc bạn may mắn lần sau");
}
