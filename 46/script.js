let prevInput = "0";
let calculationOperator = "";
let currentInput = "0";
const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator_screen");
const updateScreen = (number) => {
	calculatorScreen.value = number;
};
const inputNumber = (number) => {
	currentInput = number;
};
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentInput);
	});
});
