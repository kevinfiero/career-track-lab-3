const fs = require('fs').promises;
const  { reader, writer, copy }  = require('./fileCopy');

describe('sandbox functions', () =>{
    afterAll(() => {
        fs.rm('./test2.txt');
        return fs.rm('./test.txt');
      });
    it('check file write and read', async() => {
        await writer('./test.txt', 'This is a test!');
        const result = await reader('./test.txt');
        const expected = 'This is a test!'
        expect(result).toEqual(expected);
    })
    it('check file copy', async() => {
        await copy('./test.txt', './test2.txt');
        const result = await reader('./test2.txt');
        const expected = 'This is a test!'
        expect(result).toEqual(expected);
    })




})