function validateAndRecharge() {
  let mobileNumber = document.getElementById("mobileNumber")?.value.trim();
  let errorMessage = document.getElementById("errorMessage");

  if (!mobileNumber) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Mobile number field is empty.";
      return;
  }

  let regex = /^[6-9]\d{9}$/;

  if (regex.test(mobileNumber)) {
      errorMessage.style.display = "none";

      // Store the number in localStorage
      localStorage.setItem("mobileNumber", mobileNumber);
      console.log("Stored Mobile Number:", localStorage.getItem("mobileNumber"));
      window.location.href = "./plans.html";
  } else {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please enter a valid 10-digit mobile number.";
  }
}

  // Toggle Answer Visibility
  function toggleAnswer(answerId) {
      const answerElement = document.getElementById(answerId);
      if (answerElement.classList.contains('d-none')) {
          answerElement.classList.remove('d-none');
      } else {
          answerElement.classList.add('d-none');
      }
  }
  
  // Save Mobile Number
  function saveNumber() {
      let mobileNumber = document.getElementById("mobileInput").value;
      localStorage.setItem("mobileNumber", mobileNumber);
      window.location.href = "plans.html";
  }
                  
  // Redirect to Plan with Parameters
  function redirectToPlan(price, validity, data) {
      const url = `plans.html?price=${price}&validity=${validity}&data=${data}`;
      window.location.href = url;
      }

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicator');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentSlide = 0;
let slideInterval;


startSlideshow();

// Function to show a specific slide
function showSlide(index) {
  items.forEach(item => item.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  
  items[index].classList.add('active');
  indicators[index].classList.add('active');
  currentSlide = index;
}

// Function to show next slide
function nextSlide() {
  let nextIndex = currentSlide + 1;
  if (nextIndex >= items.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

// Function to show previous slide
function prevSlide() {
  let prevIndex = currentSlide - 1;
  if (prevIndex < 0) {
    prevIndex = items.length - 1;
  }
  showSlide(prevIndex);
}

// Function to start automatic slideshow
function startSlideshow() {
  stopSlideshow();
  slideInterval = setInterval(nextSlide, 5000);
}

// Function to stop automatic slideshow
function stopSlideshow() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

prevBtn.addEventListener('click', function() {
  prevSlide();
  startSlideshow();
});

nextBtn.addEventListener('click', function() {
  nextSlide();
  startSlideshow();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', function() {
    showSlide(index);
    startSlideshow();
  });
});

const carousel = document.querySelector('.hero-carousel');
carousel.addEventListener('mouseenter', stopSlideshow);
carousel.addEventListener('mouseleave', startSlideshow);
});