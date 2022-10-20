const fizzbuzz = require("../src/fizzbuzz");

// Numbers divisible by 3 should return the word "Fizz", numbers divisible by 5 should return the word "Buzz", numbers divisible by both 3 and 5 should return the word "FizzBuzz", and numbers that are not divisible by 3 or 5 should return the number itself.

//a describe block groups together tests for a specific feature
describe("FizzBuzz function", () => {
  test("number divisible  by 3", () => {
    //call function with a number divisible by 3.  Set it equal to a variable.
    let result = fizzbuzz(9);
    //assert (or check) that the result is correct
    expect(result).toBe("Fizz");
  });
});
