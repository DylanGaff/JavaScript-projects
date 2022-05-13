var x = 10;

function myfunc() {
    var y = 12;
    console.log(20 + y);

}

function test() {
    console.log(17 + y);
}

myfunc();
test()


function myfunc() {
    if (new Date().getHours() < 20) {//checks the server to see the time and compares it to the requested value
        document.getElementById('Time').innerHTML = "Still got time";
    }
}

function Tobacco() {
    var Age = 22;
    if (Age > 21);
    document.getElementById('Bad').innerHTML = "You can Purchase Tobacco";
}

function Age_restrict() {
    Age = document.getElementById('Age').value;//gets the inputed age value and sets it to the 'Age' Variable
    if (Age >= 18){// checks the condition of the variable
    Enter = "You can enter the site!"
    }
    else {//this happens if the previous output is false
        Enter = "You are not old enough to enter!"
    }
    document.getElementById('Restrict').innerHTML = Enter;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Its morning time!";
    }
    else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}