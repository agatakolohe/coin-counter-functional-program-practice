import { quarterCount } from './../src/js/quarterCount.js';


    
    test('should correctly count the number of quarters for a given dollar amount', () => {
        const amount = 2.50;
        expect(quarterCount(amount)).toEqual(10);
    });
