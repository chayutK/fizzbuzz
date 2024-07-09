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

    it("given 3,should return 'Fizz'",()=>{
      const given = 3

      const result = fizzBuzz(given)

      expect(result).toEqual("Fizz")
    })

    it("given 4, should return '4",()=>{
      const given = 4

      const result = fizzBuzz(given)

      expect(result).toEqual("4")
    })

    it("given 5, should return 'Buzz'",()=>{
      const given = 5

      const result = fizzBuzz(given)

      expect(result).toEqual("Buzz")
    })

    it("given 6, should return 'Fizz'",()=>{
      const given = 6

      const result = fizzBuzz(given)

      expect(result).toEqual("Fizz")
    })

    it("given 7, should return '7'",()=>{
      const given = 7

      const result = fizzBuzz(given)

      expect(result).toEqual("7")
    })
  })
})
