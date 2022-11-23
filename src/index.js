'use sctict';

let currentCity = null;
const input = document.getElementsByClassName('dropdown__input').item(0);
const dropdownWrapper = input.nextElementSibling;
let dropdownContent = Array.from(dropdownWrapper.childNodes);

const initCitySelection = () => {
    dropdownContent.forEach(element => {
        element.addEventListener('click', ({ target }) => {
            console.log(currentCity);
            currentCity = target.textContent;
            input.value = currentCity;
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
        dropdownContent.forEach(select => {
            select.classList.add('hidden');
        });
    }, 100);
});

input.addEventListener('focus', e => {
    dropdownContent.forEach(select => {
        select.classList.remove('hidden');
    });
});
