let prevInput = "0";
let calculationOperation = "";
let currentInput = "0";
const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator_screen");
const operators = document.querySelectorAll(".operator");
const updateScreen = (number) => {
	calculatorScreen.value = number;
};
const inputNumber = (number) => {
	if (currentInput === "0") {
		currentInput = number;
	} else {
		currentInput += number;
	}
};
const inputOperator = (operator) => {
	prevInput = currentInput;
	calculationOperation = operator;
	currentInput = "0";
};
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentInput);
	});
});
operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	});
});
