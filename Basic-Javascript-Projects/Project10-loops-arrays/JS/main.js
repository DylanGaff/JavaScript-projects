function Call_Loop() {
    let num = ""
    let X = 1;
    while(X < 24) {
        num += "<br/>" + X
        X++;
    }
    document.getElementById('Loop').innerHTML= num;

}

function for_loop() {
    var dogz = ["Harley", "Ellie", "Peepers"];
    var con = "";
    var x ;
    for (let x = 0; x < dogz.length; x++) {
    con += dogz[x] + '<br/>';
    }
    document.getElementById('List_of_dogz').innerHTML = con;
}

function array_func() {
    var killer = [];
    killer[1] = " HillBilly";
    killer[2] = " Blight";
    killer[3] = " Bubba";
    document.getElementById('array').innerHTML = "My favorite Dead by Daylight killer is" + killer[2] + ".";
}

const bike = {type:" mountain", brand:" mongoose", color:" purple"};
function constant_func() {
    document.getElementById('constant').innerHTML = "My favorite brand of bike as a kid was" + bike.brand + ".";
}

document.getElementById('add').innerHTML = addn("Dylan");

function addn(name) {
    return "Im" + name;
}

let dog = {
    breed: 'pitbull ',
    color: 'White ',
    age: '7 ',
    description: function(){ 
        return 'This dog is a ' + this.color + this.breed + 'and they are ' + this.age + 'years old.';
    }
}

document.getElementById('Dogdes').innerHTML = dog.description();

let text = "";
for (let x = 0; x < 20; x++) {
    if (x === 7) {break; }
    text += "The number is" + x + '<br>';
}
document.getElementById('broke').innerHTML = text;

let txt = "";
for (let x = 0; x < 20; x++) {
    if (x === 7) {continue; }
    txt += "The number is" + x + '<br>';
}
document.getElementById('cont').innerHTML = txt;
