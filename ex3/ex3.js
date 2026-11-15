const input = prompt("Nhập một dãy số, cách nhau bằng dấu phẩy:");

if (input !== null) {
  const numbers = input.split(",").map((item) => item.trim());
  numbers.reverse();

  console.log(numbers);
  alert(`Dãy số sau khi đảo ngược: ${numbers.join(", ")}`);
}
