//map
const numbers = [1, 2, 3];
const result = numbers.map(n => n * 2);

console.log("map output:" ,result);

//filter
const x = [1, 2, 3, 4];
const ans = numbers.filter(n => n > 2);

console.log("filter output:", ans);


//reduce
const y = [1, 2, 3, 4];
const resultant = numbers.reduce((sum, n) => sum + n, 0);
console.log("reduce output:", resultant);

//for each
const z = [1, 2, 3];
numbers.forEach(n => console.log(n));

//slice
const r = [1, 2, 3, 4];
const answer = numbers.slice(1, 3);

console.log("slice output", answer);



