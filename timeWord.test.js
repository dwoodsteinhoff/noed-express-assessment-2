const {timeWord} = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('testing timeWord function', () =>{
  test('if it tells time in a string',() =>{
    expect(timeWord("01-14")).toEqual('one fourteen AM')
    expect(timeWord("12-00")).toEqual('noon')
    expect(timeWord("00-00")).toEqual('midnight')
    expect(timeWord("01-00")).toEqual("one  o' clock  AM")
    expect(timeWord("01-01")).toEqual('one oh one AM')
    expect(timeWord("14-13")).toEqual('two thirteen PM')
    expect(timeWord("02-60")).toEqual('please input valid military time')
    expect(timeWord("24-00")).toEqual('please input valid military time')
  })
}) 