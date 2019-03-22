const s = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'];
const n = s.length;

const countingValleys = (s) => {
  let position = 0;
  let count = 0;

  for (const i in s) {
    if (position === 0 && s[i] === 'D') {
      count++
    }

    if (s[i] === 'U') {
      position++
    }

    if (s[i] === 'D') {
      position--
    }

  }
  return count

}


let result = countingValleys(s);
console.log(result);

