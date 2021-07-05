const button = document.querySelector('.menu');
console.log(button)

const links = document.querySelector('.links');

button.addEventListener('click', ()=>{
    console.log(links.classList)
    if (links.classList.contains('show-menu')) {
        links.classList.remove('show-menu');    
        console.log('menu is there')
    } else {
        links.classList.add('show-menu');
        console.log('menu is not there')
    }
})