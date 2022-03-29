export { closeModal, openNavMobile, closeNavMobile };

const modal = document.querySelector('.modal');
const headerNav = document.querySelector('.header__nav');
const hamburgerBtn = document.querySelector('.header__hamburger');
const closeNavBtn = document.querySelector('.header__close');

function closeModal() {
    window.addEventListener('click', (e) => {
        console.log(e.target.classList);
        if(e.target.classList[0] == 'modal') {
            modal.classList.add('invisible');
        }
    })
}

function openNavMobile() {
    hamburgerBtn.addEventListener('click', () => {
        headerNav.classList.add('show-nav-mobile');
    })
}

function closeNavMobile() {
    closeNavBtn.addEventListener('click', () => {
        headerNav.classList.remove('show-nav-mobile');
    })
}