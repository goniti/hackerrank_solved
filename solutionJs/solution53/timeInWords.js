const h = 3
const m = 00

const timeInWords = (h, m) => {
    const time = {};
    const number = [...Array(60).keys()]
    const names = ["o' clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty", "forty one", "forty two", "forty three", "forty four", "quarter", "forty six", "forty seven", "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine"]


    for (let i = 0; i < number.length; i++) {

        time[number[i]] = names[i];

    }
    //o'clock
    if (m === 0) {
        return time[h] + " " + time[m];

    }

    //past
    if (m <= 30) {
        if (m === 15 || m === 30) {
            return time[m] + " past " + time[h];
        }

        if (m > 1) {
            return time[m] + " minutes past " + time[h];
        } else {
            return time[m] + " minute past " + time[h];
        }

    }

    // to
    if (m > 30) {
        h = h + 1

        if (m === 45) {
            return time[m] + " to " + time[h];
        }
        m = 60 - m

        if (m > 1) {
            return time[m] + " minutes to " + time[h];
        } else {
            return time[m] + " minute to " + time[h];
        }

    }

}

let result = timeInWords(h, m)
console.log(result);
