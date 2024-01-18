let tampung1 = 0;
let tampung2sementara = 0;
let tampung2 = 0;
let hasil = 0;

for (let i = 1; i <= 100; i++) {
  tampung1 += Math.pow(i, 2);
}

for (let i = 1; i <= 100; i++) {
  tampung2sementara += i;
}

tampung2 = Math.pow(tampung2sementara, 2);

// Hitung Selisih
// rumus: hasil = tampung2 - tampung1

hasil = Math.abs(tampung1 - tampung2);
console.log(hasil);
