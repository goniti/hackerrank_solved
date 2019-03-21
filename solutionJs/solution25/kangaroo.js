const x1V1X2V2 = [0, 3, 4, 2];

const x1 = x1V1X2V2[0];
const v1 = x1V1X2V2[1];
const x2 = x1V1X2V2[2];
const v2 = x1V1X2V2[3];

function kangaroo(x1, v1, x2, v2) {

    if (v1 > v2 && (x1 - x2) % (v1 - v2) === 0) {
        return "YES";
    } else {
        return "NO";
    }

}
let result = kangaroo(x1, v1, x2, v2);
result