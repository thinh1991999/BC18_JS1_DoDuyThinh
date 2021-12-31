const getResult = function () {
  const inputNumberE = document.getElementById("number");

  const number = +inputNumberE.value;

  const firstNumber = Math.floor(number / 10);
  const secondNumber = number % 10;

  const result = firstNumber + secondNumber;
  console.log("result", result);
};
