const { fetchData } = require('./nodeFetch');

describe('fetchData', () => {
    it('return Futurama data', async() => {
        const result = await fetchData();
        const expected =  [ {
            character: expect.any(String),
            quote: expect.any(String),
            image: expect.any(String)
          }];
        expect(result).toEqual(expected);
    })



})