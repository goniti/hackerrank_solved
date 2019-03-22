const n = 6;
const p = 5;

function pageCount(n, p) {
  let m = n;
  if (n % 2 === 0) {
    m++;
  }
  let count = 0;
  const book = Array.apply(0, Array(m + 1)).map(function () { return count++; });
  const pages = [];

  for (let i = 0; i < book.length; i++) {
    if (book[i] === p) {
      pages.push(Math.floor(i / 2));
    }
  }

  book.reverse()
  for (let j = 0; j < book.length; j++) {
    if (book[j] === p) {
      pages.push(Math.floor(j / 2));
    }
  }

  return Math.min(...pages)

}

const result = pageCount(n, p);
console.log(result);