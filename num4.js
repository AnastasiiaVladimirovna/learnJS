// Написать функцию isprime(),которая принимает число и возвращаает true -если число простое и false,если число составное
function isprime(n) {
    for (var i = 2; i < n - 1; i++) {
        if (n % i === 0) {
            return false;
        } 
    }
  return true;
}

console.log(isprime(5)); //true
console.log(isprime(8)); //false
console.log(isprime(13)); //true
console.log(isprime(99)); //false
console.log(isprime(117)); //false
