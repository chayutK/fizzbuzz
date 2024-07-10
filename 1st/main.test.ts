import {FizzBuzz} from './main'


describe("Normal FizzBuzz",()=>{
  describe("Second try",()=>{
    it("Give 1, should return '1'",()=>{
      const given = 1

      const result = FizzBuzz(1)

      expect(result).toEqual("1")
    })

    it("Give 2, should return '2'",()=>{
      const given = 2

      const result = FizzBuzz(2)

      expect(result).toEqual("2")
    })
  })
})
