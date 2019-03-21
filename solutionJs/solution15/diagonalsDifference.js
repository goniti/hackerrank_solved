const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

function calculateDiagonals(arr){
  var n = arr.length;
  var primaryDiagonal = 0;
  var secondaryDiagonal = 0;
  for(var i=0; i<n; i++){
      for(var j=0; j<n; j++){
          if(i === j) {
            primaryDiagonal += arr[i][j];
          }

          if(i + j === n - 1){
            secondaryDiagonal += arr[i][j];
          }
      }
  }
  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

const sumdiag = calculateDiagonals(arr);
console.log(sumdiag);
