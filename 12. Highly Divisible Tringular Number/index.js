// What is the value of the first triangle number to have over five hundred divisors?

let lengthDivisor = 500;
let indexSetigita = 1;
let bilSegitiga = 0;
let indexDivisor = 0;
let kondisi = true;

while (true) {
  indexDivisor = 0;
  bilSegitiga = (indexSetigita * (indexSetigita + 1)) / 2;
  for (let i = 1; i <= Math.sqrt(bilSegitiga); i++) {
    if (bilSegitiga % i === 0) {
      if (i * i === bilSegitiga) {
        indexDivisor += 1;
      } else {
        indexDivisor += 2;
      }
    }
  }
  if (indexDivisor > lengthDivisor) {
    break;
  }
  indexSetigita++;
}

console.log(bilSegitiga);
