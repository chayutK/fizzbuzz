export const fizzBuzz = (num:number)=>{
  const arr = [5,3]
  const ans = ["Buzz","Fizz"]
  for(var i=0;i < arr.length;i++){
    if (num%arr[i] == 0){
      return ans[i]
    }
  }
  return String(num)
}