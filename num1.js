// Написать ф-цию НОД,кот будет по алгоритму Евклида находить НОД (а,в)
var a=99;
var b=78;
function evklid(m,n){
	if (n===0){
		return  m;
	}else {
	 	return evklid(n,m%n);
	}
}
console.log (evklid(a,b));