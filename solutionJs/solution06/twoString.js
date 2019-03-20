const s1 = 'aardvark';
const s2 = 'apple';

const twoStrings = (s1, s2) => {
  const lettersTest = ['a', 'e', 'i', 'o', 'u', 's']
  const s1TestResult = [];
  const s2TestResult = [];

  for (const i of lettersTest) {
    const s1Checked = s1.search(i);
    const s2Checked = s2.search(i);
    s1TestResult.push(s1Checked)
    s2TestResult.push(s2Checked)
  }

  for (let i = 0; i < lettersTest.length; i++) {
    if (s1TestResult[i] >= 0 && s2TestResult[i] >= 0) {
      return 'YES'
    }
  }
  return 'NO'
}

let result = twoStrings(s1, s2);
console.log(result);