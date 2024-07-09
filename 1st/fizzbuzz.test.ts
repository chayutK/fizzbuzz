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

    it("given 8, should return '8'",()=>{
      const given = 8

      const result = fizzBuzz(given)

      expect(result).toEqual("8")
    })

    it("given 9, should return 'Fizz'",()=>{
      const given = 9

      const result = fizzBuzz(given)

      expect(result).toEqual("Fizz")
    })

    it("given 10, should return 'Buzz'",()=>{
      const given = 10

      const result = fizzBuzz(given)

      expect(result).toEqual("Buzz")
    })

    it("given 1, should return '11'",()=>{
      const given = 11

      const result = fizzBuzz(given)

      expect(result).toEqual("11")
    })

    it("given 12, should return 'Fizz'",()=>{
      const given = 12

      const result = fizzBuzz(given)

      expect(result).toEqual("Fizz")
    })
  })
})
