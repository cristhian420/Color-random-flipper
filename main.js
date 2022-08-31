const digits = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
const btn = document.querySelector('.btn');
const colorNumber = document.querySelector('.color');
const container = document.querySelector('.main-container');

btn.addEventListener('click',randomColor);

function randomColor(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += digits[randomNumbers()];
    }
    colorNumber.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
    

}


function randomNumbers(){
    return Math.floor(Math.random() * digits.length);
}
console.log(randomNumbers())
console.log(randomColor())
