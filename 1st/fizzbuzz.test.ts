import exp from 'constants'
import {fizzBuzz} from './fizzbuzz'


describe('FizzBuzz',()=>{
  describe('normal fizzbuzz',()=>{
    it('given 1, should return "1"',()=>{
      const given = 1

      const result = fizzBuzz(given)

      expect(result).toEqual("1")
    })

    it("given 2, should return '2'",()=>{
      const given = 2

      const result = fizzBuzz(given)

      expect(result).toEqual("2")
    })
  })
})
