
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const titled = document.getElementById('title');

const republicDay = new Date('01 Jan 2025');

const countdown = function () {
    //const targetDate = new Date(republicDay);
    const currentDate = new Date();
    const totalMiliSecond = (republicDay - currentDate) / 1000;

    const days = Math.round(totalMiliSecond / 3600 / 24);
    const hours = Math.round(totalMiliSecond / 60 / 60) % 24;
    const minutes = Math.round(totalMiliSecond / 60) % 60;
    const seconds = Math.round(totalMiliSecond) % 60;

    day.innerHTML = formatTime(days);
    hour.innerHTML = formatTime(hours);
    minute.innerHTML = formatTime(minutes);
    second.innerHTML = formatTime(seconds);
}

const formatTime = function (time) {
    return (time < 10 ? `0${time}` : time)
}
countdown();

// Initial call
const countdownInterval = setInterval(countdown, 1000);

setTimeout(() => {
    clearInterval(countdownInterval);
    titled.innerHTML = 'Happy New Year!';
}, (republicDay - new Date()) / 1000)



