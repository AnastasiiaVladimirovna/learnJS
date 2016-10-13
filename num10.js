// Написать ф-цию,которая возвращает десятичную запись числа в обратном порядке, без преобразования к строке.
function getLastDigit(a){
return a%10;
}

function dropLastDigit(b){
return (b-b%10)/10;
}

function addDigitToEnd(c,d){
	return c*10+d
}

function reverse(n){
var result=0;
while(n!=0){
	result=addDigitToEnd(result,getLastDigit(n));
	n=dropLastDigit(n);
	// result = result*10 + n%10;
	// n = (n-n%10)/10;
}
return result;
}

console.log(getLastDigit(123), 3);
console.log(getLastDigit(125), 5);
console.log(getLastDigit(7), 7);
console.log(dropLastDigit(122), 12);
console.log(dropLastDigit(11), 1);
console.log(dropLastDigit(987), 98);
console.log(addDigitToEnd(12,3), 123);
console.log(addDigitToEnd(90,2), 902);
console.log(addDigitToEnd(6,5), 65);
console.log('----');

for (var i = 0; i<10; i++){
	var n = Math.floor(Math.random() * 10000);
	var reversen = parseInt(n.toString().split('').reverse().join(''));
	console.log(reverse(n), reversen);
}