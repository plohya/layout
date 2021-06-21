import '../style/style.scss';

const $prevSlide = document.querySelectorAll('.arrow_left');
const $nextSlide = document.querySelectorAll('.arrow_right');
let slideIndex = 1;
const $themeChange = document.querySelector('.theme_button');
let theme = 'light';
const $dropArrows = document.querySelectorAll('.arrow_btn');

$prevSlide.forEach(item => item.addEventListener('click', e => plusSlides(-1)));
$nextSlide.forEach(item => item.addEventListener('click', e => plusSlides(1)));
$themeChange.addEventListener('click', e => themeChange(e.target));
$dropArrows.forEach(item => item.addEventListener('click', (e) => showDropDown(e)));

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

window.onload = () => {
    if(localStorage.getItem('theme') === 'dark'){
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        localStorage.setItem('theme', theme);
    }
};

function themeChange(target) {
    if (localStorage.theme === 'light') {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else if (localStorage.theme === 'dark') {
        document.documentElement.removeAttribute('theme');
        localStorage.removeItem('theme'); 
        localStorage.setItem('theme', 'light');
    }
}

function showDropDown(e) {
     e.target.nextElementSibling.style.display = 'block';
    document.querySelectorAll('.dropdown-content').forEach((item) =>  {
        if(item.style.display = 'block') {
            console.log('block founded');
            item.style.display = 'none';
    }});
        e.target.nextElementSibling.style.display = 'block';
}