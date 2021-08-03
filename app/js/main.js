let burgerBtn = document.querySelector('.burger-btn');
let menuOpen = document.querySelector('.menu')

// function burgerBtnActive (){

// burgerBtn.addEventListener('click' , toggleBurgerBtn);
// }

// burgerBtnActive()

// function toggleBurgerBtn() {
//   console.log('close');
//   burgerBtn.classList.toggle('active');
// }
function menuMobile() {
  burgerBtn.addEventListener('click' , toggleMobileMenu)
}

menuMobile()

function toggleMobileMenu() {
  console.log("active")
  burgerBtn.classList.toggle('active');
  menuOpen.classList.toggle('active');
}
