import {fizzBuzz} from "./fizzbizz"

describe("Normal FizzBuzz",()=>{
  describe("3rd try",()=>{
    it("Given 1, Should return '1'",()=>{
      const given = 1

      const expected = "1"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })
  })
})