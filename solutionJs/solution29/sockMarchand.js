const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const sockMerchant = (arr) => {
  let counts = {};
  ar.forEach(function (i) { counts[i] = (counts[i] || 0) + 1; });
  const valueArray = Object.values(counts);
  const pair = [];

  for (let i = 0; i < valueArray.length; i++) {
    let x = valueArray[i];
    let oddOrEven = ((x & 1) ? "odd" : "even")
    if (x > 1 && oddOrEven === "even") {
      pair.push(x)
    }
    if (x > 1 && oddOrEven === "odd") {
      x = x - 1;
      pair.push(x)
    }
  }

  let p = pair.reduce((acc, cV) => acc + cV, 0);
  return p / 2;
}

const result = sockMerchant(ar);
console.log(result);
