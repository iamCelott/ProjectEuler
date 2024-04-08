const fs = require("fs");
const fileName = "0022_names.txt";

function hurufKeAngka(huruf) {
  return huruf.toLowerCase().charCodeAt(0) - 96;
}

fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan saat membaca file:", err);
    return;
  }
  names = data.split(",");

  names = names.map((name) => name.trim().replace(/"/g, "")).sort();

  // console.log("Nama-nama dari file:", names);
  // const namasedikit = ["abc", "def", "ghi"];

  let index = 1;
  let hasil = 0;
  for (let i = 0; i < names.length; i++) {
    let tampung = 0;
    for (let k = 0; k < names[i].length; k++) {
      tampung += hurufKeAngka(names[i][k]);
    }
    tampung *= index;
    hasil += tampung;
    index++;
  }
  console.log(hasil);
});
