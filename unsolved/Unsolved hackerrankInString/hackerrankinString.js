// hccaakkerrannkk

// if h => 1
// if a => 2
// if c => 1
// if k => 2
// if e => 1
// if r => 2
// if n => 1

//return yes

const s = 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt';

const hackerrankInString = (s) => {

    if ([...s].filter(l => l === 'h').length >= 1) {
        if ([...s].filter(l => l === 'a').length >= 2) {
            if ([...s].filter(l => l === 'c').length >= 1) {
                if ([...s].filter(l => l === 'k').length >= 2) {
                    if ([...s].filter(l => l === 'e').length >= 1) {
                        if ([...s].filter(l => l === 'r').length >= 2) {
                            if ([...s].filter(l => l === 'n').length >= 1) {
                                return 'YES'
                            } else {
                                return 'NO'
                            }
                        } else {
                            return 'NO'
                        }
                    } else {
                        return 'NO'
                    }
                } else {
                    return 'NO'
                }
            } else {
                return 'NO'
            }
        } else {
            return 'NO'
        }
    } else {
        return 'NO'
    }


}


let result = hackerrankInString(s)
console.log(result);
