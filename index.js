
let fname = "sonal";
console.log(fname);
let interestRate = 0.6;
interestRate = 1;
console.log(interestRate);
let lname = null;
console.log(typeof(lname));
let person ={
    name :'Sonal',
    age : 22
    };

    person.name = 'Ritika';
    person.age = 13;
    console.log(person.name);
    console.log(person.age);
    console.log(person);

    //  arrays...............

    let colors = ['Red','Green','Blue'];
    console.log(colors);
    colors[3] =1;
    console.log(colors);
    console.log(typeof(colors));

    // functions..............

    function greet(name){
     
        console.log("hello" +" " + name);
    }

    greet('sonal');

    function square(number){
        return number * number;
    }

    console.log(square(5));
