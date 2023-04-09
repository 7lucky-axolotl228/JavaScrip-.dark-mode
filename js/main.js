/* const phone = 'Xiaomi Poco M4 Pro 5G';
const phone_color = 'black';
const phone_memory = '128GB';
const phone_shot = '50MP';
console.log(phone);
console.log(phone_color);
console.log(phone_memory);
console.log(phone_shot); */


/* const elLogoLink = document.querySelector('.site-header-logo');
const elChangeLogoTextButton = document.querySelector('.change-logo-text-button');

elChangeLogoTextButton.addEventListener('click', function () {
  elLogoLink.textContent = 'Something';
}) */


const elDarkModeButton = document.querySelector('.site-header-dark');
elDarkModeButton.addEventListener('click', function () {
  document.body.classList.add('dark-mode')
})

elDarkModeButton.addEventListener('dblclick', function () {
  document.body.classList.remove('dark-mode')
})

const elLightModeButton = document.querySelector('.site-header-light');
elLightModeButton.addEventListener('click', function () {
  document.body.classList.remove('dark-mode')
})
