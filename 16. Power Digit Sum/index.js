let result = BigInt(Math.pow(2, 1000));
// console.log(result);

let resultString = result.toString();

let sum = 0;
for (let i = 0; i < resultString.length; i++) {
  sum += parseInt(resultString[i]);
}

console.log(sum);
