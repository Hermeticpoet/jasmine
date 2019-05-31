describe("Calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator;
    }); 
    
    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    
    describe("Multiplication tests", function() {
        it("should return 81", function() {
            calc.multiply(9);
            expect(calc.value).toBe(81);
        });
        it("should return an error if we don't supply a number", function() {
           spyOn(window, "alert");
           calc.multiply("Number");
           expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    })
    
    // describe("Division tests", function() {
    //     it("should return 14", function() {
    //         calc.divide(num1, num2);
    //         expect(calc.value).toBe(14);
    //     });
    //     it("should return an error if 2 numbers not supplied", function() {
    //         spyOn(window, "alert");
    //         calc.divide(window.alert).toHaveBeenCalledWith("Error!");
    //     });
    // });
});