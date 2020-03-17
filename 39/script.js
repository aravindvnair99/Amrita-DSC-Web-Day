const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		console.log(event.target.value);
	});
});
const calculatorScreen = document.querySelector(".calculator_screen");
const updateScreen = (number) => {
	calculatorScreen.value = number;
};
