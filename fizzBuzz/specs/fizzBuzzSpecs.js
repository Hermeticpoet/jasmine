describe("My fizzBuzz function", function() {
    
    beforeEach(function() {
         fizzbuzz = new fizzBuzz();
    });
    
    describe("Returns fizzbuzz, fizz, buzz or number", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return Fizz when called as fizzbuzz(9)", function() {
            let result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        
        it("should return Buzz when called as fizzBuzz(10)", function() {
            let result = fizzBuzz(10);
            expect(result).toBe("Buzz");
        });
        
        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            let result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        
        it("should return 7 when called with fizzBuzz(7)", function() {
            let result = fizzBuzz(7);
            expect(result).toBe(7);
        });
    });
});
