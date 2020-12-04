const { getCharacter, getManyCharacters } = require('./rickAndMortyAPI');
const fetch = require('node-fetch');
const mockResponse = require('./rickAndMortyAPIDataOneCharacter.json');
jest.mock('node-fetch');

describe('getCharacter', () => {
    it('get character with id = 2', async() => {
      fetch.mockResolvedValue({json: () => Promise.resolve(mockResponse)});
 
        const result = await getCharacter('https://rickandmortyapi.com/api/character/', 2);
        const expected =  {
            name: expect.any(String),
            status: expect.any(String),
            species: expect.any(String)
          };
        expect(result).toEqual(expected);
    })
    it('get character with id = 2, 5, 10', async() => {
      fetch.mockResolvedValue({json: () => Promise.resolve(mockResponse)});

        const result = await getManyCharacters('https://rickandmortyapi.com/api/character/', [2, 5, 10]);
        const expected =  [{
            name: expect.any(String),
            status: expect.any(String),
            species: expect.any(String)
          },
          {
            name: expect.any(String),
            status: expect.any(String),
            species: expect.any(String)
          },
          {
            name: expect.any(String),
            status: expect.any(String),
            species: expect.any(String)
          },
        ];
        expect(result).toEqual(expected);
    })
})