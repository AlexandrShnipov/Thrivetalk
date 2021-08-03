let burgerBtn = document.querySelector('.burger-btn');
let menuOpen = document.querySelector('.menu')

function menuMobile() {
  burgerBtn.addEventListener('click' , toggleMobileMenu)
}

menuMobile()

function toggleMobileMenu() {
  console.log("active")
  burgerBtn.classList.toggle('active');
  menuOpen.classList.toggle('active');
}
