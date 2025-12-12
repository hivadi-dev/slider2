const slides = document.querySelector('.slides');
const slider = document.querySelectorAll('.slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');


let currentIndex = 0;                                         //شماره اسلاید فعلی که نمایش داده می‌شود
const totalSlides = slider.length;                            //تعداد اسلاید ها

function showSlide(index){
    if(index < 0 || index >= totalSlides) return;
    currentIndex = index
    slides.style.transform = ` translate(-${currentIndex * 500}px)`
}

// دکمه‌ها
left.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

right.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});







////روش دیگر نوشتن فانکشن

// function showSlide(){
//     if(index < 0){
//         index = 0
//     }else if(index >= totalSlides){
//         index = totalSlides - 1
//     }  
// }