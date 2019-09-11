//const s = 'hackerworld';
//const s = 'hereiamstackerrank';
const s = "rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt";

const hackerrankInString = (s) => {
  const str = 'hackerrank';
  const letter = [...str];
  const arr = [];
  const arr1 = [];
  const obj = {};
  const obj1 = {};


  for (let i = 0; i < str.length; i++) {
    obj[letter[i]] = 1
  }
  arr.push(obj)
  for (let j = 0; j < s.length; j++) {
    obj1[s[j]] = 1

  }
  arr1.push(obj1)
  for (let k = 0; k < str.length; k++) {
    if (obj[letter[k]] >= 1 && arr1[k]=== arr[k]) {
      obj[letter[k]] += 1
    }

  }

}

let result = hackerrankInString(s)
console.log(result);

