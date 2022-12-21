
const burgerMenu = document.querySelector('.burger_img');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const menuClose = document.querySelector('.burger_img__close')

burgerMenu.addEventListener('click', function(e) {
  page.classList.add('showOffOn');
  let menuChapter =  `
  <div class = "burger_menu__margin">
  <div class="burger_menu__title">Hello</div>
      <div class="burger_menu__title">Bonjour</div>
          <div class="burger_menu__title" >Olá</div>
              <div class="burger_menu__title" >Marhabaan</div>
              <div class="burger_menu__contactUs">Contact us</div>
              <div>info@invoriem.com</div>
              <div>+555 1234 52 58</div>
              <div>3517 W. Gray St. 
                  Utica, Pennsylvania 
                  57867</div>
          </div>
          `
          
header.insertAdjacentHTML("afterend", menuChapter);
let menuMain = document.querySelector('.burger_menu__margin')
      burgerMenu.classList.add('showOffOn') ;
      menuClose.classList.remove('showOffOn');
      
      menuClose.addEventListener('click', function (e) {
      page.classList.remove('showOffOn')
      menuMain.classList.add('showOffOn')
      burgerMenu.classList.remove('showOffOn')
      menuClose.classList.add('showOffOn')
      })
})