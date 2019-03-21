const grades = [73, 67, 38, 33]
const n = grades.length;

const gradingStudents = (grades, n) => {
  const note = [];

  for (let i = 0; i < n; i++) {
    let e = grades[i]

    if (e < 38 || e % 5 === 0) {
      note.push(e)
    } else {
      for (let j = 0; j < 2; j++) {
        e = e + 1
        if (e % 5 === 0) {
          note.push(e)
        }
      }
      if (e % 5 !== 0 && (e - 1) % 5 !== 0) {
        e = e - 2
        note.push(e)
      }
    }
  }
  return note
}

let result = gradingStudents(grades, n);
console.log(result);
