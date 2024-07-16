export const fizzBuzz = (num:number) => {
  if(num%5==0){
    return "Buzz"
  }

  if(num%3 == 0){
    return "Fizz"
  }

  return String(num)
}