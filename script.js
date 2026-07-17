const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
const previousButton = document.querySelector(".carousel-button.previous");
const nextButton = document.querySelector(".carousel-button.next");

let currentSlide = 0;
let carouselTimer;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

function startCarousel() {
  carouselTimer = window.setInterval(showNextSlide, 5000);
}

function restartCarousel() {
  window.clearInterval(carouselTimer);
  startCarousel();
}

nextButton.addEventListener("click", () => {
  showNextSlide();
  restartCarousel();
});

previousButton.addEventListener("click", () => {
  showPreviousSlide();
  restartCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    restartCarousel();
  });
});

startCarousel();
