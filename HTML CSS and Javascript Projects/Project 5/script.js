const task = document.getElementById('task');
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    const box = document.createElement('div');
    const p = document.createElement('p');
    box.setAttribute('id', 'box');
    box.append(p);
    p.innerText = `${task.value}`;

    // Check Button
    const button1 = document.createElement('button');
    button1.innerHTML = `<i class="fa-solid fa-check"></i>`;
    button1.classList.add('right-btn');
    box.append(button1);


    // Delete Button
    const button2 = document.createElement('button');
    button2.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    button2.classList.add('delete-btn');
    box.append(button2);

    document.body.appendChild(box);

    task.value = "";

    button1.addEventListener('click', () => {
        p.classList.toggle('line');
    })
    button2.addEventListener('click', () => {
        box.remove();
    })
});



