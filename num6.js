//Дано число m вывести все простые числа в диапазоне от 3 до m

function isprime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        } 
    }
  return true;
}

var m=87;

for(var i=3;i<=m;i+=2){
	if(isprime(i) === true){
		console.log(i)
	}
}