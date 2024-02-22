document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header__container');

  window.onscroll = () => {
      if (window.scrollY > 200) {
          header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }
  };
});

  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const headerList = document.querySelector('.header__list');

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      headerList.classList.toggle('open');
  })

});