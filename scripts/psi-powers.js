import { closeModal, openNavMobile, closeNavMobile } from "./common.js";

const url2 = 'https://psychonauts-api.herokuapp.com/api/powers';
const psiPowersGrid = document.querySelector('.psi-powers-grid')
const modal = document.querySelector('.modal');
const modalName = document.querySelector('.modal-psi-power__name');
const modalImage = document.querySelector('.modal-psi-power__image');
const modalDescription = document.querySelector('.modal-psi-power__description');
const modalLink = document.querySelector('.modal-psi-power__link');
const header = document.querySelector('.header');

function createPsiPowerGridItem(name, imageSrc, description) {
    let psiPowerItem = document.createElement('div');
    let psiPowerName = document.createElement('h2');
    let psiPowerImage = document.createElement('img');
    let psiPowerDescription = document.createElement('p');
    psiPowerItem.classList.add('each-psi-power');
    psiPowerName.classList.add('each-psi-power__name');
    psiPowerName.innerHTML = name;
    psiPowerImage.classList.add('each-psi-power__image');
    psiPowerImage.src = imageSrc;
    psiPowerImage.alt = `Image of ${name} ability`;
    psiPowerDescription.classList.add('each-psi-power__description');
    psiPowerDescription.innerHTML = description;
    psiPowerItem.appendChild(psiPowerName);
    psiPowerItem.appendChild(psiPowerImage);
    psiPowerItem.appendChild(psiPowerDescription);
    return psiPowerItem;
}

function openModal(item) {
    item.addEventListener('click', () => {
        let itemName = item.children[0].innerHTML;
        if (itemName == 'psi-punch') {
            itemName = 'PSI-Punch';
        }
        let itemImage = item.children[1];
        let itemDescription = item.children[2].innerHTML;
        let itemLink = 'https://psychonauts.fandom.com/wiki/' + itemName;
        modal.classList.remove('invisible');
        modalName.innerHTML = itemName;
        modalImage.src = itemImage.src;
        modalImage.alt = itemImage.alt;
        modalDescription.innerHTML = itemDescription;
        modalLink.href = itemLink;
    })
}

async function displayPsiPowers(url) {
    const res = await fetch(url);
    const dados = await res.json();
    dados.forEach((dado) => {
        let item = createPsiPowerGridItem(dado.name, dado.img, dado.description);
        psiPowersGrid.appendChild(item);
        openModal(item);
    });
}

window.addEventListener('scroll', () => {
    if(scrollY >= 100) {
        header.classList.add('header-bg-scroll');
    } else {
        header.classList.remove('header-bg-scroll');
    }
})

displayPsiPowers(url2);
closeModal();
openNavMobile();
closeNavMobile();