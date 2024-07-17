import {fizzBuzz} from "./fizzbuzz"

describe("one if fizzbuzz",()=>{
  describe("first try",()=>{
    it("Given 1, should return '1'",()=>{
      const given = 1

      const expected = "1"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })


  })
})