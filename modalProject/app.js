const modal = document.querySelector('.modal');
const openButton = document.querySelector('.open-modal');
const closeButton = document.querySelector('.close');

openButton.addEventListener('click', ()=>{
    modal.classList.toggle('hideModal');
})

closeButton.addEventListener('click', ()=>{
    modal.classList.toggle('hideModal');
})