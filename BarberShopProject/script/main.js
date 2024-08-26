document.addEventListener('DOMContentLoaded', function(){
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.close-modal');
    const acceptButton = document.querySelector('.popUp__btn');

    const isAccepted = localStorage.getItem('acceptedTerms');

    if (!isAccepted || isAccepted !== 'true') {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    const closeModal = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    const saveAcceptance = function () {
        // Сохраняем информацию о принятии условий в localStorage
        localStorage.setItem('acceptedTerms', 'true');
        closeModal();
    };

    btnCloseModal.addEventListener('click', closeModal);

    acceptButton.addEventListener('click', saveAcceptance);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});


const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const ruBurger = document.querySelector('.ruBurger');
const ruBurgerMenu = document.querySelector('.ruBurger__menu');
const body = document.querySelector('body');

burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('active');
});

ruBurger.addEventListener('click', function(){
    ruBurger.classList.toggle('active');
    ruBurgerMenu.classList.toggle('active');
    body.classList.toggle('active');
});

const servicesItem = document.querySelectorAll('.services__item');

servicesItem.forEach(item => {
    const titleEl = item.querySelector('.item__title');
    const thinEl = item.querySelector('.item__thinText');
    
    item.addEventListener('mouseenter', () => {
        titleEl.style.color = 'white';
        thinEl.style.color = 'white';
    });

    item.addEventListener('mouseleave', () => {
        titleEl.style.color = 'rgba(22, 53, 97, 1)';
        thinEl.style.color = 'rgba(22, 53, 97, 1)';
    });
});

function toggleItems(){
    const items = document.querySelectorAll('.gallery__item');
    const button = document.querySelector('.gallery__grid-button');
    for(let i = 6; i < items.length; i++){
        items[i].classList.toggle('gallery__showItem')
    }

    if (button.innerHTML === "View all") {
        button.innerHTML = "Close";
      } else {
        button.innerHTML = "View all";
      }
}

const changeLang = document.querySelector('.changeLang');
const bodyHtml = document.querySelector('body');
const engPage = document.querySelector('.engPage');
const ruPage = document.querySelector('.ruPage');
const secondChngBtn = document.querySelector('.ruBtn');
function changePageFun() {

    changeLang.addEventListener('mouseover', () => {
        changeLang.innerHTML = 'RU';
        changeLang.style.backgroundColor = 'white';
        changeLang.style.color = 'rgba(22, 53, 97, 1)';
    });
    
    changeLang.addEventListener('mouseout', () => {
        changeLang.innerHTML = 'ENG';
        changeLang.style.backgroundColor = 'rgba(22, 53, 97, 1)';
        changeLang.style.color = 'white';
    });
    
    changeLang.addEventListener('click', () => {
        engPage.classList.toggle('active');
        ruPage.classList.toggle('active');
        changeLang.innerHTML = 'Ruuu';
    });

    secondChngBtn.addEventListener('click',() => {
        engPage.classList.remove('active');
        ruPage.classList.remove('active');
    });

    secondChngBtn.addEventListener('mouseover', () => {
        secondChngBtn.innerHTML = 'ENG';
        secondChngBtn.style.backgroundColor = 'white';
        secondChngBtn.style.color = 'rgba(22, 53, 97, 1)';
    });
    
    secondChngBtn.addEventListener('mouseout', () => {
        secondChngBtn.innerHTML = 'RU';
        secondChngBtn.style.backgroundColor = 'rgba(22, 53, 97, 1)';
        secondChngBtn.style.color = 'white';
    });
}

changePageFun();
