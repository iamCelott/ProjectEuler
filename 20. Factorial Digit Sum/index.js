function faktorial(f) {
  let tampung = 1n;
  while (f >= 1) {
    tampung *= f;
    f--;
  }
  return tampung;
}

let faktorial100 = faktorial(100n);
let faktorialString = faktorial100.toString();
let result = 0n;
for (let i = 0n; i < faktorialString.length; i++) {
  result += BigInt(faktorialString[i]);
}

console.log(result.toString());
