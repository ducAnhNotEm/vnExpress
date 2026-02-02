let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
function ChangeSlide(direction) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
  //   setInterval(() => ChangeSlide(1), 5000);
}
