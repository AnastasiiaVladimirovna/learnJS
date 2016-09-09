// Дано число n вывести его простые множители
var n = 98;
var i = 2;
var results=[];
while (n !== 1) {
    if (n % i === 0) {
        n = n / i;
        results.push(i);
    } else {
        i++;
    }
}
console.log(results);
