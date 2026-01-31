const steps = document.querySelectorAll(".step");
const stepIndicators = document.querySelectorAll(".steps span");
const nextBtns = document.querySelectorAll(".next");
const backBtns = document.querySelectorAll(".back");
const form = document.getElementById("bookingForm");
const confirmation = document.querySelector(".confirmation");

let currentStep = 0;

function updateSteps() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
    stepIndicators[index].classList.toggle("active", index === currentStep);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateSteps();
    }
  });
});

backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateSteps();
    }
  });
});

form.addEventListener("submit", e => {
  form.style.display = "none";
  confirmation.style.display = "block";
});
