const container = document.querySelector('.container');
const btnPrevious = document.querySelector('.previous');
const btnNext = document.querySelector('.next');
const slides = Array.from(container.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

btnPrevious.addEventListener('click', function(e){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
});

btnNext.addEventListener('click', function(e){
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
});

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}


const slide1 = document.querySelector('.slide1');
slide1.addEventListener('click', function(e){
    slideIndex = 0;
    updateSlider();
});


const slide2 = document.querySelector('.slide2');
slide2.addEventListener('click', function(e){
    slideIndex = 1;
    updateSlider();
});

const slide3 = document.querySelector('.slide3');
slide3.addEventListener('click', function(e){
    slideIndex = 2;
    updateSlider();
});


const slide4 = document.querySelector('.slide4');
slide4.addEventListener('click', function(e){
    slideIndex = 3;
    updateSlider();
});


updateSlider();