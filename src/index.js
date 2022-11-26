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

input.addEventListener('blur', e => {
    setTimeout(() => {
        dropdownWrapper.classList.add('hidden');
    }, 100);
});

input.addEventListener('focus', e => {
    dropdownWrapper.classList.remove('hidden');
});


//

const headerTop = document.querySelector('.header__top');

document.addEventListener('scroll', e => {
    const positionXToMakeHeaderFixed = 450;
    const y = window.scrollY;
    if (y > positionXToMakeHeaderFixed) {
        headerTop.classList.add('header__fixed');
    } else {
        headerTop.classList.remove('header__fixed');
    }

})