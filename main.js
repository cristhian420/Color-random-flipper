const digits = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
const btn = document.querySelector('.btn');
const colorNumber = document.querySelector('.color');
const container = document.querySelector('.main-container');
const title = document.querySelector('.title');
const firma = document.querySelector('.firma')

btn.addEventListener('click',randomColor);

function randomColor(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += digits[randomNumbers()];
    }
    colorNumber.innerText = hexColor;
    container.style.backgroundColor = hexColor;
    title.style.color = hexColor;
    firma.style.color = hexColor;
    

}
function randomNumbers(){
    return Math.floor(Math.random() * digits.length);
}