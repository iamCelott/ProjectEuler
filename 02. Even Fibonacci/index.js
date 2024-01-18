let nilai1 = 0;
let nilai2 = 1;
let hasil = 0;
let result = 0;
for (let i = 0; i < 32; i++) {
  hasil = nilai1 + nilai2;
  if (hasil % 2 == 0) {
    result += hasil;
  }
  nilai1 = nilai2;
  nilai2 = hasil;
}
console.log(result);
