import {fizzBuzz} from "./fizzbuzz"

describe("1 if FizzBuzz",()=>{
  describe("Second try",()=>{
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
  })
})