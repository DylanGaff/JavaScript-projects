document.write(typeof 4);
document.write('&nbsp;');

function Number() {
    document.getElementById('Numb').innerHTML = isNaN(25);
}

function WordFunc() {
    document.getElementById('Word').innerHTML = isNaN('word');
}

function Infini() {
    document.getElementById('Infin').innerHTML = 3E310;
}

function NegInfin() {
    document.getElementById('Ninfin').innerHTML = -4E312;
}

document.write(2 < 7);
document.write('&nbsp;');

document.write(2 > 7);
document.write('&nbsp;');

console.log(7 + 2);
document.write('&nbsp;');

console.log(10 > 23);
document.write('&nbsp;');

document.write(10 == 10);
document.write('&nbsp;');

document.write(10 == 11);
document.write('&nbsp;');

var a = 10;
var b = 10;
document.write(a === b);
document.write('&nbsp;');

var c = 10;
var d = 'ten';
document.write(c === d);
document.write('&nbsp;');

var e = 'egg';
var f = 7;
document.write(e === f);
document.write('&nbsp;');

var g = 'triangle';
var h = 'square';
document.write(g === h);
document.write('&nbsp;');

document.write(5 > 2 && 10 > 8);
document.write('&nbsp;');

document.write(5 < 2 && 10 > 2);
document.write('&nbsp;');

document.write(7 > 3 || 3 > 10);
document.write('&nbsp;');

document.write(7 < 1 || 3 > 10);
document.write('&nbsp;');

function notfunc() {
    document.getElementById('Not').innerHTML = !(5 > 10);
}

function notfunc2() {
    document.getElementById('Yea').innerHTML = !(5 < 10);
}

var i = "ten"
var j = 10
document.write(i + j);s
