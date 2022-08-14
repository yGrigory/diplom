document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });
})
function SetWidthMid() {
    let slide = document.querySelectorAll(".gallery__right-swiper-slide");
    slide.forEach(function(elem) {
        let slideWidth = document.querySelector(".gallery__right-swiper-slide").offsetWidth;
        elem.style.height = slideWidth * 1.125 + "px";
    });
};
function SetHeight() {
    let slides = document.querySelectorAll(".projects__swiper-slide");
    let slideWidth = document.querySelector(".projects__swiper-slide").offsetWidth;
    slides.forEach(function(elem) {
        elem.style.height = 0.3333 * slideWidth + "px";
    })
};
function DropHeight() {
    let slide = document.querySelectorAll(".gallery__right-swiper-slide");
    slide.forEach(function(elem) {
        elem.style.height = null;
    })
};
function SetWidthMin() {
    let slide = document.querySelectorAll(".gallery__right-swiper-slide");
    slide.forEach(function(elem) {
        let slideWidth = document.querySelector(".gallery__right-swiper-slide").offsetWidth;
        elem.style.height = slideWidth * 0.9545454545 + "px";
    });
}
if (window.innerWidth <= 1024) {
    SetWidthMid();
    SetHeight();
}

const btns = document.querySelectorAll(".hero__menu-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";
  
btns.forEach(item => {
item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
    if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
    }
    });
    btns.forEach(el => {
    if (el != this) {
        el.classList.remove(activeClassbtns)
    }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
});
});
window.onresize = function() {
    let screenWidth = window.innerWidth;
    if (screenWidth <= 1024) {
        SetWidthMid();
        SetHeight();
    }
    if (screenWidth > 1024) {
        DropHeight();
    }
    if (screenWidth > 907) {
        document.querySelector(".form__btn").style = "margin-top: 0";
    }
    if (screenWidth <= 907) {
        document.querySelector(".form__btn").style = "margin-top: 30px";
    }
    if (screenWidth <= 768) {
        document.querySelector(".header__form").style.width = screenWidth * 0.8133 + "px";
        SetWidthMin();
    }
    if (screenWidth > 768) {
        document.querySelector(".header__form").style.width = "auto";
    }
    const element = document.querySelector(".catalog__paint");
    if (screenWidth > 1500) {
        element.style = "column-count: 3";
    }
    if (screenWidth > 955) {
        element.style = "column-count: 2";
    }
};

let tabsBtn = document.querySelectorAll('.gallery__right-swiper-slide');
tabsBtn.forEach(function(btn_1) {
    btn_1.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelector(`[data-target="${path}"]`).classList.add("swiper-slide__modal--active");
        document.body.classList.add("hidden");
        let closeBtn = document.querySelector(`[data-target="${path}"] div span`);
        closeBtn.addEventListener('click', function() {
            document.querySelector(`[data-target="${path}"]`).classList.remove("swiper-slide__modal--active");
            document.querySelector(`[data-target=close-slide]`).classList.remove("hidden");
        })
    })
})

document.querySelector(".header__open").addEventListener("click", function() {
    document.querySelector(".header__form").classList.add("form__active");
    this.classList.add("active");
    document.querySelector(".header__img-cont").classList.add("header__img-cont--visibility");
    document.querySelector(".header__burger").classList.add("header__img-cont--visibility");
})

document.addEventListener("click", function(e) {
let target = e.target;
let form = document.querySelector(".header__form");
if (!target.closest(".header__form-cnt") || e.path[0].tagName == "rect") {
form.classList.remove("form__active");
document.querySelector(".header__img-cont").classList.remove("header__img-cont--visibility");
document.querySelector(".header__burger").classList.remove("header__img-cont--visibility");
    form.querySelector("input").value = "";

    document.querySelector(".header__open").classList.remove("active")
}
})
let burgerLogo = document.querySelector(".header__burger-logo");

burgerLogo.addEventListener('click', function(e) {
    let path = e.currentTarget.dataset.path;
    document.querySelector(".header__links").classList.add("header__links--active");
})
document.querySelector(".header__links-svg").addEventListener('click', function() {
    document.querySelector(".header__links").classList.remove("header__links--active");
})