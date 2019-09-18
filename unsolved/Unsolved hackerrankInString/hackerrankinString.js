//------------------------------
////////// DON'T WORK \\\\\\\\\
//------------------------------
// const s = 'rhackerank' //NO
// const s = 'hhhackkerbanker' //NO

//------------------------------
//////////// WORK \\\\\\\\\\\\\\
//------------------------------
const s = 'hhaacckkekraraannk'; // YES
//const s = 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'; //NO


const hackerrankInString = (s) => {
    const words = 'hackerrank'
    const order = []
    let count = 0

    for (let i = 0; i < words.length; i++) {
        order.push(s.indexOf(words[i]))
        s = s.slice(s.indexOf(words[i]))
    }

    for (let j = 0; j < order.length; j++) {
        if (order[j] >= 0) {
            count++
        }
    }

    if (count === order.length) {
        return 'YES'
    }

    return 'NO'

}


let result = hackerrankInString(s)
console.log(result);
