const xyz = [1, 2, 3]

const catAndMouse = (xyz) => {
  let xR = Math.abs(xyz[0] - xyz[2]);
  let yR = Math.abs(xyz[1] - xyz[2]);
  if (xR < yR) {
    return 'Cat A'
  } else if (xR > yR) {
    return 'Cat B'
  } else {
    return 'Mouse C'
  }
}
let result = catAndMouse(xyz)
console.log(result);


//--------- HackerRank ---------

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//   const q = parseInt(readLine(), 10);

//   for (let qItr = 0; qItr < q; qItr++) {
//       const xyz = readLine().split(' ').map(Number);
//       let result = catAndMouse(xyz);
//       ws.write(result + "\n");
//   }

//   ws.end();
// }