//Написать функцию,которая получает число n и вернуть true либо false(являетс ли оно совершенным)

function perfect(n) {
    var sum = 0;
    for (var i = 1; i < n - 1; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum===n;
}

console.log(4, perfect(4)); //false
console.log(6, perfect(6)); //true
console.log(102, perfect(102)); //false
console.log(201, perfect(201)); //false
console.log(496, perfect(496)); //true
