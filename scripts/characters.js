import { closeModal, openNavMobile, closeNavMobile, closeModalMobile } from "./common.js";

const url1 = 'https://psychonauts-api.herokuapp.com/api/characters';
const charactersGrid = document.querySelector('.characters-grid');
const modal = document.querySelector('.modal');
const modalName = document.querySelector('.modal-character__name');
const modalImage = document.querySelector('.modal-character__image');
const modalLink = document.querySelector('.modal-character__link');
const header = document.querySelector('.header');

function createCharacterGridItem(name, imageSrc) {
    let characterItem = document.createElement('div');
    let characterName = document.createElement('h2');
    let characterImage = document.createElement('img');
    characterItem.classList.add('each-character');
    characterName.classList.add('each-character__name');
    characterName.innerHTML = name;
    characterImage.classList.add('each-character__image');
    characterImage.src = imageSrc;
    characterImage.alt = `Image of ${name}`;
    characterItem.appendChild(characterName);
    characterItem.appendChild(characterImage);
    return characterItem;
}

function openModal(item) {
    item.addEventListener('click', () => {
        let itemName = item.children[0].innerHTML;
        let itemImage = item.children[1];
        let itemNameSplit = itemName.split(' ');
        let itemLink = 'https://psychonauts.fandom.com/wiki/';
        itemNameSplit.forEach((word) => {
            if(word == 'morceau') {
                word = 'coach'
            }
            itemLink += word[0].toUpperCase();
            itemLink += word.slice(1);
            itemLink += '_';
        })
        modal.classList.remove('invisible');
        modalName.innerHTML = itemName;
        modalImage.src = itemImage.src;
        modalImage.alt = itemImage.alt;
        modalLink.href = itemLink;
    })
}

async function displayCharacters(url) {
    const res = await fetch(url);
    const dados = await res.json();
    dados.forEach((dado) => {
        let item = createCharacterGridItem(dado.name, dado.img);
        charactersGrid.appendChild(item);
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

displayCharacters(url1);
closeModal();
closeModalMobile();
openNavMobile();
closeNavMobile();