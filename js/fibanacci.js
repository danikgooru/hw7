var n = Number(prompt('Введіть число '));
document.write( 'Ваше результат= ' + fib(n) + '(цикл)');

function fib(n) {
    var a = 1;
    var b = 1;
    for (var i = 2; i < n; i++){
    var c = a + b;
    a = b;
    b = c;
}
 return b;
}


var n = Number(prompt ('Введіть число '));
document.write(  '<br>Ваше результат= ' + fib(n) + '(рекурсія)');

function fib(n) {
    if (n == 1) 
    return 1;
    if (n == 2) 
    return 1;
    else 
    return fib(n - 2) + fib(n - 1);
}