'use strict';

// const cityInput = document.getElementsByClassName('input_type_dropdown').item(0);
const cityInput = document.getElementsByClassName('dropdown-input').item(0);
// const dropdown = cityInput.nextElementSibling;
// let dropdownItems = Array.from(dropdown.childNodes);

// const initCitySelection = () => {
//     dropdownItems.forEach(dropdownItem => {
//         dropdownItem.addEventListener('click', ({ target }) => {
//             const currentCity = target.textContent;
//             updateCityInputValue(currentCity);
//             hideDropdown();
//         })
//     });
// }

// const initCitySearch = () => {
//     cityInput.addEventListener('input', ({ target }) => {
//         let cityValue = target.value;

//         const foundCities = findCities(cityValue);

//         renderCities(foundCities);
//     });
// }

// initCitySelection();
// initCitySearch();

// cityInput.addEventListener('blur', () => {
//     setTimeout(() => {
//         hideDropdown();
//     }, 100);
// });

// cityInput.addEventListener('focus', () => {
//     showDropdown();
// });

// const showDropdown = () => {
//     dropdown.classList.remove('hidden');
// }

// const hideDropdown = () => {
//     dropdown.classList.add('hidden');
// }

// const updateCityInputValue = newValue => {
//     cityInput.value = newValue;
// }

// const findCities = cityToFind => dropdownItems.filter(dropdownCity => isCityMatches(cityToFind, dropdownCity));

// const isCityMatches = (cityToFind, city) => {
//     return city.textContent.toLowerCase().includes(cityToFind.toLowerCase());
// }

// const renderCities = cities => {
//     dropdown.innerHTML = '';

//     cities.forEach(city => {
//         dropdown.append(city);
//     });
// }



// cityInput.onfocus = function () {
//   browsers.style.display = 'block';
//   cityInput.style.borderRadius = "5px 5px 0 0";  
// };
// for (let option of browsers.options) {
//   option.onclick = function () {
//     cityInput.value = option.value;
//     browsers.style.display = 'none';
//     cityInput.style.borderRadius = "5px";
//   }
// };

// cityInput.oninput = function() {
//   currentFocus = -1;
//   var text = cityInput.value.toUpperCase();
//   for (let option of browsers.options) {
//     if(option.value.toUpperCase().indexOf(text) > -1){
//       option.style.display = "block";
//   }else{
//     option.style.display = "none";
//     }
//   };
// }
// var currentFocus = -1;
// cityInput.onkeydown = function(e) {
//   if(e.keyCode == 40){
//     currentFocus++
//    addActive(browsers.options);
//   }
//   else if(e.keyCode == 38){
//     currentFocus--
//    addActive(browsers.options);
//   }
//   else if(e.keyCode == 13){
//     e.preventDefault();
//         if (currentFocus > -1) {
//           /*and simulate a click on the "active" item:*/
//           if (browsers.options) browsers.options[currentFocus].click();
//         }
//   }
// }

// function addActive(x) {
//     if (!x) return false;
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     x[currentFocus].classList.add("active");
//   }
//   function removeActive(x) {
//     for (var i = 0; i < x.length; i++) {
//       x[i].classList.remove("active");
//     }
//   }