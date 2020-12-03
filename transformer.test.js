const fs = require('fs').promises;
const  { transformer, writer, reader }  = require('./transformer');

describe('transform', () => {
    afterAll(() => {
        return fs.rm('./transform.txt');
      });
    it('test transform', async() => {
        await writer('./transform.txt', 'This is a test!');
        await transformer('./transform.txt');
        const result = await reader('./transform.txt')
        const expected = '!TSET A SI SIHT'
        expect(result).toEqual(expected);

    })



})