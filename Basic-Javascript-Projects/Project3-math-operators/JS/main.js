function addition() {//creating the function addition
    var add = 5 + 7;//makinf the variable 'add' equal to the result of 5+7
    document.getElementById('Math').innerHTML = "5 + 7 = " + add;//displaying add variable
}

function subtraction() {
    var sub = 20 - 7;
    document.getElementById('Minus').innerHTML = "20 - 7 = " + sub;
}

function division() {
    var div = 15 / 3;
    document.getElementById('Divide').innerHTML = "15 / 3 = " + div;
}

function multiplication() {
    var mul = 24 * 6;
    document.getElementById('Multiply').innerHTML = "24 * 6 = " + mul;
}

function allmath() {
    var maf = (5 + 9) * 7 / 2 - 1;
    document.getElementById('All').innerHTML = "(5 + 9) * 7 / 2 - 1 = " +maf;
}

function remainder() {
    var rema = 27 % 10;
    document.getElementById('Remain').innerHTML = "The remainder of 27 / 10 is:" + rema;
}

function negation() {
    var x = 7;
    document.getElementById('Negate').innerHTML = -x;
}

function increment(){
var y = 5;
y++;
document.getElementById('Inc').innerHTML = "5 incremented by 1 is :" + y
}

function decrement() {
var z = 3.5;
z--;
document.getElementById('Dec').innerHTML = "3.5 decremented by 1 is :" + z
}

window.alert(Math.random() * 100);

window.alert(Math.round(4.6) );