const fizzbuzz = require("../src/fizzbuzz");

// Numbers divisible by 3 should return the word "Fizz", numbers divisible by 5 should return the word "Buzz", numbers divisible by both 3 and 5 should return the word "FizzBuzz", and numbers that are not divisible by 3 or 5 should return the number itself.

// "Red, Green, Refactor!" ---------------------
// - Red: write a failing test
// - Green: make that test pass
// - Refactor: clean up code

// ---------------------------------------------

// a describe block groups together tests for a specific feature
describe("FizzBuzz function", () => {
  // here's a test for Fizz:
  test("number divisible  by 3", () => {
    // call function with a number divisible by 3. Store the return value equal in a variable called "result".
    let result = fizzbuzz(9);
    // assert (or check) that the result is correct
    expect(result).toBe("Fizz");
  });
  // ---------------------------------------------
  // Once your Fizz test passes, write a test for Buzz:
  // ...
  // ---------------------------------------------
  // Once your Buzz test passes, write a test for FizzBuzz:
  // ...
});
