let dropdownItems = document.querySelectorAll(".dropdown__txt");
dropdownItems.forEach(function(elem) {
    elem.addEventListener('click', function() {
        document.querySelectorAll('.menu__dropdown').forEach(function(element) {
            element.classList.remove('dropdown__active');
        })
    });
});
