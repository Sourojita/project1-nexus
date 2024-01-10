const signUpLink = document.querySelector('.signup-link');
const loginLink = document.querySelector('.login-link');
const wrapper = document.querySelector('.wrapper');

signUpLink.addEventListener('click', ()=>{
  wrapper.classList.toggle('active');
});

loginLink.addEventListener('click', ()=>{
  wrapper.classList.toggle('active');
});