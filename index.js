const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
setInterval(() => {
    date = new Date ()
    hrs = date.getHours()
    // console.log(hour)
    min = date.getMinutes()
    sec = date.getSeconds()

    hrotation = 30*hrs + min/2
    // console.log(hrotation)
    mrotation = 6*min
    srotation = 6*sec

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;


}, 1000);