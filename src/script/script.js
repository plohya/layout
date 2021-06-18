// import '../index.html';
// import '../style/style.scss';
// import '../style/fonts.scss';

// variables

const $prevSlide = document.querySelectorAll('.arrow_left');
const $nextSlide = document.querySelectorAll('.arrow_right');
let slideIndex = 1;
const $themeChange = document.querySelector('.theme_button');
let theme = 'light';

// listeners

$prevSlide.forEach(item => item.addEventListener('click', e => plusSlides(-1)));
$nextSlide.forEach(item => item.addEventListener('click', e => plusSlides(1)));
$themeChange.addEventListener('click', e => themeChange(e.target));

// slider func's
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i = 0;
    let $slides = document.getElementsByClassName('img-slider');

    if(n > $slides.length) {
        slideIndex = 1;
    } 

    if(n < 1) {
        slideIndex = $slides.length;
    }

    for (i = 0; i < $slides.length; i++) {
        $slides[i].style.display = 'none';
    }

    $slides[slideIndex-1].style.display = 'flex';
}

// theme change func's

window.onload = () => {
    if(localStorage.getItem('theme') === 'dark'){
        document.documentElement.setAttribute('theme', 'dark');
    }
};

function themeChange(target) {
    if (localStorage.theme === 'light') {
        //change to dark  
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else if (localStorage.theme === 'dark') {
        // change to light        
        document.documentElement.removeAttribute('theme');
        localStorage.removeItem('theme'); // удаляем
        localStorage.setItem('theme', 'light');
    }
}