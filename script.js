let slideIndex = 0;
const slides = document.getElementsByClassName("slider-image");
const progressBar = document.querySelector('.progress-bar');
const dotsContainer = document.querySelector('.dots-container');
let slideInterval;
const intervalTime = 5000;
let timeLeft = intervalTime;

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
    updateDots();
}

function changeSlide(n) {
    clearInterval(slideInterval);
    timeLeft = intervalTime;
    showSlide(slideIndex += n);
    startAutoSlide();
}

function goToSlide(n) {
    clearInterval(slideInterval);
    timeLeft = intervalTime;
    slideIndex = n;
    showSlide(slideIndex);
    startAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        timeLeft -= 100;
        progressBar.style.width = `${(intervalTime - timeLeft) / intervalTime * 100}%`;
        if (timeLeft <= 0) {
            timeLeft = intervalTime;
            showSlide(slideIndex += 1);
        }
    }, 100);
}

createDots();
showSlide(slideIndex);
startAutoSlide();
// dd

document.addEventListener('DOMContentLoaded', (event) => {
  const burgerMenu = document.querySelector('.burger-menu');
  const sidebar = document.querySelector('.sidebar');

  burgerMenu.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      burgerMenu.classList.toggle('active');
  });
});
document.getElementById('burger-icon').addEventListener('click', function() {
  document.getElementById('burger-nav').classList.toggle('active');
});
