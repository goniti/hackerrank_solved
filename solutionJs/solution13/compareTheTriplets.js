const a=  [17, 28, 30];
const b = [99, 16, 8];

function compare(a,b){
  const output = [0,0];

  for (let i = 0; i < a.length; i++) {

    if (a[i] > b[i]) {
      output[0] = output[0] + 1;
    } else if (a[i] < b[i]) {
      output[1] = output[1] + 1;
    }
  }
  return output
}

const output = compare(a, b)


console.log(output);