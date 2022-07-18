var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

validation = new JustValidate('.form__elem', {
    rules: {
        tel: {
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            },
        },
    },
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    tooltip: {
      position: 'left',
    },
    errorContainer: '.errors-container',
});
validation
  .addField('#elem__name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Недопустимая длина',
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: "Недопустимая длина",
    },
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
    {
      rule: 'customRegexp',
      value: /(?=.*[А-Я])(?=.*[а-я])/,
      errorMessage: 'Недопустимый формат',
    }
  ])
  .addField('#elem__tel', [
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
  ]);
