const inputE = document.getElementById("count");
const getSalary = function () {
  const inputE = document.getElementById("count");
  const result = +inputE.value * 100000;
  console.log("Salary", new Intl.NumberFormat("de-DE").format(result));
};
