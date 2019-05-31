Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if(typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}

Calculator.prototype.multiply = function(number) {
    if(typeof(number) == "number") {
        this.value = number * number;
    } else {
        alert("Error!");
    }
}

Calculator.prototype.divide = function(num1, num2) {
    if(typeof(num1) == "number" && typeof(num2) == "number") {
        this.value = num1 / num2;
    } else {
        alert("Error!");
    }
}





// function addition(num1, num2) {
//     if (typeof(num1) == "number" && typeof(num2) == "number") {
//         return num1 + num2;
//     } else {
//         alert ("Error!");
//     }
// }