const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
const word = 'abc'


const designerPdfViewer = (h, word) => {
    let highest = 0

    //  Create Function for get object value by object key
    const getValueByKey = (object, key) => {
        return Object.entries(object).find(i => i[0] === key);
    }

    //  Create Empty Object
    const obj = {};

    //  Create Array with 26 letters (a-z)
    const alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i))
    //  Unicode_characters start from 97 = a lowercase or from 65 for get uppercase
    const n = alphabet.length

    // Create loop for complete obj //  key:value = alphabet:h
    for (var i = 0; i < n; i++) {
        obj[alphabet[i]] = h[i];
    }

    // Check which letter has the highest value
    for (let j = 0; j < word.length; j++) {
        const value = [...getValueByKey(obj, word[j])]

        if (value[1] > highest) {
            highest = value[1]
        }
    }
    return highest * word.length
}

// const designerPdfViewer = (h, word) => {
//     const alphabet = [...Array(26).keys()].map((_, i) => String.fromCharCode(97 + i))
//     const obj = Object.fromEntries(alphabet.map((_, i) => [alphabet[i], h[i]]))
//     //  Create Function for get object value by object key
//     const getValueByKey = (object, key) => {
//         return Object.entries(object).find(i => i[0] === key);
//     }
//     let highest = 0

//     for (let j = 0; j < word.length; j++) {
//         const value = [...getValueByKey(obj, word[j])]

//         if (value[1] > highest) {
//             highest = value[1]
//         }
//     }
//     return highest * word.length
// }

let result = designerPdfViewer(h, word)
console.log(result);
