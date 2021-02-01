export function quarterCount(x) {
    return x / .25;
}
export const coinCounter = (amount, array = []) => {
    //termination case
    if(amount == 0){
        return amount;
    } else if (amount/.25 >= 1) {
        const q = Math.floor(amount/.25);
        array.push(q)
        // return coinCounter((amount - q*.25).toFixed(2));
        return array;
    }
}

// const coinCounter = (amount) => {  e.g. 2.66
//     const array = []; 
//     if (amount == 0) { 
//       return amount; 
//     }
//     else if (amount/.25 >= 1) {
//       const quarters = Math.floor(amount/.25); 2.66/.25 = 10.64 => 10
//       console.log("quarters: " + quarters); quarters: 10
//       console.log((amount - quarters*.25).toFixed(2));  2.66 - (10*.25) = .16
//       return coinCounter((amount - quarters*.25).toFixed(2));
//     }
//     else if (amount/.10 >= 1) { 
//       const dimes = Math.floor(amount/.10);  .16/.10 = 1
//       console.log("dimes: " + dimes); dimes: 1
//       console.log((amount-dimes*.10).toFixed(2));  .16 - .1 = .06
//       return coinCounter((amount-dimes*.10).toFixed(2)); .06
//     }
//     else if (amount/.05 >= 1) {  
//       const nickels = Math.floor(amount/.05); .06/.06 = 1
//       console.log("nickels: " + nickels); nickles = 1
//       console.log((amount-nickels*.05).toFixed(2)); .06 - .05 = .01
//       return coinCounter((amount-nickels*.05).toFixed(2));
//     }
//     else if (amount/.01 >= 1) {  
//       const pennies = Math.floor(amount/.01); .01/.01 = 1
//       console.log("pennies: " + pennies); pennies: 1
//       console.log((amount-pennies*.01).toFixed(2));  .01 - (1 * .01) = 0.00
//       return coinCounter((amount-pennies*.01).toFixed(2));
//     } 
//   }