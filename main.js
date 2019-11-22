// PHONE MENU
const phoneNav = document.querySelector('.phone-nav')
const phoneMenu = document.querySelector('.phone-menu')

phoneNav.addEventListener('click', ()=> {
  phoneMenu.classList.toggle('phone-menu-active')
});

// UNLOCK PHONE
const phoneDisplay = document.querySelector('.phone-display')
const fingerPrint = document.querySelector('.finger-print')
const phoneLock = document.querySelector('.phone-lock')

fingerPrint.addEventListener('click', ()=> {
  phoneDisplay.classList.toggle('phone-display-active'),
  fingerPrint.classList.toggle('finger-print-disabled'),
  phoneLock.classList.toggle('phone-lock-active')
});

phoneLock.addEventListener('click', ()=> {
  phoneDisplay.classList.toggle('phone-display-active'),
  fingerPrint.classList.toggle('finger-print-disabled'),
  phoneLock.classList.toggle('phone-lock-active')
});

// LANDSCAPE MODE
const phone = document.querySelector('.phone')
const landscape = document.querySelector('.landscape')

landscape.addEventListener('click', ()=> {
  phone.classList.toggle('phone-landscape')
});

// ICONS 

document.querySelectorAll('.menu-icon').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('menu-item-active');
  })
})
