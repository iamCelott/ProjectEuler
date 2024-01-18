let m = 20;
let n = 20;

// function faktorial(f){
//     if (f === 0 || f === 1) {
//         return 1;
//     } else {
//         return f * faktorial(f - 1);
//     }
// }

function faktorial(f) {
  let tampung = 1;
  while (f >= 1) {
    tampung *= f;
    f--;
  }
  return tampung;
}

let faktorialM = faktorial(m + n);
let faktorialN = faktorial(m) * faktorial(n);

const rumus = faktorialM / faktorialN;
console.log(rumus);
