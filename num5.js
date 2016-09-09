// Написать функцию isprime(),которая принимает число и возвращаает true -если число простое и false,если число составное.Улучшить решение,учитывая тот факт,что число не может иметь делители превосходящие квадратный корень из этого числа.
function isprime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        } 
    }
  return true;
}
console.log(isprime(2)); //true
console.log(isprime(3)); //true
console.log(isprime(4)); //false
console.log(isprime(5)); //true
console.log(isprime(8)); //false
console.log(isprime(13)); //true
console.log(isprime(99)); //false
console.log(isprime(117)); //false
