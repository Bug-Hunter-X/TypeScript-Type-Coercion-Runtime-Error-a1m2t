function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return "Error: Invalid input. Both inputs must be numbers";
  }
}

let result1 = addSafe(1, 2); 
let result2 = addSafe(1, "2");
console.log(result1); // Output: 3
console.log(result2); // Output: Error: Invalid input. Both inputs must be numbers 