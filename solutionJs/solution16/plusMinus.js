const arr = [-4, 3, -9, 0, 4, 1];
var n = arr.length;
function plusMinus(arr){

  let positive = 0;
  let negative = 0;
  let neutral = 0;
  for (let i = 0; i < n; i++) {

    if (arr[i] > 0) {
       positive += 1;
    }else if (arr[i] < 0){
       negative += 1;
    }
    else {
       neutral += 1;
    }
  }
  return [positive, negative, neutral];


}
const result = plusMinus(arr);

const p = result[0] / n;
const x = result[1] / n;
const z = result[2] / n;

console.log(p);
console.log(x);
console.log(z);