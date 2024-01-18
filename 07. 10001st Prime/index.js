let kumpulanPrima = [];
let n = 2;

while (kumpulanPrima.length < 10001) {
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      if (i == n) {
        console.log(n + " bilangan prima");
        kumpulanPrima.push(n);
        break;
      }
      break;
    }
  }
  n++;
}
