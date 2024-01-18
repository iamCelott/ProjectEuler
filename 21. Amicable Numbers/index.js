let result = 0;
const target = 10000;
function divide(angka) {
  let i = 1;
  let tampung = 0;
  while (i < angka) {
    if (angka % i == 0) {
      tampung += i;
    }
    i++;
  }
  return tampung;
}

for (let i = 1; i < target; i++) {
  const tampung1 = divide(i);
  const tampung2 = divide(tampung1);

  if (tampung2 == i && i != tampung1) {
    // console.log("Amicable");
    console.log(i);
    result += i;
  } else {
    // console.log("Not Amicable");
  }
}

console.log(`Sum : ${result}`);
