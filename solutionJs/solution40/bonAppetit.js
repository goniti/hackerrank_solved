const n = 4; const k = 1; const bill = [3, 10, 2, 9]; const b = 7 //Bon Appetit
//const n = 4; const k = 1; const bill = [3, 10, 2, 9]; const b = 12 // 5

const bonAppeti = (bill,k,b) => {

//Approach 2
  const sumMyArray = bill.reduce((acc, cV) => acc + cV);
  const d = Math.abs((sumMyArray - bill[k]) / 2 -b)
  if (d === 0) {
    return 'Bon Appetit'
  }
  return d

}
let result = bonAppeti(bill,k,b)

result
/*
//Approach 1

  const myArray = [...bill];
  myArray.splice(k, 1);

  const sumMyArray = myArray.reduce((acc, cV) => acc + cV, 0);
  let r = Math.abs(sumMyArray / 2 - b)
  if (r === 0) {
    return 'Bon Appetit'
  }return r

*/

