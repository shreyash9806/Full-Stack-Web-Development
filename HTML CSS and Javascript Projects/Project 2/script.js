let openbtn = document.getElementById('open-btn');
let closebtn = document.getElementById('close-btn');
let modalContainer = document.querySelector('.modal-container');
openbtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
})


closebtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
})
window.addEventListener('click', (e) => {
    // try to understand
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})

// let openBtn = document.getElementById('open-btn');
// let modalContainer = document.querySelector('.modal-container');
// let body = document.querySelector('body');
// console.log(body);
// body.addEventListener('click',(e) => {
//     const target = e.target;
//     if(target.matches('#open-btn')){
//         modalContainer.style.display = 'block';
//     }
//     else if(target.matches('#close-btn') || target === modalContainer){
//         modalContainer.style.display = 'none';
//     }
// })
