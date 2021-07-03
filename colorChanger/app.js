window.colors = ['Grey', 'red', 'blue'];


const btn = document.querySelector('.btn');
let colorName = document.querySelector('.color');
let background = document.querySelector('.main');

const inputSection = document.querySelector('.colorinput');
const colorInputButton = document.querySelector('.colorAddButton');
const messageSection = document.querySelector('.message');

let checker = -1;

// Color Changer by Click
btn.addEventListener('click', ()=>{
    //Get the random color
    let random = getRandom(colors);
    while(random == checker){
        random = getRandom(colors);
    }
    checker = random;

    //Change the page
    colorName.textContent = colors[random];
    background.style.background = colors[random];

    clearInput(messageSection)
})

colorInputButton.addEventListener('click', ()=>{
    console.log('input button clicked')

    let value = inputSection.value;

    if(value) {
        //check length
        if(value.length < 10) {

            colors.push(value);
    
            messageSection.textContent = `Success! You've added ${value} to the rotation of colors.`;
            clearInput(inputSection)
        } else {
            messageSection.textContent = 'Check the Value and Try Again';
        }
    } else {
        
        messageSection.textContent = `Sorry, please enter a value first!`;
    }
})

// FUNCTIONS 

//Get Random Number from length of array
function getRandom(array){
    let random = Math.floor(Math.random() * array.length);
    return random;
}

//Clear the input of input element
function clearInput(element) {
    if(element.value){
        element.value = '';
    } else if (element.textContent) {
        element.textContent = '';
    }
}