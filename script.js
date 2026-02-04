const APP_ID = "b759e015b33376b5a5eeb25c452f54aa";
const DEFAULT_VALUE = "--";
const currentLocation = document.querySelector(".current-location");
const current = document.querySelector(".current");
const searchInput = document.querySelector("#search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

searchInput.addEventListener("change", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`,
  ).then(async (res) => {
    const data = await res.json();
    console.log("[Search Input]", data);
    currentLocation.innerHTML = `Vị trí hiện tại : ${data.name}`;
    current.innerHTML = `${data.name} ▾`;
    cityName.innerHTML = data.name || DEFAULT_VALUE;
    weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
    weatherIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    );
    temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
  });
});

const today = new Date();
// dung dictionary
const days = {
  0: "Chủ Nhật",
  1: "Thứ Hai",
  2: "Thứ Ba",
  3: "Thứ Tư",
  4: "Thứ Năm",
  5: "Thứ Sáu",
  6: "Thứ Bảy",
};
const dayOfWeek = days[today.getDay()];
const hours = String(today.getHours()).padStart(2, "0");
const minutes = String(today.getMinutes()).padStart(2, "0");
document.querySelector(".time-box").innerHTML = `${hours}:${minutes} |`;
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();
document.querySelector(".date-box").innerHTML =
  `${dayOfWeek}/${day}/${month}/${year}`;

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
