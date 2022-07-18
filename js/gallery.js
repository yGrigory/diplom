function SetWidth() {
    let slide = document.querySelectorAll(".gal__right-swiper-slide");
    let slideWidth = document.querySelector(".gal__right-swiper-slide").style.width;
    slide.forEach(function(elem) {
        elem.style.height = slideWidth;
    })
}

document.querySelector(".gal__right-swiper-button-next").classList.remove("swiper-button-disabled", "swiper-button-lock");
document.querySelector(".gal__right-swiper-button-prev").classList.remove("swiper-button-lock");
window.onresize = function() {
    SetWidth();
}