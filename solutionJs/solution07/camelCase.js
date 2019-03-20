const s = 'saveChangesInTheEditor';
const camelcase = (s) => {
  const regex = /[A-Z]/g;
  if (s.match(regex) === null) {
    return 1
  }
  return s.match(regex).length + 1;
}

let result = camelcase(s)
console.log(result);
