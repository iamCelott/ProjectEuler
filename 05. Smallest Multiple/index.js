function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  function findLCM(limit) {
    let result = 1;
    for (let i = 2; i <= limit; i++) {
      result = lcm(result, i);
    }
    return result;
  }
  
  
  console.log(findLCM(20));
  