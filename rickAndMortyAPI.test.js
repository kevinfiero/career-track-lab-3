const { getCharacter } = require('./rickAndMortyAPI');

describe('getCharacter', () => {
    it('get character with id = 2', async() => {
        const result = await fetchData('https://rickandmortyapi.com/api/character/');
        const expected =  [ {
            name: expect.any(String),
            status: expect.any(String),
            species: expect.any(String)
          }];
        expect(result).toEqual(expected);
    })
})