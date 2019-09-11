//const s = 'hackerworld';
//const s = 'hereiamstackerrank';
const s = "rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt";

const hackerrankInString = (s) => {




}






/*


let count = 0;
const str = 'hackerrank'; //str
const resultStr = [];
const resultS = [];

const charCount = (str, letter) => {
  let letterCount = 0;
  for (let c = 0; c < str.length; c++) {
    if (str.charAt(c) === letter) {
      letterCount += 1;
    }
  }
  return letterCount;

*/





//letter
for (let i = 0; i < str.length; i++) {
  const countStr = charCount(str, str[i]);
  //console.log(countStr.subSequence(str[i], s[s.length-1]));
  resultStr.push(countStr)
}
//letter
for (let j = 0; j < str.length; j++) {
  const countS = charCount(s, str[j]);
  console.log(str[j]);
  console.log(str.indexOf(str[j]));
  resultS.push(countS)
}

//in string s i have , 2h / 3a  / 1c  / 2k  / 1e / 4r / 4r / 3a / 1n / 2k
console.log(resultS);
// in string str i have 1h / 2a / 1c / 2k / 1e / 2r / 2r / 2a / 1n / 2k
console.log(resultStr);


for (let k = 0; k < str.length; k++) {
  if (resultS[k] - resultStr[k] >= 0) {
    count++
  }
}

if (count === str.length) {
  return 'YES'
}
return 'NO'
}

let result = hackerrankInString(s)
console.log(result);



/*

 const word = 'hackerrank';
    const wordSpread = [...word];
    const n = wordSpread.length;
    for (let i = 0; i < n; i++) {
        const missingSearch = s.search(wordSpread[i])
        if (missingSearch < 0) {
            return 'NO'
        }
    }
    return 'YES'

*/



/*
const hackerrankInString = (s) => {
  let count = 0;
  const str = 'hackerrank'; //str
  const resultStr = [];
  const resultS = [];

  const charCount = (str, letter) => {
    let letterCount = 0;
    for (let c = 0; c < str.length; c++) {
      if (str.charAt(c) === letter) {
        letterCount += 1;
      }
    }
    return letterCount;
  }

  for (let i = 0; i < str.length; i++) {
    const countStr = charCount(str, str[i]);
    resultStr.push(countStr)
  }

  for (let j = 0; j < str.length; j++) {
    const countS = charCount(s, str[j]);
    resultS.push(countS)
  }

  for (let k = 0; k < str.length; k++) {
    if (resultS[k] - resultStr[k] >= 0) {
      count++
    }
  }

  if (count === str.length) {
    return 'YES'
  }
  return 'NO'
}

let result = hackerrankInString(s)
console.log(result);

*/