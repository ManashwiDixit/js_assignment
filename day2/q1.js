let calculator = {
    num1:0,
    num2:0,
    
    read: function(){
        this.num1 = Number(prompt("Enter first number:"));
        this.num2 = Number(prompt("Enter Second number:"));
    },

    add: function(){
        return this.num1 + this.num2;
    },

    subtract: function(){
        return this.num1 - this.num2;
    },

    multiply: function(){
        return this.num1 * this.num2;
    }
};

calculator.read();

console.log("Addition is :", calculator.add());
console.log("Subtraction is:", calculator.subtract());
console.log("Multiplication is ", calculator.multiply());
