const number = prompt("Nhập các số, cách nhau bằng dấu phẩy:").split(",");
let largest = Number(number[0]);

for (let i = 1; i < number.length; i++) {
  if (largest < Number(number[i])) {
    largest = Number(number[i]);
  }
}

alert(`Giá trị lớn nhất = ${largest}`);
