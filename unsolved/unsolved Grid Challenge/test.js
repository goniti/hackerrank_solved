// MATRICE Array.from(Array(5), () => new Array(3)); Row5 Cols3


//const n = 3
//const grid = ['abc', 'ade', 'efg']
//const n = 6
//const grid = ['abctgp', 'adedke', 'efgcld', 'kfcdwz', 'lrbnjh', 'ntmtfr']

const n = 3
const grid = ['mpx', 'abc', 'wlm']
const row = n
const cols = grid[0].length


//Row                //Cols
const arr = Array.from(Array(row), () => new Array(cols));
arr
//        C0                      C1                      C2
arr[0][0] = grid[0][0]; arr[0][1] = grid[1][0]; arr[0][2] = grid[2][0];//R0
arr[1][0] = grid[0][1]; arr[1][1] = grid[1][1]; arr[1][2] = grid[2][1];//R1
arr[2][0] = grid[0][2]; arr[2][1] = grid[1][2]; arr[2][2] = grid[2][2];//R2
console.log(arr);

const arr1 = arr

for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
    arr1[j][i] = grid[i][j];
    console.log(j);
    console.log(i);

  }
}

console.log(arr1);


// console.log(grid[0][0]);
// console.log(grid[1][0]);
// console.log(grid[2][0]);
 //--------------------------------

// console.log(grid[0][1]);
// console.log(grid[1][1]);
// console.log(grid[2][1]);

//--------------------------------
// console.log(grid[0][2]);
// console.log(grid[1][2]);
// console.log(grid[2][2]);


