import './index.css'

const dropdownHeader = document.querySelector('.dropdown__header')
const dropdownOpenButton = document.querySelector(
  '.dropdown__header__openButton',
)
const dropdownContent = document.querySelector('.dropdown__content')

const toggleDropdown = () => {
  dropdownHeader.classList.toggle('dropdown__header--open')
  dropdownOpenButton.classList.toggle('dropdown__header__openButton--open')
  dropdownContent.classList.toggle('dropdown__content--open')
}

dropdownOpenButton.addEventListener('click', toggleDropdown)
