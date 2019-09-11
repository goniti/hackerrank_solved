//const unsorted = [1,2,100,12303479849857341718340192371,3084193741082937,3084193741082938,111,200];
const unsorted = [31415926535897932384626433832795,1,3,10,3,5];
const n = unsorted.length;

const bigSorting = (unsorted) => {
  const compare = (a, b) => {
    if (a < b)
      return -1;
    if (a > b)
      return 1;

    return 0;
  }
  unsorted.sort(compare)

  return unsorted
}


let result = bigSorting(unsorted);
console.log(result);
console.log(result.join("\n"));