const n = [1012];

const findDigits = (n) => {
  let count = 0;
  const myArray = [...n + ''].map(n => +n)

  for (let i = 0; i < myArray.length; i++) {
    if (n % myArray[i] === 0)
      count++
  }

  return count
}


let result = findDigits(n)
console.log(result);