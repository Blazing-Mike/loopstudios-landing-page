function classToggle() {
  const navs = document.querySelectorAll('.Navbar__items');

navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));

}

document.querySelector('.Navbar__link-toggle')
.addEventListener('click', classToggle);
function myFunction(x) {
  x.classList.toggle("change");
}
// document.querySelector('.hambuger-icon').src = "/images/icon-close.svg" ; 
