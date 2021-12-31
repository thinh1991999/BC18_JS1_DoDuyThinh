const getResult = function () {
  const inputLongEL = document.getElementById("long");
  const inputWidthEL = document.getElementById("width");

  const perimeter = (+inputLongEL.value + +inputWidthEL.value) * 2;
  const acreage = +inputLongEL.value * +inputWidthEL.value;
  console.log("perimeter", perimeter);
  console.log("acreage", acreage);
};
