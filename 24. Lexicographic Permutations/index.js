// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

console.time("runtime");
function mutasi(arr) {
  let a = arr.length - 2;
  while (a >= 0 && arr[a] >= arr[a + 1]) {
    a--;
  }
  if (a === -1) {
    return false;
  }

  let b = arr.length - 1;
  while (arr[a] >= arr[b]) {
    b--;
  }

  [arr[a], arr[b]] = [arr[b], arr[a]];

  let i = a + 1;
  let j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return true;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let tampungMutasi = [];
do {
  tampungMutasi.push(arr.join(""));
} while (mutasi(arr));

console.log(tampungMutasi[1000000], tampungMutasi.length);

console.timeEnd("runtime");
