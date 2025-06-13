function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
  document.body.classList.toggle("menu-open");
}

// script.js
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".fade-in-section").classList.add("show");
});

const scrollToTopBtn = document.getElementById("scrollToTop");

scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// 자동 캐러셀 스크립트
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
let current = 0;
let interval;

function showSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function startAutoSlide() {
  interval = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

// 시작
startAutoSlide();

// dot 클릭으로 슬라이드 이동
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    showSlide(current);
  });
});

// 마우스 호버 시 자동 슬라이드 멈춤/재시작
const carouselWrapper = document.querySelector(".carousel-wrapper");

carouselWrapper.addEventListener("mouseenter", stopAutoSlide);
carouselWrapper.addEventListener("mouseleave", startAutoSlide);

// 텍스트 & 배경 hover 효과 추가 (선택적, CSS 필요)
slides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    slide.classList.add("hovered");
  });
  slide.addEventListener("mouseleave", () => {
    slide.classList.remove("hovered");
  });
});
