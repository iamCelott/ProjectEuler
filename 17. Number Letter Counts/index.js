const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
const teens = [
  "",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function numberToWords(n) {
  let word = "";

  if (n == 1000) {
    word += ones[Math.floor(n / 1000)] + "thousand";
    n %= 1000;
  }

  if (n >= 100) {
    word += ones[Math.floor(n / 100)] + "hundred";
    if (n % 100 !== 0) {
      word += "and";
    }
    n %= 100;
  }

  if (n >= 20) {
    word += tens[Math.floor(n / 10)];
    n %= 10;
  }

  if (n > 0) {
    if (n >= 11 && n <= 19) {
      word += teens[n - 10];
    } else {
      word += ones[n];
    }
  }

  return word.trim();
}

let wordTotal = "";
for (let i = 1; i <= 1000; i++) {
  wordTotal += numberToWords(i);
}
console.log("Total Jumlah Huruf 1 - 1000 Adalah: " + wordTotal.length);
