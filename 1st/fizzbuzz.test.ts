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

    it("Given 7, should return '7'",()=>{
      const given = 7

      const expected = "7"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 8, should return '8'",()=>{
      const given = 8

      const expected = "8"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 9, should return 'Fizz'",()=>{
      const given = 9

      const expected = "Fizz"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 10, should return 'Buzz'",()=>{
      const given = 10

      const expected = "Buzz"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 11, should return '11'",()=>{
      const given = 11

      const expected = "11"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given, should return 'Fizz'",()=>{
      const given = 12

      const expected = "Fizz"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 13, should return '13'",()=>{
      const given = 13

      const expected = "13"

      const actual = fizzBuzz(given)

      expect(actual).toEqual(expected)
    })

    it("Given 14, should return '14'",()=>{
      const given = 14

      const expected = "14"

      const actual =fizzBuzz(given)

      expect(actual).toEqual(expected)
    })
  })
})