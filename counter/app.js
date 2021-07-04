const allButtons = document.querySelectorAll('button');
let count = document.querySelector('.count');
let tempCount;
allButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        tempCount = grabCount(count);
        switch (button.name) {
            case 'increase':
                tempCount += 1;
                break;
            case 'reset':
                tempCount = 0;
                break;
            case 'decrease':
                tempCount -= 1;
                break;
        
            default:
                break;
        }
        setCount(count, tempCount)     
    })
})

function grabCount(element){
    return parseInt(element.textContent);
}

function setCount(element, newCount){
    element.textContent = newCount;
    return;
}