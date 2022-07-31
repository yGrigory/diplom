new Accordion('.catalog__lst', {
    elementClass: 'accordion',
    triggerClass: 'catalog__btn',
    panelClass: 'catalog__content',
    activeClass: 'catalog-cnt--active'
});
let paintBtn = document.querySelectorAll('.catalog__painters');
let tabBtn = document.querySelectorAll('.catalog__tabs-item');
let slide = document.querySelectorAll(".gallery__right-swiper-slide");

paintBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        let path = e.currentTarget.dataset.path;
        tabBtn.forEach(function(element){element.classList.remove('catalog__tabs-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tabs-item--active'); 
    });
});
