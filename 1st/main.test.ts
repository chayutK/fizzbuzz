import {FizzBuzz} from './main'


describe("Normal FizzBuzz",()=>{
  describe("Second try",()=>{
    it("Give 1, should return '1'",()=>{
      const given = 1

      const result = FizzBuzz(1)

      expect(result).toEqual("1")
    })
  })
})
