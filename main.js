
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
});



function toggleText() {
  const moreText = document.getElementById("moreText");
  const btn = document.querySelector("button");

  if (moreText.style.display === "none"){
    moreText.style.display = "block";
    btn.textContent = "See Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "See more"
  }
  }

  const form = document.getElementById("bookingForm");
const successModal = document.getElementById("successModal");
const closeModalBtns = document.querySelectorAll(
  "#closeSuccess, .close-btn"
);

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      successModal.style.display = "flex";
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please check your connection.");
  }
});

/* Close modal */
closeModalBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    successModal.style.display = "none";
  });
});

/* Close modal when clicking outside */
successModal.addEventListener("click", (e) => {
  if (e.target === successModal) {
    successModal.style.display = "none";
  }
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    item.classList.toggle("active");
  });
});