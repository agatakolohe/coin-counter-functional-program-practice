import { quarterCount, coinCounter } from '../src/js/coinCalc.js';

test('should correctly count the number of quarters for a given dollar amount', () => {
    const amount = 2.50;
    expect(quarterCount(amount)).toEqual(10);
});

test('should correctly count the number of quarters fo a given amount', () => {
    const amount = 2.66;
    expect(coinCounter(amount)).toEqual([10]);
});


