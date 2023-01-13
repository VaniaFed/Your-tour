'use sctict';

const input = document.getElementsByClassName('dropdown__input').item(0);
const dropdown = input.nextElementSibling;
let dropdownItems = Array.from(dropdown.childNodes);
let currentCity = null;

const hideDropdown = () => {
    dropdown.classList.add('hidden');
}

const showDropdown = () => {
    dropdown.classList.remove('hidden');
}

const initCitySelection = () => {
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('click', ({ target }) => {
            currentCity = target.textContent;
            input.value = currentCity;
            hideDropdown();
        })
    });
}

const initCitySearch = () => {
    input.addEventListener('input', e => {
        let inputValue = e.target.value;
        const filteredCities = dropdownItems.filter(city => {
            return city.textContent.includes(inputValue);
        });

        dropdown.innerHTML = '';
        filteredCities.forEach(city => {
            dropdown.append(city);
        });
    });
}

initCitySelection();
initCitySearch();

input.addEventListener('blur', () => {
    setTimeout(() => {
        hideDropdown();
    }, 100);
});

input.addEventListener('focus', () => {
    showDropdown();
});


// Sticky header

const headerTop = document.querySelector('.header__top');
const body = document.querySelector('body');
const positionXToMakeHeaderFixed = 450;
const headerLinks = document.querySelectorAll('.header__top  .link');

document.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > positionXToMakeHeaderFixed) {
        headerTop.classList.add('header__fixed');
        body.classList.add('body_header-fixed');
        makeLinksBlack(headerLinks);
    } else {
        headerTop.classList.remove('header__fixed');
        body.classList.remove('body_header-fixed');
        makeLinksWhite(headerLinks);
    }
});


const makeLinksBlack = links => {
    links.forEach(link => link.classList.add('link_color_black'));
}

const makeLinksWhite = links => {
    links.forEach(link => link.classList.remove('link_color_black'));
}