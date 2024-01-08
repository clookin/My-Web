const btnSwitch = document.querySelector('#switch');
const header = document.querySelector('.main-header');
const mainContainer = document.querySelector('.main-container')
const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const copy = document.querySelector('.copy')
const textCenter = document.querySelector('.text-center')


btnSwitch.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
  header.classList.toggle('dark');
  mainContainer.classList.toggle('dark');
  copy.classList.toggle('dark');
  textCenter.classList.toggle('dark')
})

menuBtn.addEventListener('click', ()=>{
  nav.classList.toggle('active');
})