//BruteForce
console.time("runtime");
let myArray = [];
function isPalindrome(num) {
  const strNum = String(num);
  return strNum === strNum.split("").reverse().join("");
}

for (let i = 999; i >= 100; i--) {
  for (let j = 999; j >= 100; j--) {
    let number = i * j;

    if (isPalindrome(number)) {
      myArray.push(number);
    }
  }
}

const largestPalindrome = Math.max(...myArray);
console.log("Largest Palindrome: " + largestPalindrome);

console.timeEnd("runtime");

//Gagal

// console.time("runtime");
// function isPalindrome(num) {
//   const strNum = String(num);
//   return strNum === strNum.split("").reverse().join("");
// }

// outerloop: for (let i = 999; i >= 1; i--) {
//   for (let j = 999; j >= 1; j--) {
//     let number = i * j;

//     if (isPalindrome(number)) {
//       const hasil = number;
//       console.log("Largest Palindrome: " + hasil);
//       break outerloop;
//     }
//   }
// }

// console.timeEnd("runtime");
