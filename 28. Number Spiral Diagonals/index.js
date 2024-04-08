let angka = 1;
let jarak = 2;
let tampung = 1;
let ukuranKotak = 1;

while (ukuranKotak < 1001) {
  for (let i = 1; i <= 4; i++) {
    angka += jarak;
    tampung += angka;
  }
  jarak += 2;
  ukuranKotak += 2;
}

console.log(tampung);
