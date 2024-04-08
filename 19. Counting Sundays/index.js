function hitung() {
  let hariBulan = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let bulanSaatIni = 1;
  let tahunSaatIni = 1901;
  let tahunTujuan = 2000;
  let jumlah = 0;

  for (let i = tahunSaatIni; i <= tahunTujuan; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      hariBulan[2] = 29;
    } else {
      hariBulan[2] = 28;
    }

    for (let j = bulanSaatIni; j <= 12; j++) {
      if (new Date(i, j - 1, 1).getDay() === 0) {
        jumlah++;
      }
    }
    bulanSaatIni = 1;
  }

  return jumlah;
}

console.log(hitung());
