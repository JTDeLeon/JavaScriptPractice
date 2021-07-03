window.colors = ['Grey', 'red', 'blue'];


const btn = document.querySelector('.btn');
let colorName = document.querySelector('.color');
let background = document.querySelector('.main');

let checker = -1;
btn.addEventListener('click', ()=>{
    
    //Get the random color
    let random = getRandom(colors);
    while(random == checker){
        random = getRandom(colors);
    }
    console.log('color is : ', colors[random]);
    checker = random;

    //Change the page
    colorName.textContent = colors[random];
    background.style.background = colors[random];

    
})

function getRandom(array){
    let random = Math.floor(Math.random() * array.length);
    return random;
}