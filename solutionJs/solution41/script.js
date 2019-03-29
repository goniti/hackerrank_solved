const d1 = 9;
const m1 = 6;
const y1 = 2015;
const d2 = 6;
const m2 = 6;
const y2 = 2015;

const libraryFine = (d1, m1, y1, d2, m2, y2) => {

  //step1
  if (y2 > y1) {
    return 0
  } else if (y2 !== y1) {
    return Math.abs(10000 * (y2 - y1));
  } else {

    //step2
    if (m2 > m1) {
      return 0
    } else if (m2 !== m1) {
      return Math.abs(500 * (m2 - m1));
    } else {

      //step3
      if (d2 >= d1) {
        return 0
      } else {
        return Math.abs(15 * (d2 - d1));
      }
    }
  }
}

let result = libraryFine(d1, m1, y1, d2, m2, y2);
console.log(result);

