const temperatureConverter ={
    celsius: 0,
    fahrenheit: 0,
    kelvin: 0,

    read:function(){
        this.celsius = +prompt("Enter the temperature in celsius:");

    },

     toFahrenheit() {
        this.fahrenheit = (this.celsius * 9/5) + 32;
    },

    toKelvin() {
        this.kelvin = this.celsius + 273.15;
    },

    display() {
        console.log(`Celsius: ${this.celsius}°C`);
        console.log(`fahrenheit: ${this.fahrenheit} °F`);
        console.log(`kelvin: ${this.kelvin} k`);
   }
};

temperatureConverter.read();
temperatureConverter.toFahrenheit();
temperatureConverter.toKelvin();
temperatureConverter.display();


