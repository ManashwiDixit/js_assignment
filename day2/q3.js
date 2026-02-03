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
