import {fizzBuzz} from "./fizzbizz"

describe("Normal FizzBuzz",()=>{
  describe("3rd try",()=>{
    it("Given 1, Should return '1'",()=>{
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
  })
})