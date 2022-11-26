// TODO:
// 1. pixel perfect
// 2. header mobile bg pic

'use sctict';

let currentCity = null;
const input = document.getElementsByClassName('dropdown__input').item(0);
const dropdownWrapper = input.nextElementSibling;
let dropdownContent = Array.from(dropdownWrapper.childNodes);

const initCitySelection = () => {
    dropdownContent.forEach(select => {
        select.addEventListener('click', ({ target }) => {
            console.log(currentCity);
            currentCity = target.textContent;
            input.value = currentCity;
            dropdownWrapper.classList.add('hidden');
        })
    });
}

const initCitySearch = () => {
    input.addEventListener('input', e => {
        let inputValue = e.target.value;
        const filteredCities = dropdownContent.filter(val => {
            return val.textContent.includes(inputValue);
        });

        dropdownWrapper.innerHTML = '';
        filteredCities.forEach(city => {
            dropdownWrapper.append(city);
        });
    });
}

initCitySelection();
initCitySearch();

input.addEventListener('blur', () => {
    setTimeout(() => {
        dropdownWrapper.classList.add('hidden');
    }, 100);
});

input.addEventListener('focus', () => {
    dropdownWrapper.classList.remove('hidden');
});

const headerTop = document.querySelector('.header__top');
const body = document.querySelector('body');

document.addEventListener('scroll', () => {
    const positionXToMakeHeaderFixed = 450;
    const y = window.scrollY;
    if (y > positionXToMakeHeaderFixed) {
        headerTop.classList.add('header__fixed');
        body.classList.add('body_header-fixed');
    } else {
        headerTop.classList.remove('header__fixed');
        body.classList.remove('body_header-fixed');
    }
});
