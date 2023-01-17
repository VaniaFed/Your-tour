'use sctict';

const input = document.getElementsByClassName('input_type_dropdown').item(0);
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

const header = document.querySelector('.header');
const logoPic = document.querySelector('.logo-pic');
const positionXToMakeHeaderFixed = 450;
const headerLinks = document.querySelectorAll('.header .link');

document.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > positionXToMakeHeaderFixed) {
        header.classList.add('header_fixed');
        logoPic.classList.add('logo-pic_color_black');
        makeLinksBlack(headerLinks);
    } else {
        header.classList.remove('header_fixed');
        logoPic.classList.remove('logo-pic_color_black');
        makeLinksWhite(headerLinks);
    }
});


const makeLinksBlack = links => {
    links.forEach(link => link.classList.add('link_color_black'));
}

const makeLinksWhite = links => {
    links.forEach(link => link.classList.remove('link_color_black'));
}