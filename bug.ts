function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // Type error is not caught at compile time
console.log(result); //This will lead to unexpected behavior at runtime because the compiler does not throw an error when you add a number and a string. 