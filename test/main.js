let title = document.getElementById('title');
let num = document.getElementById('num');


// function changeTitle() {
//     title.textContent = 'Heaven';
// }


const changeTitle2 = () => {
    title.textContent = 'Heaven';
}



let i = 0;
const plusME1 = () => {
    i += 1;
    num.innerText = i;

}

const plusME2 = () => {
    i += 2;
    num.innerText = i;

}
const plusME3 = () => {
    i += 3;
    num.innerText = i;

}

if(i==20){
    const changeTitle2 = () => {
        title.textContent = 'Heaven';
    }
}