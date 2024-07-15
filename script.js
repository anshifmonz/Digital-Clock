const eday = document.getElementById("day");
const ehour = document.getElementById("hours");
const eminutes = document.getElementById("minutes");
const eseconds = document.getElementById("seconds");
const PM_AM = document.getElementById("pm-am");

const getTime = () => {
    const current = new Date();
    const options = { weekday: 'long' };
    const day = current.toLocaleDateString('en-US', options);
    
    let hour = current.getHours();
    let minute = current.getMinutes();
    let second  = current.getSeconds();

    if (hour >= 12) {
        PM_AM.textContent = 'PM';
    } else {
        PM_AM.textContent = 'AM';
    }
    if (hour > 12) {
        hour = hour - 12;
    } 
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    eday.textContent = day;
    ehour.textContent = hour;
    eminutes.textContent = minute;
    eseconds.textContent = second;
}
getTime();
setInterval(getTime, 1000);