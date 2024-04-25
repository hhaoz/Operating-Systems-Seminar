const clickMem = document.querySelector('.js-choose-mem');
const clickPage = document.querySelector('.js-choose-page');
const clickDisk = document.querySelector('.js-choose-disk');
const clickCPU = document.querySelector('.js-choose-cpu');
const showMem = document.querySelector('.js-show-mem');
const showPage = document.querySelector('.js-show-page');
const showDisk = document.querySelector('.js-show-disk');
const showCPU = document.querySelector('.js-show-cpu');

function handleClickMem() {
    showMem.classList.add('show')
    showPage.classList.remove('show')
    showDisk.classList.remove('show')
    showCPU.classList.remove('show')
}

function handleClickPage() {
    showPage.classList.add('show')
    showMem.classList.remove('show')
    showDisk.classList.remove('show')
    showCPU.classList.remove('show')
}

function handleClickDisk() {
    showDisk.classList.add('show')
    showMem.classList.remove('show')
    showPage.classList.remove('show')
    showCPU.classList.remove('show')
}

function handleClickCPU() {
    showCPU.classList.add('show')
    showMem.classList.remove('show')
    showPage.classList.remove('show')
    showDisk.classList.remove('show')
}

clickMem.addEventListener('click', handleClickMem);
clickPage.addEventListener('click', handleClickPage);
clickDisk.addEventListener('click', handleClickDisk);
clickCPU.addEventListener('click', handleClickCPU);

