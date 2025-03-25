
const openMobileMenu =()=> {
  holder = document.getElementById("holder");
  holder.classList.add("active");
}

const closeMobileMenu=()=> {
  holder = document.getElementById("holder");
  holder.classList.remove("active");
}

document.getElementById("date").innerHTML = new Date().getFullYear();


// JavaScript for Testimonial Carousel
const wrapper = document.querySelector('.testimonial-wrapper');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.testimonial-card').length;

// Update the transform property to show the current slide
function updateCarousel() {
  const slideWidth = wrapper.clientWidth / totalSlides;
  wrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Event Listeners
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide
  updateCarousel();
});
