document.querySelectorAll(".hover-vid").forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("tra-cuu-phat-nguoi");
  const button = document.querySelector(".tra-cuu button");

  const plateRegex = /^[0-9]{2}[A-Z]{1,2}[0-9]{4,6}$/;

  button.addEventListener("click", function (e) {
    e.preventDefault();

    const value = input.value.trim().toUpperCase();

    if (value === "") {
      alert("Vui lòng nhập biển số xe");
      input.focus();
      return;
    }

    if (!plateRegex.test(value)) {
      alert("Biển số không đúng định dạng. Ví dụ: 29A12345");
      input.focus();
      return;
    }

    input.value = value;
    alert("Tra cứu biển số: " + value);
  });
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function ChangeSlide(n) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + n + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
}
new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //  < 768 px thi co 1 slide
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    //  >= 768 px thi co 2 slide
    768: {
      slidesPerView: 3,
    },
    //  >= 1024 px thi co 3 slide
    1024: {
      slidesPerView: 4,
    },
  },
});
