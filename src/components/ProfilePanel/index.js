import './index.css'

const dropdownHeader = document.querySelector('.dropdown__header');
const dropdownOpenButton = document.querySelector('.dropdown__header__openButton');
const dropdownContent = document.querySelector('.dropdown__content');

const openDropdown = () => {
  if (dropdownHeader.className === 'dropdown__header') {
    dropdownHeader.className += ' dropdown__header--open';
    dropdownOpenButton.className += ' dropdown__header__openButton--open';
    dropdownContent.className += ' dropdown__content--open';
  } else {
  dropdownHeader.className = 'dropdown__header';
    dropdownOpenButton.className = 'dropdown__header__openButton'
    dropdownContent.className = 'dropdown__content'
  };
}

dropdownOpenButton.addEventListener('click', openDropdown)

// const dropDownElements = {
//   dropdownHeader: document.querySelector('.dropdown__header'),
//   dropdownOpenButton: document.querySelector('.dropdown__header__openButton'),
//   dropdownContent: document.querySelector('.dropdown__content'),
// }

// const openDropdown = () => {
//   if (dropDownElements.dropdownHeader.className === 'dropdown__header'){
//     for (let key in dropDownElements){
//       if (dropDownElements.hasOwnProperty(key)) {
//         console.log(dropDownElements[key])
//         // dropDownElements[key.className] += ' ${key}--open'
//       }
//     }
//   }else {
//      console.log('LOL')
//   }
// }

// dropDownElements.dropdownOpenButton.addEventListener('click', openDropdown)