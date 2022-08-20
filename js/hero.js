let dropdownItems = document.querySelectorAll(".dropdown__txt");
dropdownItems.forEach(function(elem) {
    elem.addEventListener('click', function() {
        document.querySelectorAll('.menu__dropdown').forEach(function(element) {
            element.classList.remove('dropdown__active');
        })
    });
});
document.querySelector(".events__swiper-wrapper").style.height = "auto !important";
let heroItem = document.querySelectorAll(".hero__menu-item");
let svgLst = document.querySelectorAll(".hero__menu-svg");
heroItem.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        svgLst.forEach(function(svg) {
            svg.classList.remove("hero__menu-svg--active");
        })
        const path = e.currentTarget.dataset.path;
        document.querySelector(`[data-target="${path}"]`).classList.toggle("hero__menu-svg--active");
        elem.addEventListener("click", function() {
            document.querySelector(`[data-target="${path}"]`).classList.toggle("hero__menu-svg--active");
        })
    });
});
document.querySelectorAll(".header__lst-href").forEach(function(elem) {
    elem.addEventListener('click', function() {
        console.log("XX");
        document.querySelector(".header__links").classList.remove("header__links--active")
    })
})