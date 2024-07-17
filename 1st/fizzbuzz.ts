export const fizzBuzz = (num:number)=>{
  const arr = [15,5,3]
  const ans = ["FizzBuzz","Buzz","Fizz"]
  for(var i=0;i < arr.length;i++){
    if (num%arr[i] == 0){
      return ans[i]
    }
  }
  return String(num)
}