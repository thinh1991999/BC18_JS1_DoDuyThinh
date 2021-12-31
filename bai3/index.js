const getMoney = function () {
  const inputEL = document.getElementById("count");
  const result = +inputEL.value * 23500;
  console.log("MoneyVND", new Intl.NumberFormat("de-DE").format(result));
};
