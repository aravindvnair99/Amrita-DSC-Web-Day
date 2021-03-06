let prevInput = "0";
let calculationOperator = "";
let currentInput = "0";
const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator_screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal_sign");
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
	calculationOperator = operator;
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
equalSign.addEventListener("click", () => {
	console.log("Equal button is pressed.");
});
