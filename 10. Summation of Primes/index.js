let jumlahPrima = 0;
let n = 2;

while (n < 2000000) {
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      if (i == n) {
        jumlahPrima += n;
        console.log(n);
        break;
      }
      break;
    }
  }
  n++;
}

console.log(jumlahPrima);