new Accordion('.cat__lst', {
    elementClass: 'accordion',
    triggerClass: 'cat__btn',
    panelClass: 'cat__content',
    activeClass: 'cat-cnt--active'
});
let paintBtn = document.querySelectorAll('.cat__painters');
let tabBtn = document.querySelectorAll('.cat__tabs-item');

paintBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        tabBtn.forEach(function(element){element.classList.remove('cat__tabs-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('cat__tabs-item--active');
    });
});