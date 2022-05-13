function Sentence() {
    var s1 = "These are";
    var s2 = "seperate strings";
    var s3 = "that i put together";
    var whole_sentence = s1.concat(s2,s3);
    document.getElementById('Sent').innerHTML = whole_sentence;
}

function Sfunc() {
    var sent = "Pizza is one of my favorite foods";
    var pizza = sent.slice(0,5);
    document.getElementById('return').innerHTML = pizza;
}

function upper() {
    let text = "it looks like im yelling!"
    let up = text.toUpperCase();
    document.getElementById('big').innerHTML = up;
}

function Look() {
    let sent = "Orange, Blue and yellow are my favortie colors.";
    let res = sent.search('yellow');//finds the desired text and displays where it is
    document.getElementById('found').innerHTML = res;
}

function func4() {
    var z = 32;
    var find = z.toString();//converts a number to a string
    document.getElementById('convert').innerHTML = find;
}

function slength() {
    var t = 123456.78901125
    document.getElementById('l').innerHTML = t.toPrecision(10);//set length of string to specific value
}

function fix() {
    var q =  7.98321
    var set = q.toFixed();//fixes to a set decimal point
    document.getElementById('nubs').innerHTML = set;
}

function val() {
    var L = "Hello Friend!";
    var set = L.valueOf();// returns the primal value of a string
    document.getElementById('test').innerHTML = set;
}