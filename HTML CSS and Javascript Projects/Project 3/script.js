const ques = document.querySelectorAll('.content-question');
const ans = document.querySelectorAll('.content-answer');

for (let i = 0; i < ques.length; i++) {
    ques[i].addEventListener('click', () => {
        ans[i].classList.toggle('active');
        ques[i].classList.toggle('active-1');
        ques[i].classList.toggle('active-2');
    })
}
