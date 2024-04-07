// Goal : What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

function fibonacci(n) {
  let hasil = 0n;
  let val1 = 0n;
  let val2 = 1n;
  let indexFibonacci = 1;

  while (hasil.toString().length < n) {
    hasil = val1 + val2;
    kondisi = hasil;
    val1 = val2;
    val2 = hasil;
    indexFibonacci++;
    // console.log(hasil.toString().length);
    // console.log(indexFibonacci, hasil);
  }
  return indexFibonacci;
}

console.log(fibonacci(1000));
