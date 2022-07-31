
function SetWidthMid() {
    let slide = document.querySelectorAll(".gallery__right-swiper-slide");
    let slideWidth = document.querySelector(".gallery__right-swiper-slide").offsetWidth;
    slide.forEach(function(elem) {
        elem.style.height = slideWidth * 1.125 + "px";
    });
};
let labelLst = document.querySelectorAll(".gallerylery__left-label");
labelLst.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        e.currentTarget.style.color = "#C283F3";
    });
});

document.querySelector(".gallery__right-swiper-button-next").classList.remove("swiper-button-disabled", "swiper-button-lock");
document.querySelector(".gallery__right-swiper-button-prev").classList.remove("swiper-button-lock");