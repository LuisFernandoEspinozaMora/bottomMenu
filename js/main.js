const triangleWrapper = document.querySelector('.triangle-wrapper');
const triangle = document.querySelector('.triangle');
const headerBottomMenu = document.querySelector('.header-bottom-menu-wrapper');
const contentBottomMenu = document.querySelector('.content-bottom-menu-wrapper');

function handleToggle() {
  triangle.classList.toggle('rotate-triangle');
  headerBottomMenu.classList.toggle('gold-border');
  contentBottomMenu.classList.toggle('hide');
}

triangleWrapper.addEventListener('click', handleToggle);

// return {
//   destroy() {
//     triangleWrapper.removeEventListener('click', handleToggle);
//   },
// };