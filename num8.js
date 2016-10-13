// Написать функцию,которая возвращает факториал числа n

function factorial(n){
var result=1;
  for(var i=1;i<=n;i++){
    result=result*i;
    }
  return result;
} 
console.log(factorial(4),24);
console.log(factorial(5),120);
console.log(factorial(6),720);
console.log(factorial(0),1);
console.log(factorial(1),1);

