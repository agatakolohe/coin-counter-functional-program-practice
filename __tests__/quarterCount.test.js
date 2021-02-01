import { quarterCount, coinCounter } from '../src/js/coinCalc.js';

test('should correctly count the number of quarters for a given dollar amount', () => {
    const amount = 2.50;
    expect(quarterCount(amount)).toEqual(10);
});

test('should correctly return 0 if amount is equal to 0', () => {
    const amount = 0;
    expect(coinCounter(amount)).toEqual([]);
});

// test('should correctly count the number of quarters fo a given amount', () => {
//     const amount = 2.66;
//     expect(coinCounter(amount)).toEqual([10]);
// });

test('should correctly count the number of quarters and dimes for a given amount', () => {
    const amount = 2.60;
    expect(coinCounter(amount)).toEqual([10, 1]);
});

test('should correctly count number of quarters, dimes and nickles for given amount', () => {
    const amount = 2.65;
    expect(coinCounter(amount)).toEqual([10, 1, 1]);
});

test('should correctly count number of quarters, dimes, nickles and pennies', () => {
    const amount = 2.67;
    expect(coinCounter(amount)).toEqual([10,1,1,2]);
});

