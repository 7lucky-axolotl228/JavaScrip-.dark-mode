/* const phone = 'Xiaomi Poco M4 Pro 5G';
const phone_color = 'black';
const phone_memory = '128GB';
const phone_shot = '50MP';
console.log(phone);
console.log(phone_color);
console.log(phone_memory);
console.log(phone_shot); */





const elLogoLink = document.querySelector('.site-header-logo');
const elChangeLogoTextButton = document.querySelector('.change-logo-text-button');

elChangeLogoTextButton.addEventListener('click', function () {
  elLogoLink.textContent = 'Something';
})