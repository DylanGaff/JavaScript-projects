function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById('Height').value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById('Ride').innerHTML = Can_ride + " to ride.";
}

function Dog(Breed, Color, Age) {//creating a constructor function to make new objects
    this.Dog_Breed = Breed;// creating a variable to be used in new objects
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}
var Harley = new Dog("Great Dane", "White", 5);// creating an object using the above constructor function
var Peepers = new Dog("Pug", "Tan and black", 3);
var Ellie = new Dog("Boxer", "White and Black", 1);
function Dogfunc() {
   document.getElementById('New_and_This').innerHTML = 
   "Ellie is a" + Ellie.Dog_Breed + "Her colors are" + Ellie.Dog_Color 
   + "And she is" + Ellie.Dog_Age + "year old."
}

function myfunc() {
    document.getElementById('Nested_Function').innerHTML = number();// Displays the result of the function
    function number() {
        var Base = 12;// creating a starting number for the adding functions
        function add1() { Base += 1;}// adds 1 to the value of the base variable
        add1();// using the add1 function
        return Base;// returns the modified value for display
    }

}