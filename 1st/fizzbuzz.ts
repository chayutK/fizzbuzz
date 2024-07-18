export const fizzBuzz = (num:number) => {
  const number = [5,3]
  const result = ["Buzz","Fizz"]
  for(var i = 0;i <number.length;i++){
    if(num == number[i]){
      return result[i]
    }
  }
  return String(num)
}