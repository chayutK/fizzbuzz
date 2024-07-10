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

    it("Give 9, should return '9'",()=>{
      const given = 9

      const result = FizzBuzz(given)

      expect(result).toEqual("Fizz")
    })

    it("Give 10, should return '10'",()=>{
      const given = 10

      const result = FizzBuzz(given)

      expect(result).toEqual("Buzz")
    })

    it("Give 11, should return '11'",()=>{
      const given = 11

      const result = FizzBuzz(given)

      expect(result).toEqual("11")
    })

    it("Give 12, sgould return 'Fizz",()=>{
      const given = 12

      const result = FizzBuzz(given)

      expect(result).toEqual("Fizz")
    })

    it("Give 13, should return '13'",()=>{
      const given = 13

      const result = FizzBuzz(given)

      expect(result).toEqual("13")
    })

    it("Give 14,should return '14'",()=>{
      const given = 14

      const result = FizzBuzz(given)

      expect(result).toEqual("14")
    })

    it("Give 15, should return 'FizzBuzz'",()=>{
      const given = 15

      const result = FizzBuzz(given)

      expect(result).toEqual("FizzBuzz")
    })
  })
})
