
let labelLst = document.querySelectorAll(".gallerylery__left-label");
labelLst.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        e.currentTarget.style.color = "#C283F3";
    });
});

document.querySelector(".gallery__right-swiper-button-next").classList.remove("swiper-button-disabled", "swiper-button-lock");
document.querySelector(".gallery__right-swiper-button-prev").classList.remove("swiper-button-lock");