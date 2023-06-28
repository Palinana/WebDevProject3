const  display = document.getElementById("input");
let buttons = document.querySelectorAll(".button--operator");

window.onload = () => {
  input.value = "";
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    if (button.textContent != "=" && 
        button.textContent != "AC" && 
        button.textContent != "√" && 
        button.textContent != "%" && 
        button.textContent != "×" &&
        button.textContent != "÷" && 
        button.textContent != "sin" && 
        button.textContent != "cos" && 
        button.textContent != "tan" && 
        button.textContent != "log" && 
        button.textContent != "ln" && 
        button.textContent != "xy" && 
        button.textContent != "X!" && 
        button.textContent != "EXP" && 
        button.textContent != "Deg" ) {
            display.value += button.textContent;
    }
    else if (button.textContent === "=") {
        equals();
    }
    else if (button.textContent === "AC") {
        clear();
    }
    else if (button.textContent === "×") {
        multiply();
    }
    else if (button.textContent === "÷") {
        divide();
    }
    else if (button.textContent === "%") {
        percent();
    }
    else if (button.textContent === "xy") {
        square();
    }
    else if (button.textContent === "√") {
        squareRoot();
    }
    else if (button.textContent === "sin") {
        sin();
    }
    else if (button.textContent === "cos") {
        cos();
    }
    else if (button.textContent === "tan") {
        tan();
    }
    else if (button.textContent === "log") {
        log();
    }
    else if (button.textContent === "ln") {
        ln();
    }
    else if (button.textContent === "EXP") {
        exponent();
    }
    else if (button.textContent === "Deg") {
        degrees();
    }
    else if (button.textContent === "X!") {
        factorial();
    }
  });
});

function equals() {
    try {
        //get user's input
        let solution = eval(display.value);
        //returns true for natural numbers false for decimals
        if (Number.isInteger(solution)) {
            display.value = solution;
        } else {
            display.value = solution.toFixed(2);
        }
    } catch (err) {
        //If user has entered invalid input
        alert("Invalid Input");
    }
}

function clear() {
    display.value = "";
}

function multiply() {
    display.value += "*";
}

function divide() {
    display.value +=  "/";
}

function percent() {
    display.value = display.value / 100;
}

function square() {
    display.value = eval(display.value * display.value);
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function sin() {
    display.value = Math.sin(display.value);
}
  
function cos() {
    display.value = Math.cos(display.value);
}
  
function tan() {
    display.value = Math.tan(display.value);
}
  
function log() {
    display.value = Math.log10(display.value);
}
  
function ln() {
    display.value = Math.log(display.value);
}
  
function exponent() {
    display.value += "^";
}
  
function exp() {
    display.value = Math.exp(display.value);
}
  
function degrees() {
    display.value = display.value * (180 / Math.PI);
}

function factorial() {
    let number = 1;
    if (display.value === 0) {
        display.value = "1";
    } else if (display.value < 0) {
        display.value = "undefined";
    } else {
        let number = 1;
        for (var i = display.value; i > 0; i--) {
            number *=  i;
        }
        display.value = number;
    }
}
