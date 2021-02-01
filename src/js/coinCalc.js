export function quarterCount(x) {
    return x / .25;
}
export const coinCounter = (amount, array = []) => {
    //termination case
    if (amount == 0) {
        return array;
    } else if (amount/.25 >= 1) {
        const q = Math.floor(amount/.25);
        array.push(q)
        return coinCounter((amount - q*.25).toFixed(2), array);
        // return array
    } else if (amount/.10 >= 1) {
        const d = Math.floor(amount/.10);
        array.push(d);
        return coinCounter((amount - d*.10).toFixed(2), array);
    } else if (amount/.05 >= 1) {
        const n = Math.floor(amount/.05)
        array.push(n);
        return coinCounter((amount - n*.05).toFixed(2), array);
    } else {
        const p = Math.floor(amount/.01)
        array.push(p);
        return coinCounter((amount - p*.01).toFixed(2), array);
    }
}


