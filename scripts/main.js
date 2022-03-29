import { closeModal, closeNavMobile, openNavMobile } from "./common.js";

const url1 = 'https://psychonauts-api.herokuapp.com/api/characters';
const url2 = 'https://psychonauts-api.herokuapp.com/api/powers';
const characterName = document.querySelector('.random-character__name');
const characterImage = document.querySelector('.random-character__image');
const characterBtn = document.querySelector('.random-character__btn');
const characters = [];
const psiPowerName = document.querySelector('.random-psi-power__name');
const psiPowerImage = document.querySelector('.random-psi-power__image');
const psiPowerDescription = document.querySelector('.random-psi-power__description')
const psiPowerBtn = document.querySelector('.random-psi-power__btn')
const psiPowers = [];
const worldImage = document.querySelectorAll('.the-world__image');
const modalImage = document.querySelector('.modal-image');
const modal = document.querySelector('.modal');

let randomNumber1;
let randomNumber2;
let imageSrc;
let imageAlt;

async function getCharacters(url, n) {
    const res = await fetch(url);
    const dados = await res.json()
    dados.forEach((dado) => {
        characters.push(dado);
    });
    characterName.innerHTML = characters[n].name;
    characterImage.src = characters[n].img;
    characterImage.alt = `${characters[n].name} image`
};

async function getPsiPowers(url, n) {
    const res = await fetch(url);
    const dados = await res.json();
    dados.forEach((dado) => {
        psiPowers.push(dado);
    });
    psiPowerName.innerHTML = psiPowers[n].name;
    psiPowerImage.src = psiPowers[n].img;
    psiPowerImage.alt = `${psiPowers[n].name} image`;
    psiPowerDescription.innerHTML = psiPowers[n].description;
}

characterBtn.addEventListener('click', () => {
    randomNumber1 = Math.floor(Math.random() * 6);
    getCharacters(url1, randomNumber1);
})

psiPowerBtn.addEventListener('click', () => {
    randomNumber2 = Math.floor(Math.random() * 12);
    getPsiPowers(url2, randomNumber2);
})


worldImage.forEach((image) => {
    image.addEventListener('click', () => {
        imageSrc = image.src;
        imageAlt = image.alt;
        console.log(image);
        modal.classList.remove('invisible');
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
    })
})

getCharacters(url1, 0);
getPsiPowers(url2, 0);
closeModal();
openNavMobile();
closeNavMobile();