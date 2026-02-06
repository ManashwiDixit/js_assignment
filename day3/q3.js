const obj = { x: 10 };

function test() {
  return this.x;
}

const a = test.call(obj);
const b = test.bind(obj);

console.log(a);
console.log(b);
