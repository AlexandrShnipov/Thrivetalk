let burgerBtn = document.querySelector('.burger-btn');

function burgerBtnActive (){

burgerBtn.addEventListener('click' , toggleBurgerBtn);
}

burgerBtnActive()

function toggleBurgerBtn() {
  console.log('close');
  burgerBtn.classList.toggle('active');
}
