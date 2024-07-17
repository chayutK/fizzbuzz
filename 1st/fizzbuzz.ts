export const fizzBuzz = (num:number)=>{
  const arr = [5,3]
  const ans = ["Buzz","Fizz"]
  for(var i=0;i < arr.length;i++){
    if (arr[i] == num){
      return ans[i]
    }
  }
  return String(num)
}