// 1! = 1
// 2! = 2 * 1!
// 3! 3 * 2!

/* factorial(3) = 3 * factorial(2)
factorial(n) = n * factorial(n-1) */
// 3! = 3 * 2!


const factorial =(num)=>{
 let result = 1;
 if(num>1){
 result = num * factorial(num-1);  
 }
 return result ;
};
console.log(factorial(3))