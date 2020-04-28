const concatenate = require('../src/strings');

describe('concatenate', () => {

    //beforeAll defines parameters to be in place before any of the test have run, but NOT beforeEach.
    //This is useful for passing in a value at the tart which should be mutated by iterative tests.
    /* We won't use on ehere.

    beforeAll ( () => {
    })
    */

    //Variables need to be defined before the test functions. 
    //Must be 'let', must be before the 'before' block.
    let string1;

    //The beforeEach block defines parameters to set before each test runs.
    beforeEach(() => {
        string1 = 'hello'
    })

    /* 
    afterEach and afterAll methods also exist. These can be used to 'clean up' after you run your teses. This is especialyl important if you're performing tests in a 'real' environment.
    These are sometimes called Teardown methods.
    */


    it('joins two strings', () => {
        const string2 = 'world'
        const expected = 'hello world'
        const result = concatenate(string1, string2);
        expect(result).toBe(expected);
    });

    it('joins two strings', () => {
        const string2 = 'Steven'
        const expected = 'hello Steven'
        const result = concatenate(string1, string2);
        expect(result).toBe(expected);
    });

    it('joins two strings', () => {
        const string2 = '7';
        const expected = 'hello 7'
        const result = concatenate(string1, string2);
        expect(result).toBe(expected);
    });

    it('joins two strings', () => {
        const string2 = '?';
        const expected = 'hello ?'
        const result = concatenate(string1, string2);
        expect(result).toBe(expected);
    })
});