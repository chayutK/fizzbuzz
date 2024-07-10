import {FizzBuzz} from './main'


describe("Normal FizzBuzz",()=>{
  describe("Second try",()=>{
    it("Give 1, should return '1'",()=>{
      const given = 1

      const result = FizzBuzz(given)

      expect(result).toEqual("1")
    })

    it("Give 2, should return '2'",()=>{
      const given = 2

      const result = FizzBuzz(given)

      expect(result).toEqual("2")
    })

    it("Give 3, should return '3'",()=>{
      const given = 3

      const result = FizzBuzz(given)

      expect(result).toEqual("Fizz")
    })

    it("Give 4, should return '4'",()=>{
      const given = 4

      const result = FizzBuzz(given)

      expect(result).toEqual("4")
    })

    it("Give 5, should return 'Buzz'",()=>{
      const given = 5

      const result = FizzBuzz(given)

      expect(result).toEqual("Buzz")
    })

    it("Give 6, should return 'Fizz'",()=>{
      const given = 6

      const result = FizzBuzz(given)

      expect(result).toEqual("Fizz")
    })

    it("Give 7, should return '7'",()=>{
      const given = 7

      const result = FizzBuzz(given)

      expect(result).toEqual("7")
    })

    it("Give 8, should return '8'",()=>{
      const given = 8

      const result = FizzBuzz(given)

      expect(result).toEqual("8")
    })
  })
})
