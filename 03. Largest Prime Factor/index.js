let number = 13;
let tampung = 0;
for (let i = 2; i <= number; i++) {
  if (number % i == 0) {
    tampung = number / i;
    number = tampung;
    console.log(i);
  }
}

console.log(tampung);
