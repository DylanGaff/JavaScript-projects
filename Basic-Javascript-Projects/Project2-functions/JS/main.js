function My_First_Function() { //creating a name for my function
    var str = "This is the button text!"//making a variable called 'str' and setting its
    str += "This is added button text!";//value equal to the strings
    document.getElementById('Button_Text').innerHTML = str;//telling the javascript to display the value of
}//str variable when an event occurs