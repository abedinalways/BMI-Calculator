let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let btn = document.querySelector(".cal");
let note = document.querySelector(".note");
let result = document.querySelector(".output");
btn.addEventListener('click', () => {
  let yourWeight = parseInt(weight.value);
  let yourHeight = parseFloat(height.value);
  let BMI = yourWeight / (yourHeight *yourHeight);
  let your_BMI = BMI.toFixed(2);
  result.textContent = your_BMI;
  if (your_BMI < 18.25) {
    result.style.color = '#DF6D14';
    note.textContent="You are under-weight"
  }
  else if (your_BMI > 18.25 && your_BMI <= 25.00) {
    result.style.color = '#3A7D44';
    note.textContent = 'Your weight is perfect';
  }
  else if (your_BMI > 25.00 && your_BMI <= 30.00) {
    result.style.color = '#B8001F';
    note.textContent = 'You are over-weight';
  }
  else {
    result.style.color = '#E52020';
    note.textContent = 'You are in danger';
  }
});
