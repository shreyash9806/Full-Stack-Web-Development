const play = document.getElementById('play-pause-btn');
const reset = document.getElementById('reset-btn');
let displaytimer = document.getElementById('timer');
let second = 0;
let minute = 0;
let hours = 0;


// Leading Zeroes;
let leadingSeconds;
let leadingMinutes;
let leadingHours;
function stopwatch() {
    second++;
    if (second / 60 === 1) {
        second = 0;
        minute++;

        if (minute / 60 === 1) {
            minute = 0;
            hours++;
        }
    }


    if (second < 10) {
        leadingSeconds = '0' + second.toString();
    }
    else {
        leadingSeconds = second;
    }
    if (minute < 10) {
        leadingMinutes = '0' + minute.toString();
    }
    else {
        leadingMinutes = minute;
    }
    if (hours < 10) {
        leadingHours = '0' + hours.toString();
    }
    else {
        leadingHours = hours;
    }
    displaytimer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

// window.setInterval(stopwatch,1000);

let timerStatus = 'stopped';
let timerInterval;

play.addEventListener('click', () => {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopwatch, 1000);
        play.innerHTML = `<i class="fa fa-light fa-pause"></i>`;
        timerStatus = 'started';
    }
    else {
        window.clearInterval(timerInterval);
        play.innerHTML = `<i class="fa fa-thin fa-play"></i>`;
        timerStatus = 'stopped';
    }
})


reset.addEventListener('click', () => {
    second = 0;
    minute = 0;
    hours = 0;
    displaytimer.innerText = `00:00:00`;
    window.clearInterval(timerInterval);
    play.innerHTML = `<i class="fa fa-thin fa-play"></i>`;
    timerStatus = 'stopped';
})

