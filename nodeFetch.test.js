const { fetchData } = require('./nodeFetch');

describe('fetchData', () => {
    it('return Futurama data', async() => {
        const result = await fetchData('http://futuramaapi.herokuapp.com/api/quotes/1');
        const expected =  [ {
            character: expect.any(String),
            quote: expect.any(String),
            image: expect.any(String)
          }];
        expect(result).toEqual(expected);
    })

    it('return Rick and Morty data', async() => {
        const result = await fetchData('https://rickandmortyapi.com/api/character/');

    })
})