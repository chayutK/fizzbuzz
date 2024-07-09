import {fizzBuzz} from './fizzbuzz'


describe('FizzBuzz',()=>{
  describe('normal fizzbuzz',()=>{
    it('given 1, should return "1"',()=>{
      const given = 1

      const result = fizzBuzz(given)

      expect(result).toEqual("1")
    })
  })
})
