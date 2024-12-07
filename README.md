# TypeScript Type Coercion Runtime Error

This repository demonstrates a common issue in TypeScript where the type system might not prevent runtime errors due to JavaScript's loose type system and type coercion. 

The `bug.ts` file contains a function `add` that is meant to add two numbers. However, if you pass a string as an argument, TypeScript does not throw an error during compilation. This results in an unexpected behavior at runtime where the string gets coerced to a number in an unexpected manner leading to an incorrect result. The `bugSolution.ts` file offers a solution by using type guards or stricter type checking to catch such errors at compile time and avoid unexpected runtime behavior.  