'use strict';

const cityInput = document.getElementsByClassName('input_type_dropdown').item(0);
const dropdown = cityInput.nextElementSibling;
let dropdownItems = Array.from(dropdown.childNodes);

const initCitySelection = () => {
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('click', ({ target }) => {
            const currentCity = target.textContent;
            updateCityInputValue(currentCity);
            hideDropdown();
        })
    });
}

const initCitySearch = () => {
    cityInput.addEventListener('input', ({ target }) => {
        let cityValue = target.value;

        const foundCities = findCities(cityValue);

        renderCities(foundCities);
    });
}

initCitySelection();
initCitySearch();

cityInput.addEventListener('blur', () => {
    setTimeout(() => {
        hideDropdown();
    }, 100);
});

cityInput.addEventListener('focus', () => {
    showDropdown();
});

const showDropdown = () => {
    dropdown.classList.remove('hidden');
}

const hideDropdown = () => {
    dropdown.classList.add('hidden');
}

const updateCityInputValue = newValue => {
    cityInput.value = newValue;
}

const findCities = cityToFind => dropdownItems.filter(dropdownCity => isCityMatches(cityToFind, dropdownCity));

const isCityMatches = (cityToFind, city) => {
    return city.textContent.toLowerCase().includes(cityToFind.toLowerCase());
}

const renderCities = cities => {
    dropdown.innerHTML = '';

    cities.forEach(city => {
        dropdown.append(city);
    });
}

'use strict';

const header = document.querySelector('.header');
const logoPic = document.querySelector('.logo-pic');
const links = document.querySelectorAll('.header .link');

const positionYToMakeHeaderFixed = 450;

document.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    if (shouldHeaderBeFixed(currentY)) {
        makeHeaderFixed();
        makeLogoBlack();
        makeLinksBlack();
    } else {
        makeHeaderUnfixed();
        makeLogoWhite();
        makeLinksWhite();
    }
});

const shouldHeaderBeFixed = y => y > positionYToMakeHeaderFixed;


const makeHeaderFixed = () => {
    header.classList.add('header_fixed');
}

const makeHeaderUnfixed = () => {
    header.classList.remove('header_fixed');
}


const makeLinksBlack = () => {
    links.forEach(link => link.classList.add('link_color_black'));
}

const makeLinksWhite = () => {
    links.forEach(link => link.classList.remove('link_color_black'));
}


const makeLogoBlack = () => {
    logoPic.classList.add('logo-pic_color_black');
}

const makeLogoWhite = () => {
    logoPic.classList.remove('logo-pic_color_black');
}
