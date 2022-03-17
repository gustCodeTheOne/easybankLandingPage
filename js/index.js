let openCloseIconMenu = document.querySelector('.openCloseMenu');
let menuContainer = document.querySelector('.easybank-menu-container');

const openMenu = () => {
    openCloseIconMenu.setAttribute('src', './media/images/icon-close.svg');
    menuContainer.classList.add('menuDisplayed');
};
const closeMenu = () => {
    openCloseIconMenu.setAttribute('src', './media/images/icon-hamburger.svg');
    menuContainer.classList.remove('menuDisplayed');
};
openCloseIconMenu.addEventListener('click', (e) => {
    e.preventDefault();
    let iconAttrValue = openCloseIconMenu.getAttribute('src');
    iconAttrValue === './media/images/icon-hamburger.svg' ? openMenu() : closeMenu();
});