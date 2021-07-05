var data = {
    reviews : [
        {
            name : "Jonathan T Deleon",
            title : "Web Dev",
            review : "This is the Review For Jonathan"
        },
        
        {
            name : "Jonah",
            title : "Kid",
            review : "This is the Review For Jonah"
        },
        
        {
            name : "Leziel",
            title : "Finance",
            review : "This is the Review For Leziel"
        },
    ]
    
}
    

let name = document.querySelector('.name');
let title = document.querySelector('.title');
let reviewText = document.querySelector('.review-text');


name.textContent = data.reviews[0].name;
title.textContent = data.reviews[0].title;
reviewText.textContent = data.reviews[0].review;

let btn = document.querySelector('.suprise');
let checker = 0;

// Work functionality for Suprise button
btn.addEventListener('click', ()=>{
    //Get the random color
    let random = getRandom(data.reviews);
    while(random == checker){
        random = getRandom(data.reviews);
    }
    checker = random;

    name.textContent = data.reviews[random].name;
    title.textContent = data.reviews[random].title;
    reviewText.textContent = data.reviews[random].review;
})

let navs = document.querySelectorAll('.nav');
navs.forEach((nav)=>{
    nav.addEventListener('click',(item)=>{
        let buttonID = item.srcElement.id
        
        if(buttonID == 'left'){
            checker -= 1;
            console.log('checker before ',checker)
            if(checker < 0) {
                console.log('restart review from top')
                checker = data.reviews.length-1;
                console.log(checker)
                displayReview(checker)
            }
            else {
                console.log('display next review');
                displayReview(checker)
            }
        } else {
            checker += 1;
            if(checker >= data.reviews.length) {
                console.log('restart review from zero')
                checker = 0;
                displayReview(checker)
            }
            else {
                console.log('display next review');
                displayReview(checker)
            }
            
        }
        
    })
})

//Get Random Number from length of array
function getRandom(array){
    let random = Math.floor(Math.random() * array.length);
    return random;
}

function displayReview(checker){
    name.textContent = data.reviews[checker].name;
    title.textContent = data.reviews[checker].title;
    reviewText.textContent = data.reviews[checker].review;
}