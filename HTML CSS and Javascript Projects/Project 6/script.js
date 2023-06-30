const numbs = document.querySelectorAll('.box');
const calcBox = document.getElementById('calcBox');
calcBox.value = "";

for (let i = 0; i < numbs.length; i++) {
    if (i == 0 || i == 1 || i == 16) {
        continue;
    }
    else if (i == 6) {
        numbs[i].addEventListener('click', () => {
            calcBox.value = `${calcBox.value}*`;
        })
    }
    else if (i == 2) {
        numbs[i].addEventListener('click', () => {
            calcBox.value = `${calcBox.value}/`;
        })
    }
    else {
        numbs[i].addEventListener('click', () => {
            calcBox.value = `${calcBox.value}${numbs[i].innerText}`;
        })
    }
}

numbs[0].addEventListener('click', () => {
    calcBox.value = "";
})
numbs[1].addEventListener('click', () => {
    const str = calcBox.value;
    calcBox.value = `${calcBox.value.slice(0, str.length - 1)}`;
})

numbs[16].addEventListener('click', () => {
    try {
        calcBox.value = eval(calcBox.value);
    }
    catch (e) {
        calcBox.value = 'Invalid Operation';
    }
})
