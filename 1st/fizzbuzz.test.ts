import {fizzBuzz} from "./fizzbuzz"

describe("one if fizzbuzz",()=>{
  describe("first try",()=>{
    it("Given 1, should return '1'",()=>{
      const given = 1

      const expected = "1"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 2, should return '2'",()=>{
      const given = 2

      const expected = "2"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 3, should return 'Fizz'",()=>{
      const given = 3

      const expected = "Fizz"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 4, should return '4'",()=>{
      const given = 4

      const expected = "4"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 5, should return 'Buzz'",()=>{
      const given = 5

      const expected = "Buzz"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 6, should return 'Fizz'",()=>{
      const given = 6

      const expected = "Fizz"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })
  })
})