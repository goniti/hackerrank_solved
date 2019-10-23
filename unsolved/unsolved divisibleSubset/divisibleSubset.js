const k = 4
const s = [19, 10, 12, 10, 24, 25, 22]
const n = s.length

const nonDivisibleSubset = (k, s) => {

    var groups = [];

    for (var i = 0; i < s.length; i++) {
        i
        for (let j = 1; j < s.length; j++) {



            console.log(s[i] + s[j]);



            //groups.push(s.slice(i+j, i+j +2));

        }

    }


    console.log(groups);


}

let result = nonDivisibleSubset(k, s)
console.log(result);
