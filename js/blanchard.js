document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
})
  
  
const btns = document.querySelectorAll(".menu__btn");
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
})
})  
let tabsBtn = document.querySelectorAll('.swiper-slide__btn');
tabsBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelector(`[data-target="${path}"]`).classList.toggle("swiper-slide__modal--active");
        document.body.classList.add('body__no-scroll');
        document.querySelector(".swiper-body__background").classList.toggle("swiper-body__background--active");
        let closeBtn = document.querySelector(`[data-target="${path}"] div svg`);
        closeBtn.addEventListener('click', function() {
            document.querySelector(`[data-target="${path}"]`).classList.remove("swiper-slide__modal--active");
            document.querySelector(".swiper-body__background").classList.remove("swiper-body__background--active");
            document.body.classList.remove('body__no-scroll');
        })
    })
})