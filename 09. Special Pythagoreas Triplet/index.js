// Goal : There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

let bil1 = 0;
let bil2 = 0;
let bil3 = 0;
let n = 1000;
let kondisi = true;
function akar(angka) {
  return Math.sqrt(angka);
}

while (kondisi) {
  bil2++;
  bil3 = n - (bil1 + bil2);

  if (bil2 == 1000) {
    bil1++;
    bil2 = 0;
  }

  if (
    bil1 < bil2 &&
    bil2 < bil3 &&
    bil1 + bil2 + bil3 == n &&
    bil1 !== 0 &&
    bil2 !== 0 &&
    bil3 !== 0 &&
    bil1 * bil1 + bil2 * bil2 == bil3 * bil3
  ) {
    kondisi = false;
  } else if (bil2 == n) {
    kondisi = false;
    console.log("Triple Pitagoras Tidak Ditemukan");
  }
}
console.log(bil1, bil2, bil3);
