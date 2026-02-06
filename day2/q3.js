<<<<<<< HEAD
let x=5;
function first(){
    console.log(x); //line1
    let y = 10;
    function second(){
        console.log(y); //line2
        console.log(z); //line3
        let z = 20;
    }
    second();

}
first();
console.log(y);//line4
=======
var person = {
  name: 'Abhishek',
  print: function () {
    console.log('Name is: ', this.name); // this.name means person.name in this context
  }
};
var p = person.print;
p(); // won't 
>>>>>>> c7b88e7 (day3 assignment uploaded)
