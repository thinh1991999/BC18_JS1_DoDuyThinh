const getAVG = function () {
  const inputELS = document.getElementsByClassName("count");
  let sum = 0;
  for (let i = 0; i < inputELS.length; i++) {
    sum += +inputELS[i].value;
  }

  const avg = sum / inputELS.length;
  console.log("Avarage", avg);
};
