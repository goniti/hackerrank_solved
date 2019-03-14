const arr = [1, 4, 5, 7,9, 12];
const v = 4;
const n = arr.length;

function introTutorial(v,arr) {

const IndexNumber = (e) => {
  return e === v;
}

return arr.findIndex(IndexNumber);

}


let result = introTutorial(v,arr)
console.log(result);