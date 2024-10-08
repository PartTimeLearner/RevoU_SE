let nama = "Halo";
const interestRate = 0.3
// interestRate = 1
console.log(nama);
console.log(interestRate)


//Primitive Types
let names = 'Adam'; //String Literal
let age = 22; //Number Literal
let isApproved = true; //Boolean literal
let firstname = undefined;
let selectedColor= null;

//Objects
let zoo = {
    animal: 'fish',
    tipe: 'Shark',
    age: 60
};

//dot notation
zoo.animal = 'bird';

//Bracket Notation
zoo['animal'] = 'Rhinos';

//Also Bracket Notation
let another = 'tipe';
zoo[another] = 'Cula Satu';
console.log(zoo.animal);
console.log(zoo['tipe']);

//Array
let sport = ['Badminton', 'Soccer', "Swimming"];
sport[1] = 2;
console.log(sport);
console.log(sport[0]);
console.log(sport[1]);
console.log(sport[2]);
console.log(sport.length);

//Function Performing a task
function greet(name, lastName){
    console.log('Hello '+ name + ' '+ lastName);
}
greet('Adam', 'Maulana');
greet('Tata', 'Amalia');

//Calculating a value
function square(number1, number2){
   return number1*number2;
}
console.log(square(2,3));


