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

// WIFI ICON 
const menuWifi = document.querySelector('.menu-wifi')
const navWifi = document.querySelector('.nav-wifi')


menuWifi.addEventListener('click', ()=> {
  navWifi.classList.toggle('hide')
});

// LOCATION ICON
const menuLocation = document.querySelector('.menu-location')
const navLocation = document.querySelector('.nav-location')

menuLocation.addEventListener('click', ()=> {
  navLocation.classList.toggle('show')
});

// BLUETOOTH ICON
const menuBluetooth = document.querySelector('.menu-bluetooth')
const navBluetooth = document.querySelector('.nav-bluetooth')

menuBluetooth.addEventListener('click', ()=> {
  navBluetooth.classList.toggle('show')
});

// BLUETOOTH ICON
const menuVolume = document.querySelector('.menu-volume')
const navVolume = document.querySelector('.nav-volume')

menuVolume.addEventListener('click', ()=> {
  navVolume.classList.toggle('show')
});

// BLUETOOTH ICON
const menuPlane = document.querySelector('.menu-plane')
const navPlane = document.querySelector('.nav-plane')

menuPlane.addEventListener('click', ()=> {
  navPlane.classList.toggle('show')
});