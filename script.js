const heightInputEl = document.getElementById("height");
const weightInputEl = document.getElementById("weight");
const calculateBtnEl = document.getElementById("calculate");
const resultEl = document.getElementById("result");
const infoTextEl = document.getElementById("info-text");

calculateBtnEl.addEventListener("click", () => {
  const heightValue = heightInputEl.value / 100;
  const weightValue = weightInputEl.value;

  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);
  resultEl.innerHTML = `Your BMI is ${bmiValue}`;

  if (bmiValue < 18.5) {
    infoTextEl.innerHTML = "You are underweight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    infoTextEl.innerHTML = "You are healthy";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    infoTextEl.innerHTML = "You are overweight";
  } else {
    infoTextEl.innerHTML = "You are obese";
  }
});
