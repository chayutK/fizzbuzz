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
  })
})
