// variables
const $prevSlide = document.querySelectorAll('.arrow_left');
const $nextSlide = document.querySelectorAll('.arrow_right');
let slideIndex = 1;
let theme = 'light';
const $themeChange = document.querySelector('.theme_button');

// listeners
$prevSlide.forEach(item => item.addEventListener('click', e => plusSlides(-1)));
$nextSlide.forEach(item => item.addEventListener('click', e => plusSlides(1)));
$themeChange.addEventListener('click', e => themeChange(e.target));

// slider func's
showSlides(slideIndex);

function plusSlides(n) {
    console.log('plusSlides');
    showSlides(slideIndex += n);
}

// function currentSlide(n) {
//     console.log('currentSlide');
//     showSlides(slideIndex = n);
// }

function showSlides(n) {
    console.log('showSlides');
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

function themeChange(target) {
    console.log('switch theme');
    if (theme === 'light') {
        //change to dark  
        document.documentElement.setAttribute('theme', 'dark');
        console.log('add');
        theme = 'dark';
    } else if (theme === 'dark') {
        // change to light        
        document.documentElement.removeAttribute('theme');
        console.log('remove');
        theme = 'light';
    }

    // if(document.documentElement.hasAttribute('theme')){
    //     document.documentElement.removeAttribute('theme');
    //     console.log('remove');
    // } else {
    //     document.documentElement.setAttribute('theme', 'dark');
    //     console.log('add');
    // }
}