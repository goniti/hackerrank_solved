const s = 'rhackerank' //NO
//const s = 'hhhackkerbanker' //NO
//const s = 'hhaacckkekraraannk'; // YES
//const s = 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'; //NO
//const s = 'hereiamstackerrank'; //yes


const hackerrankInString = (s) => {
    const words = 'hackerrank'
    const order = []
    let count = 0

    for (let i = 0; i < words.length; i++) {
        const letter = s.indexOf(words[i])

        order.push(letter)
        s = s.slice(letter)

        if (words[i] === words[i - 1]) {
            s = s.slice(s.indexOf(words[i], (letter + 1)))
        }

        if ([...s][0] === words[i]) {
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
