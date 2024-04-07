let coba = [];
let hasil = 0;
let nTerbesar = 0;
for (let n = 1; n < 1000000; n++) {
  tampung = n;
  coba.push(n);
  while (true) {
    if (tampung == 1) {
      break;
    } else if (tampung % 2 == 0) {
      tampung /= 2;
      coba.push(tampung);
    } else {
      tampung = tampung * 3 + 1;
      coba.push(tampung);
    }
  }
  if (coba.length > hasil) {
    hasil = coba.length;
    nTerbesar = n;
    coba = [];
  } else {
    coba = [];
  }
}
console.log("n terbesar: " + nTerbesar);
console.log("chain count: " + hasil);
