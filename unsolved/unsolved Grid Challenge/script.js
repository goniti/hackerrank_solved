const n = 2
const grid = ['kc','iu'];

//const n = 3
//const grid = ['uxf','vof','hmp']


const gridChallenge = (grid) => {
  const m = grid[0].length
  const arr = Array.from(Array(n), () => new Array(m));


  for (var i=0; i<m; i++) {
    for (var j = 0; j < m; j++) {
     if (grid[j] === undefined) {
      return 'NO'
     }
      arr[j][i] = grid[i][j];
    }
  }
  //copy array without reference.
  const arr2 = JSON.parse(JSON.stringify(arr));//
 //

  for (let k = 0; k < arr.length; k++) {
    arrSort = arr2[k].sort();

    arr2
    arr

    if (arrSort[k] !== arr[k][k]) {
      return 'NO'
    }
  }
  return 'YES'

}

let result = gridChallenge(grid)
result