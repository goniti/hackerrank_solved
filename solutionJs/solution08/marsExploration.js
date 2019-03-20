const s = 'SOSSPSSQSSOR'


const marsExploration = (s) => {
  let alteredLetter = 0;
  const segment = s.match(/.{1,3}/g);

  for (let i = 0; i < segment.length; i++) {

    if (segment[i][0] !== 'S') {
      alteredLetter++
    }
    if (segment[i][1] !== 'O') {
      alteredLetter++
    }
    if (segment[i][2] !== 'S') {
      alteredLetter++
    }
  }

  return alteredLetter
}

let result = marsExploration(s)
console.log(result);
