//const str = 'hackerworld';
const str = 'hereiamstackerrank'
//const str = 'rwrangdgkhacdfggdgdffdgfdkedfgfdgfdgr';
//const str = 'hereiamstackerrank';
//const str = 'hsdfdsfacdsfdsksfdasfdsferasdfdsfdsnkfdsfdsfr'


const hackerrankInString = (str) => {
  const text = 'hackerrank';
  const n = text.length;
  let itCount = 0;

const strO = {};
for (let i = 0; i < str.length; i++) {
  strO[str[i]] = strO[str[i]] || 0
  strO[str[i]]++

}
const textO = {};
for (let j = 0; j < text.length; j++) {
  textO[text[j]] = textO[text[j]] || 0
  textO[text[j]]++

}

  const strKeys = Object.keys(strO)
  const strValues = Object.values(strO)
  const strEntries = Object.entries(strO)
  const textKeys = Object.keys(textO)

  const textValues = Object.values(textO)
  const textEntries = Object.entries(textO)


  for (const iterator of textKeys) {
    if (iterator <= strKeys) {
      itCount += 1
    }
  }

  if (i ) {
    return 'YES'
  }
  return 'NO';
}

let result = hackerrankInString(str)
console.log(result);

/*includes (intruced in ES6)
substring = "hackerrank";
const test = [...substring];
let x = [...str].sort();
let y = test.sort();

console.log(x.toString().includes(y.toString()));
*/